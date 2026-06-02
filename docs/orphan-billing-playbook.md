# Orphan OrderBilling — Operations Playbook

An **orphan billing** is an `orderbilling` document with `status: APPROVED` that has no linked `order` where `order.BillingInfo` equals that billing `_id`.

## Detect orphan billings (MongoDB)

```javascript
// Approved billings with no matching order
db.orderbillings.aggregate([
  { $match: { status: /^APPROVED$/i } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "BillingInfo",
      as: "orders",
    },
  },
  { $match: { orders: { $size: 0 } } },
  {
    $project: {
      _id: 1,
      oId: 1,
      email: 1,
      chargetotal: 1,
      ccbrand: 1,
      approvalcode: 1,
      ipgTransactionId: 1,
      txndate: 1,
      status: 1,
    },
  },
  { $sort: { txndate: -1 } },
]);
```

## Cloud Logging queries (Google Cloud Run)

Filter structured logs from the server:

```
jsonPayload.event="payment.orphan_detected"
```

Correlate a single checkout:

```
jsonPayload.pendingId="<pending-checkout-uuid>"
OR jsonPayload.billingId="<billing-object-id>"
```

Other useful events:

| Event | Meaning |
|-------|---------|
| `checkout.pending_created` | Client saved cart before card redirect |
| `payment.webhook_received` | Gateway POST to `/processpayment` |
| `payment.billing_created` | `createOrderBilling` succeeded |
| `order.create_attempt` | Server tried to fulfill from pending checkout |
| `order.created` | Order saved and linked |
| `order.create_failed` | Fulfillment error |
| `payment.orphan_detected` | Billing approved but no order after fulfill |

## Recommended alert (GCP)

1. **Logs Explorer** → create log-based metric counting `payment.orphan_detected` per 5 minutes.
2. Alert when count &gt; 0.

## Customer refund playbook

1. Find the billing record (support email, `approvalcode`, or `ipgTransactionId`).
2. Process refund in the payment processor using `ipgTransactionId` / `approvalcode` / `chargetotal`.
3. Mark internal ticket resolved; note billing `_id` and `oId` (pending checkout id if present).

## Manual order recovery (customer still wants food)

1. Confirm payment in processor and in `orderbillings` (`status: APPROVED`).
2. Check `pendingcheckouts` for `pendingId` = billing `oId`:

```javascript
db.pendingcheckouts.findOne({ pendingId: "<billing.oId>" });
```

3. If pending exists with cart data, create order via admin/support tooling or GraphQL `createOrder` using pending fields and `BillingInfo: <billing._id>`.
4. If no pending document (legacy checkout), reconstruct cart from customer communication.

## Prevention (implemented)

- **Pending checkout**: Cart persisted server-side before card payment; `oid` sent to gateway.
- **`/processpayment`**: After approved billing, server calls `fulfillOrderFromPending` before redirecting the browser.
- **Client fallback**: `PaymentProcessScreen` loads existing order by billing id or retries `createOrder`.
- **Structured logging**: All checkout/payment steps emit JSON logs for Cloud Logging.

## Environment variables (web)

Set in production build:

- `REACT_APP_TRANSACTION_NOTIFICATION_URL_LIVE` — server webhook URL (e.g. `https://<cloud-run-host>/processpayment`)

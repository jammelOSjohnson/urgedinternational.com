// NEW FLOW
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import {
  ConnectionContext,
  SubscriptionServer,
} from "subscriptions-transport-ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
// NEW FLOW
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";
import mongoose from "mongoose";
import axios from "axios";
import moment from "moment-timezone";
import { log } from "./logger.js";
import { apolloLoggingPlugin } from "./apolloLoggingPlugin.js";
import { fulfillOrderFromPending } from "./services/fulfillOrder.js";

//var cors = require("cors");

const PORT = 8080;

const CREATE_ORDER_BILLING_MUTATION = `
      mutation CreateOrderBilling($oId: String, $txndate: String, $ccbin: String, $processor: String, $saddr2: String, $saddr1: String, $cccountry: String, $expmonth: String, $hashalgorithm: String, $endpointTransactionId: String, $currency: String, $processorresponsecode: String, $chargetotal: String, $email: String, $terminalid: String, $associationResponseCode: String, $approvalcode: String, $expyear: String, $responsehash: String, $responsecode3Dsecure: String, $bstate: String, $schemeTransactionId: String, $tdate: String, $installmentsinterest: String, $bname: String, $phone: String, $ccbrand: String, $sname: String, $sstate: String, $refnumber: String, $txntype: String, $paymentMethod: String, $txndatetime: String, $cardnumber: String, $ipgTransactionId: String, $scountry: String, $baddr1: String, $bcountry: String, $baddr2: String, $status: String) {
        createOrderBilling(oId: $oId, txndate: $txndate, ccbin: $ccbin, processor: $processor, saddr2: $saddr2, saddr1: $saddr1, cccountry: $cccountry, Expmonth: $expmonth, hashalgorithm: $hashalgorithm, endpointTransactionId: $endpointTransactionId, currency: $currency, processorresponsecode: $processorresponsecode, chargetotal: $chargetotal, email: $email, terminalid: $terminalid, associationResponseCode: $associationResponseCode, approvalcode: $approvalcode, expyear: $expyear, responsehash: $responsehash, responsecode3dsecure: $responsecode3Dsecure, bstate: $bstate, schemeTransactionId: $schemeTransactionId, tdate: $tdate, installmentsinterest: $installmentsinterest, bname: $bname, phone: $phone, ccbrand: $ccbrand, sname: $sname, sstate: $sstate, refnumber: $refnumber, txntype: $txntype, paymentMethod: $paymentMethod, txndatetime: $txndatetime, cardnumber: $cardnumber, ipgTransactionId: $ipgTransactionId, scountry: $scountry, baddr1: $baddr1, bcountry: $bcountry, baddr2: $baddr2, status: $status) {
          _id
          approvalcode
          associationResponseCode
          baddr1
          baddr2
          bcountry
          bname
          bstate
          cardnumber
          ccbin
          ccbrand
          cccountry
          chargetotal
          currency
          email
          endpointTransactionId
          expyear
          hashalgorithm
          ipgTransactionId
          installmentsinterest
          oId
          paymentMethod
          phone
          processor
          processorresponsecode
          refnumber
          responsecode3dsecure
          responsehash
          saddr1
          schemeTransactionId
          saddr2
          scountry
          sstate
          sname
          status
          tdate
          terminalid
          txndate
          txndatetime
          txntype
        }
      }
      `;

function graphqlUrl() {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:${PORT}/graphql`
    : `${process.env.LIVE_BACKEND}/graphql`;
}

async function createBillingViaGraphql(variables: Record<string, unknown>) {
  const response = await axios.post(graphqlUrl(), {
    query: CREATE_ORDER_BILLING_MUTATION,
    variables,
  });
  return response.data;
}

export async function startServer() {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  const httpServer = createServer(app);

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  let subscriptionServer;
  const corsOptions = {
    origin: process.env.FRONTEND_HOST, // <- allow request from all domains
    credentials: true,
  };

  const loggingPlugin = apolloLoggingPlugin();

  const server =
    process.env.NODE_ENV === "development"
      ? new ApolloServer({
          typeDefs: typeDefs,
          resolvers: resolvers,
          csrfPrevention: true,
          cache: "bounded",
          plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
            loggingPlugin,
            {
              async serverWillStart() {
                return {
                  async drainServer() {
                    subscriptionServer.close();
                  },
                };
              },
            },
          ],
          // introspection: true,
          // playground: true,
        })
      : new ApolloServer({
          typeDefs: typeDefs,
          resolvers: resolvers,
          csrfPrevention: true,
          cache: "bounded",
          plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageProductionDefault({ footer: false }),
            loggingPlugin,
            {
              async serverWillStart() {
                return {
                  async drainServer() {
                    subscriptionServer.close();
                  },
                };
              },
            },
          ],
        });

  subscriptionServer = SubscriptionServer.create(
    {
      // This is the `schema` we just created.
      schema,
      // These are imported from `graphql`.
      execute,
      subscribe,
      // Providing `onConnect` is the `SubscriptionServer` equivalent to the
      // `context` function in `ApolloServer`. Please [see the docs](https://github.com/apollographql/subscriptions-transport-ws#constructoroptions-socketoptions--socketserver)
      // for more information on this hook.
      async onConnect(
        connectionParams: Object,
        webSocket: WebSocket,
        context: ConnectionContext,
      ) {
        // If an object is returned here, it will be passed as the `context`
        // argument to your subscription resolvers.
      },
    },
    {
      // This is the `httpServer` we created in a previous step.
      server: httpServer,
      // This `server` is the instance returned from `new ApolloServer`.
      path: server.graphqlPath,
    },
  );

  try {
    app.post("/processpayment", async (req, res) => {
      const pendingId = req.body.oid;
      const checkoutTraceId = pendingId ?? undefined;

      log.info({
        event: "payment.webhook_received",
        pendingId,
        status: req.body.status,
        ccbrand: req.body.ccbrand,
        ipgTransactionId: req.body.ipgTransactionId,
        approvalcode: req.body.approval_code,
        email: req.body.email,
      });

      try {
        const dateString = req.body.txndate_processed;
        const parts = dateString.split(" ");
        const dateParts = parts[0].split("/");
        const timeParts = parts[1].split(":");

        const year = parseInt(dateParts[2]) + 2000;
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[0]);
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const seconds = parseInt(timeParts[2]);

        const dateTime = new Date(year, month, day, hours, minutes, seconds);
        const estTime = moment.tz(dateTime, "America/Jamaica").format();

        const variables = {
          ...req.body,
          txndate: estTime,
          processor: req.body.processor_response_code,
          hashalgorithm: req.body.hash_algorithm,
          approvalcode: req.body.approval_code,
          responsehash: req.body.response_hash,
          responsecode3dsecure: req.body.response_code_3dsecure,
          installmentsinterest: req.body.installments_interest,
          terminalid: req.body.terminal_id,
          oId: req.body.oid,
        };

        const result = await createBillingViaGraphql(variables);
        const billing = result.data?.createOrderBilling;
        const hasErrors =
          Array.isArray(result.errors) && result.errors.length > 0;

        if (hasErrors) {
          log.error({
            event: "payment.billing_failed",
            pendingId,
            checkoutTraceId,
            errors: result.errors,
          });
          return res.redirect(
            `${process.env.FRONTEND_HOST}/ProcessPaymentResult/Fail`,
          );
        }

        if (billing == null) {
          log.warn({
            event: "payment.billing_failed",
            pendingId,
            checkoutTraceId,
            error: "billing_null",
          });
          return res.redirect(
            `${process.env.FRONTEND_HOST}/ProcessPaymentResult/Fail`,
          );
        }

        const billingId = billing._id;
        const orderStatus = (billing.status || "").trim().toUpperCase();

        log.info({
          event: "payment.billing_created",
          billingId,
          pendingId,
          checkoutTraceId,
          status: orderStatus,
        });

        if (orderStatus !== "APPROVED") {
          return res.redirect(
            `${process.env.FRONTEND_HOST}/ProcessPaymentResult/Fail`,
          );
        }

        let order: Awaited<ReturnType<typeof fulfillOrderFromPending>> = null;
        if (pendingId) {
          order = await fulfillOrderFromPending(
            pendingId,
            billingId,
            checkoutTraceId,
          );
        }

        if (order == null && pendingId) {
          log.error({
            event: "payment.orphan_detected",
            billingId,
            pendingId,
            checkoutTraceId,
          });
        }

        return res.redirect(
          `${process.env.FRONTEND_HOST}/ProcessPaymentResult/${billingId}`,
        );
      } catch (error) {
        log.error({
          event: "payment.webhook_failed",
          pendingId,
          checkoutTraceId,
          error: error instanceof Error ? error.message : String(error),
        });
        return res.redirect(
          `${process.env.FRONTEND_HOST}/ProcessPaymentResult/Fail`,
        );
      }
    });

    let conn_string = "";
    if (process.env.NODE_ENV == "development") {
      conn_string = `${process.env.DBCONN_BASEURL}:${process.env.DBCONN_PORT}/${process.env.DBCONN_DBNAME}`;
    } else if (process.env.NODE_ENV == "production") {
      conn_string = `${process.env.DBCONN_BASEURL}://${process.env.DBCONN_USR_NAME}:${process.env.DBCONN_USR_PSW}@${process.env.DBCONN_AT}/${process.env.DBCONN_DBNAME}?${process.env.DBCONN_END}`;
    }

    await mongoose
      .connect(conn_string)
      .then(() => log.info({ event: "database.connected" }))
      .catch((err) =>
        log.error({
          event: "database.connection_failed",
          error: err instanceof Error ? err.message : String(err),
        }),
      );
  } catch (err) {
    log.error({
      event: "server.startup_failed",
      error: err instanceof Error ? err.message : String(err),
    });
  }

  await server.start();
  server.applyMiddleware({ app, path: "/graphql", cors: corsOptions });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve),
  );
  log.info({
    event: "server.ready",
    port: PORT,
    graphqlPath: server.graphqlPath,
  });
}

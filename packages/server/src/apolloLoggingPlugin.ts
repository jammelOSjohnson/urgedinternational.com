import type { ApolloServerPlugin } from "apollo-server-plugin-base";
import { log } from "./logger.js";

const CHECKOUT_MUTATIONS = new Set([
  "createOrder",
  "createOrderBilling",
  "createPendingCheckout",
]);

export function apolloLoggingPlugin(): ApolloServerPlugin {
  return {
    async requestDidStart() {
      const start = Date.now();
      let operationName = "anonymous";

      return {
        async didResolveOperation(requestContext: {
          operationName?: string | null;
          operation?: { name?: { value?: string } };
        }) {
          operationName =
            requestContext.operationName ??
            requestContext.operation?.name?.value ??
            "anonymous";
        },
        async willSendResponse(requestContext: {
          errors?: readonly { message: string }[];
        }) {
          if (!CHECKOUT_MUTATIONS.has(operationName)) {
            return;
          }
          const durationMs = Date.now() - start;
          const errors = requestContext.errors?.map((e) => e.message) ?? [];
          if (errors.length > 0) {
            log.error({
              event: "graphql.mutation_failed",
              operation: operationName,
              durationMs,
              errors,
            });
          } else {
            log.info({
              event: "graphql.mutation_completed",
              operation: operationName,
              durationMs,
            });
          }
        },
      };
    },
  };
}

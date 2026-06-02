import { RedisPubSub } from "graphql-redis-subscriptions";

const isProd = process.env.NODE_ENV === "production";

export const pubsub = new RedisPubSub({
  connection: {
    host: process.env.REDIS_DOMAIN_NAME,
    port: 6379,
    ...(isProd && { password: process.env.REDIS_PASSWORD }),
    retryStrategy: (times) => Math.max(times * 100, 3000),
  },
});

export const ORDER_CREATED = "ORDER_CREATED";

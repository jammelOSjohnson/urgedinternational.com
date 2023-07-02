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
} from "apollo-server-core";
// NEW FLOW
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import axios from "axios";
import moment from "moment-timezone";

//var cors = require("cors");

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
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
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
        context: ConnectionContext
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
    }
  );

  try {
    app.post("/processpayment", (req, res) => {
      // prepare query
      // console.log("result is", req.body);
      const url = `http://localhost:${PORT}/`;
      const query = `
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
          oid
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

      // Prepare txndate
      const dateString = req.body.txndate_processed;
      const parts = dateString.split(" ");
      const dateParts = parts[0].split("/");
      const timeParts = parts[1].split(":");

      // Note: The year is assumed to be in the format 'YY'. Adjust the logic if the year is in a different format.
      const year = parseInt(dateParts[2]) + 2000;
      const month = parseInt(dateParts[1]) - 1; // Months in JavaScript are zero-based (0-11)
      const day = parseInt(dateParts[0]);
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const seconds = parseInt(timeParts[2]);

      const dateTime = new Date(year, month, day, hours, minutes, seconds);
      const estTime = moment.tz(dateTime, "America/Jamaica").format();
      // console.log(estTime);

      //prepare variables
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
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "*/*",
      //     Connection: "keep-alive",
      //     Origin: process.env.FRONTEND_HOST,
      //   },
      // }

      //send request to store billing info
      axios
        .post(url, { query: query, variables: variables })
        .then((response) => {
          console.log(response.data);
          let result = response.data;
          let orderOID = undefined;
          let orderStatus = "";
          if (
            result.data.createOrderBilling !== null &&
            result.data.createOrderBilling !== undefined
          ) {
            orderOID = result.data.createOrderBilling._id;
            orderStatus = result.data.createOrderBilling.status;
          }

          if (orderStatus === "APPROVED") {
            res.redirect(
              `http://localhost:3000/ProcessPaymentResult/${orderOID}`
            );
          } else {
            res.redirect("http://localhost:3000/ProcessPaymentResult/Fail");
          }
        })
        .catch((error) => {
          console.log(error);
          res.redirect("http://localhost:3000/ProcessPaymentResult/Fail");
        });
    });

    let conn_string = "";
    if (process.env.NODE_ENV == "development") {
      conn_string = `${process.env.DBCONN_BASEURL}:${process.env.DBCONN_PORT}/${process.env.DBCONN_DBNAME}`;
    } else if (process.env.NODE_ENV == "production") {
      conn_string = `${process.env.DBCONN_BASEURL}://${process.env.DBCONN_USR_NAME}:${process.env.DBCONN_USR_PSW}@${process.env.DBCONN_AT}/${process.env.DBCONN_DBNAME}?${process.env.DBCONN_END}`;
    }

    //test docker locally
    //conn_string = `${process.env.DBCONN_BASEURL}://${process.env.DBCONN_USR_NAME}:${process.env.DBCONN_USR_PSW}@${process.env.DBCONN_AT}/${process.env.DBCONN_DBNAME}?${process.env.DBCONN_END}`;

    console.log(conn_string);
    console.log(process.env.NODE_ENV);
    console.log("host is: " + process.env.FRONTEND_HOST);
    console.log("redis domain name is: " + process.env.REDIS_DOMAIN_NAME);
    await mongoose
      .connect(conn_string, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then((db) => console.log("Mongoose connected..."))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }

  await server.start();
  server.applyMiddleware({ app, path: "/", cors: corsOptions });

  const PORT = 8080;
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

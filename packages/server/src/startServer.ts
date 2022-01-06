import typeDefs from './typeDefs';
import resolvers from './resolvers';
import mongoose from 'mongoose';
//subscriptions test 
import { GooglePubSub } from '@axelspringer/graphql-google-pubsub';// For Production
import { RedisPubSub } from "graphql-redis-subscriptions";// For Production
import { GraphQLServer, PubSub } from "graphql-yoga";
import { redis } from "./redis";
//import { applyMiddleware } from "graphql-middleware";
// import { PubSub } from 'graphql-subscriptions';
// import { createServer } from 'http';
// import { execute, subscribe } from 'graphql';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { makeExecutableSchema } from '@graphql-tools/schema';


var cors = require('cors')

const pubsub = new PubSub();
const pubsubProd = new RedisPubSub();

export async function startServer() {

    // const apolloServer = process.env.NODE_ENV == "development" ? 
    //     new ApolloServer({
    //         typeDefs: typeDefs,
    //         resolvers: resolvers,
    //         context: ({req, res}) => ({req, res, pubsub}),
    //         plugins: [
    //             ApolloServerPluginLandingPageGraphQLPlayground(),
    //         ],
    //     }) 
    //     : 
    //     new ApolloServer({
    //         typeDefs: typeDefs,
    //         resolvers: resolvers,
    //         context: ({req, res}) => ({req, res, pubsubProd}),
    //     });

    // await apolloServer.start();

    // apolloServer.applyMiddleware({ app: app});

    const server = process.env.NODE_ENV == "development" ? 
        new GraphQLServer({
            typeDefs, 
            resolvers, 
            context:({ request, response }) =>({
                redis, 
                url: request.protocol + "://" + request.get("host"),
                req: request,
                res: response,
                pubsub 
            }),
            //plugins: [ApolloServerPluginLandingPageGraphQLPlayground(),],
        })
    :
        new GraphQLServer({
            typeDefs, 
            resolvers, 
            context: { pubsubProd }
        });

    

    try{
        // server.express.use((req: any, res: { send: (arg0: string) => void; }) => {
        //     res.send("hmm, what do you think you are doing?");
        // })

        let conn_string = "";
        //'mongodb://localhost:27017/urgeddb'
        if(process.env.NODE_ENV == "development"){
            conn_string = `${process.env.DBCONN_BASEURL}:${process.env.DBCONN_PORT}/${process.env.DBCONN_DBNAME}`;
        }else if(process.env.NODE_ENV == "production"){
            conn_string = `${process.env.DBCONN_BASEURL}://${process.env.DBCONN_USR_NAME}:${process.env.DBCONN_USR_PSW}@${process.env.DBCONN_AT}/${process.env.DBCONN_DBNAME}?${process.env.DBCONN_END}`;
        }
         
        
        console.log(conn_string);
        //console.log(process.env);
        await mongoose.connect(conn_string, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(db => console.log('Mongoose connected...'))
            .catch(err => console.log(err));
        
    }catch(err){
        console.log(err);
    }

    
    const PORT = process.env.PORT || 4000;
    await server.start({
        cors,
        port:  PORT
      });
    console.log(`Server is now running on port ${PORT}`);
    
    // httpServer.listen(PORT, () =>
    //     console.log(`Server is now running on port ${PORT}`)
    // );
    // app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}
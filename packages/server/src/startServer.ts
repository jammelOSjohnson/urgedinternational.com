import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import mongoose from 'mongoose';
//var cors = require('cors')

//backendsocket 
//const app = express();
//app.use(cors());
//const server = require("http").createServer(app);
//const socketio = require('socket.io');

export async function startServer() {
    const app = express();
    const apolloServer = process.env.NODE_ENV == "development" ? 
        new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers,
            plugins: [
                ApolloServerPluginLandingPageGraphQLPlayground(),
            ],
        }) 
        : 
        new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers,
        });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app: app});

    
    try{
        app.use((req: any, res: { send: (arg0: string) => void; }) => {
            res.send("hmm, what do you think you are doing?");
        })

        let conn_string = "";
        //'mongodb://localhost:27017/urgeddb'
        if(process.env.NODE_ENV == "development"){
            conn_string = `${process.env.DBCONN_BASEURL}:${process.env.DBCONN_PORT}/${process.env.DBCONN_DBNAME}`;
        }else if(process.env.NODE_ENV == "production"){
            conn_string = `${process.env.DBCONN_BASEURL}://${process.env.DBCONN_USR_NAME}:${process.env.DBCONN_USR_PSW}@${process.env.DBCONN_AT}/${process.env.DBCONN_DBNAME}?${process.env.DBCONN_END}`;
        }
         
        
        //console.log(conn_string);
        //console.log(process.env);
        await mongoose.connect(conn_string, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        
    }catch(err){
        console.log(err);
    }

    console.log('Mongoose connected...');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}
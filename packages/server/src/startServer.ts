import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import mongoose from 'mongoose';

//backendsocket 
//const io = require("socket.io");


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

    app.use((req: any, res: { send: (arg0: string) => void; }) => {
        res.send("hmm, what do you think you are doing?");
    })
    try{
        //Socket Init
        // io.of("/api/socket").on("connection", (socket) => {
        //     console.log("socket.io: User connected: ", socket.id);
    
        //     socket.on("disconnect", () => {
        //         console.log("socket.io: User disconnected: ", socket.id);
        //     });
        // });

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
        });

        // const connection = mongoose.connection;
        // connection.once("open", () => {
        //     console.log("MongoDB database connected");

        //     console.log("setting change streams");
        //     const orderChangeStreams = connection.collection("orders").watch();

        //     orderChangeStreams.on("change", (change) => {
        //         switch (change.operationType) {
        //             case "insert":
        //                 const order = {
        //                     _id: change.fullDocument._id,
        //                     Id: change.fullDocument.Id,
        //                     OrderItems: change.fullDocument.OrderItems, 
        //                     OrderStatus: change.fullDocument.OrderStatus,
        //                     OrderTotal: change.fullDocument.OrderTotal,
        //                     OrderDate: change.fullDocument.OrderDate,
        //                     Rider: change.fullDocument.Rider,
        //                     DeliveryAddress: change.fullDocument.DeliveryAddress,
        //                     PaymentMethod: change.fullDocument.PaymentMethod,
        //                     AdditionalInfo: change.fullDocument.AdditionalInfo,
        //                     DeliveryFee: change.fullDocument.DeliveryFee,
        //                     GCT: change.fullDocument.GCT,
        //                     ServiceCharge: change.fullDocument.ServiceCharge,
        //                     CartTotal: change.fullDocument.CartTotal
        //                 };

        //                 io.of("/api/socket").emit("newOrder", order);
        //                 break;
        //         }
        //     })
        // })
    }catch(err){
        console.log(err);
    }
    

    console.log('Mongoose connected...');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}
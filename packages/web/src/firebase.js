import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/analytics';
import "firebase/functions";
import "firebase/storage";
import "firebase/messaging";
//import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
})

//const analytics = getAnalytics(app);
////console.log(analytics);
export const auth = app.auth();
export const socialAuth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const timeStamp = firebase.firestore.Timestamp;
export const analytics2 = firebase.analytics();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const ref = firebase.storage().ref(); 
export const messaging = firebase.messaging();
export default app
import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/analytics';
//import { getAnalytics } from "firebase/analytics";



// var app = firebase.initializeApp({
//     apiKey: "AIzaSyC7fc5UiOOSshhAQWeSoDYKPL-SyhpPis8",
//     authDomain: "urgedinternational-f9e78.firebaseapp.com",
//     projectId: "urgedinternational-f9e78",
//     storageBucket: "urgedinternational-f9e78.appspot.com",
//     messagingSenderId: "162483458533",
//     appId: "1:162483458533:web:492f366b700391761ddf0c",
//     measurementId: "G-PD84R40CS4"
// })

var app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
})

//const analytics = getAnalytics(app);
//console.log(analytics);
export var auth = app.auth();
export var socialAuth = firebase.auth();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var timeStamp = firebase.firestore.Timestamp;
export var analytics2 = firebase.analytics();
export default app
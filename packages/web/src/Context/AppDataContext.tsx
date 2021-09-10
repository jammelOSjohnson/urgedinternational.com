import type { ReactNode } from 'react'
import {useContext, useReducer, createContext} from 'react';
//import fetchAddressApi from '../Apis/fetchAddressApi';
import  { auth, socialAuth, googleAuthProvider, timeStamp } from '../firebase';

const defaultState = undefined
export type Action = 'get_address';
export type Dispatch = (action: Action) => void;
export type value = typeof defaultState; 
//Create Context
export var AppDataContext = createContext<any>(undefined);



export function useAppData () {
    return useContext(AppDataContext);
}


//create reducer
function appDataReducer(state, action){
    switch(action.type){
        
        case "get_address":
            console.log("dispatching address:");
            console.log(action.payload.Address);
            return{
                ...state,
                Address: action.payload.Address
            };
        case "auth_change":
            //console.log("Auth listener dispatch results.");
            //console.log(action.payload);
            return {
            ...state,
            currentUser: action.payload.currentUser,
            loading: action.payload.loading,
            loggedIn: action.payload.loggedIn
            };
        default:
            return state;
    }
}


//create provider
export default function AppDataProvider({ children }: { children: ReactNode}) {
    //Declare necessary variables
    var currentUser = undefined;
    var loading = true;
    var loggedIn = false;

    //sign up user
    var signup = function signup(currentstate, payload) {
        //retuns a promise
        var result = auth.createUserWithEmailAndPassword(currentstate.email, currentstate.password).then(async function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var payloadf = { ...payload,
            currentUser: user,
            loading: false
          };
          return payloadf;
        }).catch(function (error) {
          // Handle Errors here.
          //var errorCode = error.code;
          //console.log(error.code);
          //var errorMessage = error.message;
          //console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          //console.log(error.email);
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          //console.log(error.credential);
          // ...
          return error.message;
        });
        return result;
    };

    var login = function login(email, password, payload) {
        //retuns a promise
        //console.log("about to log the user in.")
        var result = auth.signInWithEmailAndPassword(email, password).then(async function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var payloadf = { ...payload,
            currentUser: user,
            loading: false
          };
          return payloadf;
        }).catch(function (error) {
          // Handle Errors here.
          //var errorCode = error.code;
          console.log(error.code);
          //var errorMessage = error.message;
          console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          console.log(error.email);
          //The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          console.log(error.credential);
          // ...
          return null;
        });
        return result;
    };

    var gLogin = async function gLogin(payload) {
        //retuns a promise
        //console.log("about to log the user in using google.")
        var result = socialAuth.signInWithPopup(googleAuthProvider).then(async function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          var payloadf = { ...payload,
            currentUser: user,
            loading: false
          };
          return payloadf;
        }).catch(function (error) {
          // Handle Errors here.
          //var errorCode = error.code;
          //console.log(error.code);
          //var errorMessage = error.message;
          //console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          //console.log(error.email);
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          //console.log(error.credential);
          // ...
          return null;
        });
        return result;
      };

    //Get Address TO BE DELETED
    var getAddress = function getAddress(currentState: { Address: string; }){

        

       
    }

    const [value, dispatch] = useReducer(appDataReducer, {
        currentUser,
        loading,
        loggedIn,
        signup,
        login,
        gLogin,
        getAddress
    });
    
     
    return (
        <AppDataContext.Provider value={{ value }}>
            {children}
        </AppDataContext.Provider>
    );
};


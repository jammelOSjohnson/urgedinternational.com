import type { ReactNode } from 'react'
import {useContext, useReducer, createContext} from 'react';
//import fetchAddressApi from '../Apis/fetchAddressApi';
import  { auth, socialAuth, googleAuthProvider, timeStamp } from '../firebase';
import { CREATE_USER_MUTATION, GET_USER_MUTATION, GET_USER_IN_ROLE, GET_ROLE, CREATE_ROLE } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

import serverPI from '../Apis/serverPI';

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
        case "fetch_userinfo":
         console.log("dispatching fetch user info action");
         console.log(action);
         return {
           ...state,
           userInfo: action.payload.userInfo,
           loggedIn: action.payload.loggedIn,
           userRolef: action.payload.userRolef,
           currentUser: action.payload.currentUser
        };
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
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    const [getUser, {error}] = useMutation(GET_USER_MUTATION);
    const [getUserInRole] = useMutation(GET_USER_IN_ROLE);
    const [getRole] = useMutation(GET_ROLE);
    const [addUserToRole] = useMutation(CREATE_ROLE);
    var currentUser = undefined;
    var loading = true;
    var loggedIn = false;

    var userInfo = {
      contactNumber: "",
      email: "",
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      city: ""
    };

    var userRolef= "";

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
            loading: false,
            userInfo: {...userInfo, fullName: currentstate.fullname, email: currentstate.email}
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
    
    var userHasRole = async function userHasRole(uid, payload) {
      console.log("User id is: ");
      console.log(uid);
      console.log("fetching user role");
      var userRef = await getUserInRole({variables: {UserID: uid}}).then(async function(response) {
        console.log("Checking user result");
        if (response.data.getUserInRole.RoleID !== null) {
          console.log("user role exist");
          console.log(response);
          console.log("what is inside payload");
          console.log(payload);
          // Convert to City object
           var userRoleID = response.data.getUserInRole.RoleID;
          console.log("user in role res:");
          console.log(userRoleID);
          if (userRoleID !== null) {
            payload.userRolef = await getRole({variables: {id:userRoleID}}).then(async function (response2) {
              if (response2.data.getRole !== null) {
                var res = response2.data.getRole;
                console.log("Role Exists is?");
                console.log(res);
                return res.description;
              }
            });
          }
    
          return payload;
        } else {
          console.log("No such user role!")
          console.log("creating new userinrole");
          var userInRole = {
            UserID: uid,
            RoleID: process.env.REACT_APP_CUSTOMER_ROLE_ID
          };
          var storeRes = addUserToRole({variables: {UserID: userInRole.UserID, RoleID: userInRole.RoleID}}).then(function (response3) {
            console.log("User successfully added to role!");  
            return true;
          }).catch(function (error) {
            //console.error("Error adding user to role: ", error);
            return false;
          });
    
          if (await storeRes) {
            payload.userRolef = "Customer";
          } 
          console.log("What is in payload after creating role: ");
          console.log(payload);
    
    
          return payload;
        }
      });
      return userRef; //dispatch({type: "fetch_userinfo", payload: userRef});
    };

    var fetchUserInfoForSignUp = async function fetchUserInfoForSignUp(uid, payload, currentState) {
      console.log("User id is: ");
      console.log(uid);
      console.log("the currentState is: ");
      console.log(currentState);
      console.log("fetching user");
      

      
      var userRef = await getUser({variables: { Id: uid}}).then(async function(response) {
        console.log("Checking user result");
        if (response.data.getUser !== null) {
          console.log("user exist");
          console.log(response);
          console.log("what is inside payload");
          console.log(payload);
          // Convert to City object
          var user = response.data.getUser;
    
          if (user !== null) {
            payload.userInfo.contactNumber = user.ContactNumber;
            payload.userInfo.email = user.Email;
            payload.userInfo.fullName = user.FirstName;
            payload.loggedIn = true;
            payload.userInfo.addressLine1 = user.AddressLine1 !== null && user.AddressLine1 !== undefined ? user.AddressLine1 : "";
            payload.userInfo.addressLine2 = user.AddressLine2 !== null && user.AddressLine2 !== undefined ? user.AddressLine2 : "";
            payload.userInfo.city = user.City !== null && user.City !== undefined ? user.City : "";
          }
    
          return payload;
        } else {
          console.log("No such user!")
          console.log("creating new user");
          //console.log("contact number is: " + currentState.contact);
          var user2 = {
            Id: uid,
            FirstName: payload.userInfo.fullName !== null ? payload.userInfo.fullName.toLowerCase() : "",
            LastName: payload.userInfo.fullName !== null ? payload.userInfo.fullName.toLowerCase() : "",
            Email: payload.userInfo.email !== null ? payload.userInfo.email : "",
            AddressLine1: "",
            AddressLine2: "",
            City: "",
            ContactNumber: ""
          };
          //verified: false,
          //verifiedemailsent: false,
          //postalCode: "",
          //stateOrparish: ""
          
          var storeRes = await createUser({variables: {...user2}}).then(function (response2) {
            console.log("User info  successfully written!");
            console.log(response2.data);  
            return true;
          }).catch(function (error) {
            console.error("Error writing user info: ", error);
            return false;
          });
    
          if (storeRes) {
            payload.userInfo.contactNumber = user2.ContactNumber;
            payload.userInfo.email = user2.Email;
            payload.userInfo.fullName = user2.FirstName;
            payload.loggedIn = true;
            payload.userInfo.addressLine1 = user2.AddressLine1 !== null && user2.AddressLine1 !== undefined ? user2.AddressLine1 : "";
            payload.userInfo.addressLine2 = user2.AddressLine2 !== null && user2.AddressLine2 !== undefined ? user2.AddressLine2 : "";
            payload.userInfo.city = user2.City !== null && user2.City !== undefined ? user2.City : "";
          }
    
          return payload;
        }
      }).catch(function(err){
        console.log(err);
      }); 
      console.log("user ref b4 fetch role is: ");
      console.log(userRef);
      var userRoleResf = undefined;
      await userHasRole(uid, userRef).then(function (userRoleRes) {
        console.log("Final user ref after fetch role is: ");
        console.log(userRoleRes);
        userRoleResf = userRoleRes;
        return userRoleRes;
      });
      
      console.log("about to enter dispatch for fetch_userinfo");
      dispatch({
         type: "fetch_userinfo",
         payload: userRoleResf
       });
    };

    var fetchUserInfo = async function fetchUserInfo(uid, payloadf) {
      console.log("User id is: ");
      console.log(uid);
      console.log("fetching user");

      var userRef = getUser({variables: { Id: uid}}).then(async function(response) {
        //console.log("Checking user result for fetch user info");
        if (response !== null) {
           console.log("user exist");
           console.log(response);
        //   console.log("what is inside payload for fetch user info");
        //   console.log(payloadf);
        //   //Convert to City object
        //   var user = doc.data(); //console.log("verify email sent fetch user check ? " + user.verifiedemailsent);
    
        //   if (user !== null) {
        //     payloadf.userInfo.contactNumber = user.contactNumber;
        //     payloadf.userInfo.email = user.email;
        //     payloadf.userInfo.fullName = user.fullName;
        //     payloadf.loggedIn = true;
        //     payloadf.userInfo.addressLine1 = user.addressLine1 !== null && user.addressLine1 !== undefined ? user.addressLine1 : "";
        //     payloadf.userInfo.addressLine2 = user.addressLine2 !== null && user.addressLine2 !== undefined ? user.addressLine2 : "";
        //     payloadf.userInfo.city = user.city !== null && user.city !== undefined ? user.city : "";
        //     payloadf.userInfo.postalCode = user.postalCode !== null && user.postalCode !== undefined ? user.postalCode : "";
        //     payloadf.userInfo.stateOrparish = user.stateOrparish !== null && user.stateOrparish !== undefined ? user.stateOrparish : "";
        //     payloadf.userInfo.verifiedemailsent = user.verifiedemailsent !== null && user.verifiedemailsent !== undefined ? user.verifiedemailsent : true;
        //     payloadf.userInfo.verified = user.verified !== null && user.verified !== undefined ? user.verified : true;
        //   }
    
          return payloadf;
        } else {
          console.log("No such user!")
          console.log(response);
          // console.log("creating new user");
          // var user = {
          //   contactNumber: payloadf.currentUser.phoneNumber !== null ? payloadf.currentUser.phoneNumber : "",
          //   email: payloadf.currentUser.email !== null ? payloadf.currentUser.email : "",
          //   fullName: payloadf.currentUser.displayName !== null ? payloadf.currentUser.displayName.toLowerCase() : "",
          //   verified: false,
          //   verifiedemailsent: false,
          //   addressLine1: "",
          //   addressLine2: "",
          //   city: "",
          //   postalCode: "",
          //   stateOrparish: ""
          // };
          // var storeRes = await db.collection("Users").doc(uid).set(user).then(function (doc) {
          //   console.log("User info  successfully written!");  
          //   return true;
          // }).catch(function (error) {
          //   console.error("Error writing user info: ", error);
          //   return false;
          // });
    
          // if (storeRes) {
          //   payloadf.userInfo.contactNumber = user.contactNumber;
          //   payloadf.userInfo.email = user.email;
          //   payloadf.userInfo.fullName = user.fullName;
          //   payloadf.userInfo.verified = user.verified;
          //   payloadf.userInfo.verifiedemailsent = user.verifiedemailsent;
          //   payloadf.loggedIn = true;
          //   payloadf.userInfo.addressLine1 = user.addressLine1 !== null && user.addressLine1 !== undefined ? user.addressLine1 : "";
          //   payloadf.userInfo.addressLine2 = user.addressLine2 !== null && user.addressLine2 !== undefined ? user.addressLine2 : "";
          //   payloadf.userInfo.city = user.city !== null && user.city !== undefined ? user.city : "";
          //   payloadf.userInfo.postalCode = user.postalCode !== null && user.postalCode !== undefined ? user.postalCode : "";
          //   payloadf.userInfo.stateOrparish = user.stateOrparish !== null && user.stateOrparish !== undefined ? user.stateOrparish : "";
          // }
    
          return payloadf;
        }
      });
      var finaluserRef = await userHasRole(uid, userRef).then(function (userRoleRes) {
        console.log("Final user ref is: ");
        console.log(userRoleRes);
        return userRoleRes;
      });
      dispatch({
        type: "fetch_userinfo",
        payload: finaluserRef
      });
    };

    //Get Address TO BE DELETED
    var getAddress = function getAddress(currentState: { Address: string; }){
       
    }

    const [value, dispatch] = useReducer(appDataReducer, {
        currentUser,
        loading,
        loggedIn,
        userInfo,
        userRolef,
        signup,
        login,
        gLogin,
        getAddress,
        fetchUserInfoForSignUp,
        fetchUserInfo
    });
    
     
    return (
        <AppDataContext.Provider value={{ value }}>
            {children}
        </AppDataContext.Provider>
    );
};


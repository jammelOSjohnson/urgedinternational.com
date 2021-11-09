import type { ReactNode } from 'react'
import {useContext, useReducer, createContext} from 'react';
//import fetchAddressApi from '../Apis/fetchAddressApi';
import  { auth, socialAuth, googleAuthProvider } from '../firebase';
import { CREATE_ORDER, GET_ORDERS_BY_USERID, GET_ORDERS, GET_RESTAURANTS, CREATE_USER_MUTATION, GET_USER_MUTATION, GET_USER_IN_ROLE, GET_ROLE, CREATE_ROLE, GET_MENU_CATEGORIES } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import sendEmail from "../email.js";
import moment from 'moment-timezone';

//import serverPI from '../Apis/serverPI';

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
         //console.log("dispatching fetch user info action");
         //console.log(action);
         return {
           ...state,
           userInfo: action.payload.userInfo,
           loggedIn: action.payload.loggedIn,
           userRolef: action.payload.userRolef,
           currentUser: action.payload.currentUser
        };
        case "get_address":
            //console.log("dispatching address:");
            //console.log(action.payload.Address);
            return{
                ...state,
                Address: action.payload.Address
            };
        case "auth_change":
            ////console.log("Auth listener dispatch results.");
            ////console.log(action.payload);
            return {
            ...state,
            currentUser: action.payload.currentUser,
            loading: action.payload.loading,
            loggedIn: action.payload.loggedIn
            };
        case "logout_user":
            return {
              ...state,
              currentUser: action.payload.currentUser,
              loggedIn: action.payload.loggedIn,
              userInfo: action.payload.userInfo
            }
        case "fetch_restaurants": 
          return {
            ...state,
            restaurants: action.payload.restaurants
          };
        case "view_menu_items":
          return {
            ...state,
            selectedRestaurant: action.payload.selectedRestaurant,
            prevSelectedrestaurant: action.payload.prevSelectedrestaurant
          }
        case "menu_categories":
          return {
            ...state,
            menuCategories: action.payload.menuCategories,
            filteredMenuItems: [],
            filterCategory: undefined
          }
        case "filter_menu_category": 
          return {
            ...state,
            filteredMenuItems: action.payload.filteredMenuItems,
            filterCategory: action.payload.filterCategory
          }
        case "add_cart_item":
          return {
            ...state,
            cartItems: action.payload.cartItems
          }
        case "remove_cart_item":
          return {
            ...state,
            cartItems: action.payload.cartItems
          }
        case "checkout": 
          return {
            ...state,
            cartItems: action.payload.cartItems,
            orders: action.payload.orders,
            selectedRestaurant: action.payload.selectedRestaurant
          }
        case "set_general_location":
          return {
            ...state,
            generalLocation: action.payload.generalLocation
          }
        default:
            return state;
    }
}


//create provider
export default function AppDataProvider({ children }: { children: ReactNode}) {
    //Email variables
    const emailServiceId = "service_9xw19wc";
    const emailNewJobAppTemplate = "template_vt5fmwm";
    const emailUserId = "user_bDLFbepm6Arcdgh7Akzo3";
    //Declare necessary variables
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    const [getUser] = useMutation(GET_USER_MUTATION);
    const [getUserInRole] = useMutation(GET_USER_IN_ROLE);
    const [getRole] = useMutation(GET_ROLE);
    const [addUserToRole] = useMutation(CREATE_ROLE);
    const [getRestaurants] = useMutation(GET_RESTAURANTS);
    const [getMenucategories] = useMutation(GET_MENU_CATEGORIES);
    // eslint-disable-next-line
    const [getOrders] = useMutation(GET_ORDERS);
    const [getOrdersByUserId] = useMutation(GET_ORDERS_BY_USERID);
    const [createOrder] = useMutation(CREATE_ORDER);

    var currentUser = undefined;
    var selectedRestaurant = undefined;
    var selectedMenuCategory = undefined;
    var filteredMenuItems = [];
    var filterCategory = undefined;
    var generalLocation = undefined;
    var prevSelectedrestaurant = undefined; 
    var loading = true;
    var loggedIn = false;
    var cartItems = [];
    var noties = [];
    var orders = [];
    var restaurants = [];
    var menuCategories = [];

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
          ////console.log(error.code);
          //var errorMessage = error.message;
          ////console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          ////console.log(error.email);
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          ////console.log(error.credential);
          // ...
          return error.message;
        });
        return result;
    };

    var login = function login(email, password, payload) {
        //retuns a promise
        ////console.log("about to log the user in.")
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
          //console.log(error.code);
          //var errorMessage = error.message;
          //console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          //console.log(error.email);
          //The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          //console.log(error.credential);
          // ...
          return null;
        });
        return result;
    };

    var gLogin = async function gLogin(payload) {
        //retuns a promise
        ////console.log("about to log the user in using google.")
        var result = socialAuth.signInWithPopup(googleAuthProvider).then(async function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //var token = result.credential.accessToken;
          // The signed-in user info.
          //console.log(result.user);
          var user = result.user;
          var payloadf = { ...payload,
            currentUser: user,
            loading: false,
            userInfo: {
              ...userInfo, fullName: user!.displayName !== null && user!.displayName !== undefined ? user!.displayName: "" ,
             email: user!.email !== null && user!.email !== undefined ? user!.email : ""
            }
          };
          return payloadf;
        }).catch(function (error) {
          // Handle Errors here.
          //var errorCode = error.code;
          ////console.log(error.code);
          //var errorMessage = error.message;
          ////console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          ////console.log(error.email);
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          ////console.log(error.credential);
          // ...
          return null;
        });
        return result;
    };

    var logout = function logout(payload) {
      //retuns a promise
      payload.loggedIn = false;
      auth.signOut().then(function () {
        payload.currentUser = null;
        payload.userInfo = {
          contactNumber: "",
          email: "",
          fullName: "",
          addressLine1: "",
          addressLine2: "",
          city: ""
        };
        dispatch({
          type: "logout_user",
          payload: payload
        });
      }); //return res;
    };
    
    var userHasRole = async function userHasRole(uid, payload) {
      //console.log("User id is: ");
      //console.log(uid);
      //console.log("fetching user role");
      var userRef = await getUserInRole({variables: {UserID: uid}}).then(async function(response) {
        //console.log("Checking user result");
        if (response.data.getUserInRole.RoleID !== null) {
          //console.log("user role exist");
          //console.log(response);
          //console.log("what is inside payload");
          //console.log(payload);
          // Convert to City object
           var userRoleID = response.data.getUserInRole.RoleID;
          //console.log("user in role res:");
          //console.log(userRoleID);
          if (userRoleID !== null) {
            payload.userRolef = await getRole({variables: {id:userRoleID}}).then(async function (response2) {
              if (response2.data.getRole !== null) {
                var res = response2.data.getRole;
                //console.log("Role Exists is?");
                //console.log(res);
                return res.description;
              }
            });
          }
    
          return payload;
        } else {
          //console.log("No such user role!")
          //console.log("creating new userinrole");
          var userInRole = {
            UserID: uid,
            RoleID: process.env.REACT_APP_CUSTOMER_ROLE_ID
          };
          var storeRes = addUserToRole({variables: {UserID: userInRole.UserID, RoleID: userInRole.RoleID}}).then(function (response3) {
            //console.log("User successfully added to role!");  
            return true;
          }).catch(function (error) {
            //console.error("Error adding user to role: ", error);
            return false;
          });
    
          if (await storeRes) {
            payload.userRolef = "Customer";
          } 
          //console.log("What is in payload after creating role: ");
          //console.log(payload);
    
    
          return payload;
        }
      });
      return userRef; //dispatch({type: "fetch_userinfo", payload: userRef});
    };

    var fetchUserInfoForSignUp = async function fetchUserInfoForSignUp(uid, payload, currentState) {
      //console.log("User id is: ");
      //console.log(uid);
      //console.log("the currentState is: ");
      //console.log(currentState);
      //console.log("fetching user");
      

      
      var userRef = await getUser({variables: { Id: uid}}).then(async function(response) {
        //console.log("Checking user result");
        if (response.data.getUser !== null) {
          //console.log("user exist");
          //console.log(response);
          //console.log("what is inside payload");
          //console.log(payload);
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
          //console.log("No such user!")
          //console.log("creating new user");
          ////console.log("contact number is: " + currentState.contact);
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
            //console.log("User info  successfully written!");
            //console.log(response2.data);  
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
        //console.log(err);
      }); 
      //console.log("user ref b4 fetch role is: ");
      //console.log(userRef);
      var userRoleResf = undefined;
      await userHasRole(uid, userRef).then(function (userRoleRes) {
        //console.log("Final user ref after fetch role is: ");
        //console.log(userRoleRes);
        userRoleResf = userRoleRes;
        return userRoleRes;
      });
      
      //console.log("about to enter dispatch for fetch_userinfo");
      dispatch({
         type: "fetch_userinfo",
         payload: userRoleResf
       });
    };

    var fetchUserInfo = async function fetchUserInfo(uid, payloadf) {
      //console.log("User id is: ");
      //console.log(uid);
      //console.log("fetching user");

      var userRef = await getUser({variables: { Id: uid}}).then(async function(response) {
        //console.log("Checking user result for fetch user info");
        if (response.data.getUser !== null) {
           //console.log("user exist");
           //console.log(response);
          //console.log("what is inside payload for fetch user info");
          //console.log(payloadf);

        var user = response.data.getUser;
    
        if (user !== null) {
          payloadf.userInfo.contactNumber = user.ContactNumber !== null && user.ContactNumber !== undefined ? user.ContactNumber : "";
          payloadf.userInfo.email = user.Email !== null && user.Email !== undefined ? user.Email : "";
          payloadf.userInfo.fullName = user.FirstName !== null && user.FirstName !== undefined? user.FirstName + " " 
                                     + user.LastName !== null && user.LastName !== undefined? user.LastName : "" + user.LastName !== null && user.LastName !== undefined? user.LastName : "":"";
          payloadf.loggedIn = true;
          payloadf.userInfo.addressLine1 = user.AddressLine1 !== null && user.AddressLine1 !== undefined ? user.AddressLine1 : "";
          payloadf.userInfo.addressLine2 = user.AddressLine2 !== null && user.AddressLine2 !== undefined ? user.AddressLine2 : "";
          payloadf.userInfo.city = user.City !== null && user.City !== undefined ? user.City : "";
        }
    
          return payloadf;
        } else {
          //console.log("No such user!")
          //console.log(response);
          // //console.log("creating new user");
          var user2 = {
            Id: uid,
            FirstName: payloadf.userInfo.fullName !== null ? payloadf.userInfo.fullName.toLowerCase() : "",
            LastName: payloadf.userInfo.fullName !== null ? payloadf.userInfo.fullName.toLowerCase() : "",
            Email: payloadf.currentUser.email !== null ? payloadf.currentUser.email : "",
            AddressLine1: "",
            AddressLine2: "",
            City: "",
            ContactNumber: ""
          };
          var storeRes = await createUser({variables: {...user2}}).then(function (response2) {
            //console.log("User info  successfully written!");
            //console.log(response2.data);  
            return true;
          }).catch(function (error) {
            console.error("Error writing user info: ", error);
            return false;
          });
    
          if (storeRes) {
            payloadf.userInfo.contactNumber = user2.ContactNumber;
            payloadf.userInfo.email = user2.Email;
            payloadf.userInfo.fullName = user2.FirstName;
            payloadf.loggedIn = true;
            payloadf.userInfo.addressLine1 = user2.AddressLine1 !== null && user2.AddressLine1 !== undefined ? user2.AddressLine1 : "";
            payloadf.userInfo.addressLine2 = user2.AddressLine2 !== null && user2.AddressLine2 !== undefined ? user2.AddressLine2 : "";
            payloadf.userInfo.city = user2.City !== null && user2.City !== undefined ? user2.City : "";
          }
    
          return payloadf;
        }
      }).catch(function(err){
        //console.log(err);
      });
      //console.log("user ref b4 fetch role is: ");
      //console.log(userRef);
      var finaluserRef = await userHasRole(uid, userRef).then(function (userRoleRes) {
        //console.log("Final user ref is: ");
        //console.log(userRoleRes);
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

    var JoinUs = async function JoinUs(currentstate) {
      var formVals = {
        user_name: currentstate.firstname + " " + currentstate.lastname,
        user_email: currentstate.email,
        user_contact: currentstate.contact,
        own_TR: currentstate.ownTransportation ? "Yes" : "No",
        own_DL: currentstate.ownDLicence ? "Yes" : "No",
        own_LL: currentstate.ownLLicense ? "Yes" : "No",
        own_SM: currentstate.ownSmartPhone ? "Yes" : "No",
      };
      try{
        var result = await sendNewApplicationEmail(formVals);
        return result;
      }catch(error){
        console.error("Error sending job application email: ", error);
        return false;
      };
    };

    var fetchRestaurants = async function fetchRestaurants(payload){
      //console.log("about to fetch restaurants");
        await getRestaurants().then(async function(response) {
          if (response.data.getRestaurants !== null) {
            //console.log("got list of restaurants");
            //console.log(response);

            var restList = response.data.getRestaurants;

            if (restList !== null) {
              payload.restaurants = restList !== undefined && restList !== null? restList : [];
              return payload;
            }
          }
        }).catch(function(err){
          //console.log(err);
        });

        dispatch({
          type: "fetch_restaurants",
          payload: payload
        });
    }

    var viewMenuItems = async function viewMenuItems(payload){
      if(payload.selectedRestaurant !== undefined){
          dispatch({
            type: "view_menu_items",
            payload: payload
          });
      }
    }

    var getMenuCats = async function getMenuCats(payload, Id){
      if(Id !== null && Id !== undefined){
         await getMenucategories({variables: {Id: Id}}).then(async function(response) {
          ////console.log("menu categories result");
          if (response.data.getMenucategories.MenuItems !== null) {
            ////console.log("menu categories exist");
            ////console.log(response.data.getMenucategories.MenuItems);

            // eslint-disable-next-line
            var distinct = (value, index, self) => {
              return self.indexOf(value) === index;
            }
            
            var menuRes = response.data.getMenucategories.MenuItems;
            const menuResF = [] as any;
            menuRes.forEach(element => {
              ////console.log(element);
              if(menuResF.indexOf(element.MenuCategory) === -1){
                menuResF.push(element.MenuCategory)
              }
            });
            
            payload.menuCategories = menuResF
      
            dispatch({
              type: "menu_categories",
              payload: payload
            });
          }
        });
      }
    }

    var getMenuBycategory = async function getMenuBycategory(payload, restaurant, category){
      if(category !== "All"){
        var newMenuItems = [] as Object[];
        restaurant.MenuItems.map((item, index) => {
          if(item.MenuCategory === category){
            newMenuItems.push(item);
          }
        });
        //return newMenuItems;
        payload.filteredMenuItems = newMenuItems;
        payload.filterCategory = category;

        dispatch({
          type: "filter_menu_category",
          payload: payload
        });
      }else{
        payload.filteredMenuItems = [];
        payload.filterCategory = undefined;

        dispatch({
          type: "filter_menu_category",
          payload: payload
        });
      }
      
      
    }

    var addItemToCart = async function addItemToCart(payload, item){
      if(item.length !== 0){
          payload.cartItems.push(item);
          dispatch({
            type: "add_cart_item",
            payload: payload
          });
      }
    }

    var removeCartItem = async function removeCartItem(index, payload, cartItems){
      if(cartItems.length > 0){
        cartItems.splice(index, 1);
        payload.cartItems = cartItems;
        dispatch({
          type: "remove_cart_item",
          payload: payload
        });
      }
    }

    var checkoutOrder  = async function checkoutOrder(payload, cartItems, state, deliveryFee, GCT, serviceFee, cartItemsSum, Total){
      if(cartItems.length !== 0){
        var orderItems : object[] = [];
        const now = new Date();
        const estTime = moment.tz(now, "America/Jamaica").format();
        //console.log("Jamaican Time is:");
        //console.log(estTime);
        cartItems.map((item, index) => {
          var body = {
            itemName: item.itemName,
            chickenFlavour1: item.chickenFlavour1,
            chickenFlavour2: item.chickenFlavour2,
            drink: item.drink,
            otherIntructions: item.otherIntructions,
            itemCost: item.itemCost,
            imageName: value.imageName,
            ifnotAvailable: item.ifnotAvailable
          } as object;
          orderItems.push(body);
          return null;
        })
        var orderBody = {
          Id: payload.currentUser.uid,
          OrderItems: orderItems,
          OrderStatus: "Pending",
          OrderTotal: Number(Total.Cost),
          OrderDate: estTime,
          Rider: "Rider 1",
          DeliveryAddress: state.Street + "," + state.Town + ",Clarendon",
          PaymentMethod: state.PaymentMethod,
          AdditionalInfo: state.ContactNum,
          DeliveryFee: Number(deliveryFee.Cost),
          GCT: Number(GCT.Cost),
          ServiceCharge: Number(serviceFee.Cost),
          CartTotal: Number(cartItemsSum.Cost)
        }

        await createOrder({variables: orderBody}).then(async function(response) {
          //console.log("create orer result");
          if (response.data.createOrder !== null) {
            //console.log("Order Exist");
            //console.log(response.data.createOrder);
            payload.cartItems = [];
            payload.selectedRestaurant = undefined;
            await getOrdersByUserId({variables: {Id: payload.currentUser.uid}}).then(async function(response) {
              if (response.data.getOrdersByUserId !== null) {
                payload.orders = response.data.getOrdersByUserId;
                dispatch({
                  type: "checkout",
                  payload: payload
                })
              }
            });
            
           
      
            return payload;
          }
        });
        
      }
    }

    var fetchOrdersByUser  = async function fetchOrdersByUser(payload){
      if(payload.currentUser !== undefined){
        await getOrdersByUserId({variables: {Id: payload.currentUser.uid}}).then(async function(response) {
          if (response.data.getOrdersByUserId !== null) {
            payload.orders = response.data.getOrdersByUserId;
            dispatch({
              type: "checkout",
              payload: payload
            })
          }
        });
      }
    }

    var fetchOrders  = async function fetchOrders(payload){
      if(payload.currentUser !== undefined){
        await getOrders().then(async function(response) {
          if (response.data.getOrders !== null) {
            payload.orders = response.data.getOrders;
            dispatch({
              type: "checkout",
              payload: payload
            })
          }
        });
      }
    }

    var sendNewApplicationEmail = async function sendNewApplicationEmail(formVals) {
      // var data1 = {event: 'staff add package send new package email',
      //                 value:{"Wtf is in formVals: " : "Wtf is in formVals:", formVals: formVals}
      // };
      // var entry1 = log.entry(METADATA, data1);
      // log.write(entry1);
      // //console.log("Wtf is in formVals");
      // //console.log(formVals);
      var RequestParams = {
        from_name: formVals.user_name,
        user_email: formVals.user_email,
        reply_to: formVals.user_email,
        message: "Fullname: " + formVals.user_name + " Email: " + formVals.user_email + " Phone Number: " + formVals.user_contact 
        + " Own Transportation? " + formVals.own_TR + " Own Smartphone? " + formVals.own_SM  + " Own Drivers license? " + formVals.own_DL 
        + " Own Learners License " + formVals.own_LL + " ."
      }; // var data2 = {event: 'staff add package',
      //                       value:{"What is in this package b4 email sent for user: " : "What is in this package b4 email sent for user", RequestParams: RequestParams}
      // };
      // var entry2 = log.entry(METADATA, data2);
      // log.write(entry2);
      // //console.log("What is in this package b4 emails sent");
      // //console.log(RequestParams);
    
      var fianlRes = await sendEmail(emailServiceId, emailNewJobAppTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        // var data3 = {event: 'staff add package',
        //                     value:{"Send email error for user: " : formVals.user_email, error: err}
        // };
        // var entry3 = log.entry(METADATA, data3);
        // log.write(entry3);
        // //console.log("Send email error");
        // //console.log(err);
        return false;
      });
      return fianlRes;
    };

    var sendOrderCompletedEmail = async function sendOrderCompletedEmail(formVals) {
      // //console.log("Wtf is in formVals");
      // //console.log(formVals);
      var RequestParams = {
        from_name: formVals.user_name,
        user_email: formVals.user_email,
        order_id: formVals.order_id,
        message: "Fullname: " + formVals.user_name + " Email: " + formVals.user_email + " Phone Number: " + formVals.user_contact 
        + " Own Transportation? " + formVals.own_TR + " Own Smartphone? " + formVals.own_SM  + " Own Drivers license? " + formVals.own_DL 
        + " Own Learners License " + formVals.own_LL + " ."
      }; // var data2 = {event: 'staff add package',
      //                       value:{"What is in this package b4 email sent for user: " : "What is in this package b4 email sent for user", RequestParams: RequestParams}
      // };
      // var entry2 = log.entry(METADATA, data2);
      // log.write(entry2);
      // //console.log("What is in this package b4 emails sent");
      // //console.log(RequestParams);
    
      var fianlRes = await sendEmail(emailServiceId, emailNewJobAppTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        // var data3 = {event: 'staff add package',
        //                     value:{"Send email error for user: " : formVals.user_email, error: err}
        // };
        // var entry3 = log.entry(METADATA, data3);
        // log.write(entry3);
        // //console.log("Send email error");
        // //console.log(err);
        return false;
      });
      return fianlRes;
    };

    var AddGeneralLocation = async function AddGeneralLocation(payload, location) {
        payload.generalLocation = location;
        dispatch({
          type: "set_general_location",
          payload: payload
        })
    }

    const [value, dispatch] = useReducer(appDataReducer, {
        currentUser,
        loading,
        loggedIn,
        userInfo,
        userRolef,
        cartItems,
        noties,
        orders,
        restaurants,
        selectedRestaurant,
        selectedMenuCategory,
        prevSelectedrestaurant,
        menuCategories,
        filteredMenuItems,
        filterCategory,
        generalLocation,
        JoinUs,
        signup,
        login,
        gLogin,
        logout,
        getAddress,
        fetchUserInfoForSignUp,
        fetchUserInfo,
        fetchRestaurants,
        viewMenuItems,
        getMenuBycategory,
        addItemToCart,
        removeCartItem,
        getMenuCats,
        checkoutOrder,
        fetchOrdersByUser,
        fetchOrders,
        AddGeneralLocation
    });
    
     
    return (
        <AppDataContext.Provider value={{ value }}>
            {children}
        </AppDataContext.Provider>
    );
};


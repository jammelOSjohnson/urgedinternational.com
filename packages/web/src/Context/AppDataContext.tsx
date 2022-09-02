import type { ReactNode } from 'react'
import {useContext, useReducer, createContext} from 'react';
//import fetchAddressApi from '../Apis/fetchAddressApi';
import  { auth, socialAuth, googleAuthProvider, functions, ref } from '../firebase';
import { 
        GET_ORDERS_BY_RIDERID , 
        UPDATE_ORDER ,GET_RIDERS ,
        CREATE_ORDER, GET_ORDERS_BY_USERID, 
        GET_ORDERS, GET_RESTAURANTS, 
        CREATE_USER_MUTATION, 
        GET_USER_MUTATION, 
        GET_USER_IN_ROLE, 
        GET_ROLE, 
        CREATE_ROLE, 
        GET_MENU_CATEGORIES, 
        UPDATE_PAY_SETTING, 
        GET_ORDERS_BY_RIDERID_AND_DATE,
        GET_PACKAGE_BYID_MUTATION,
        ADD_PACKAGE_MUTATION,
        UPDATE_CONTACT_AND_ADDRESS_BYID_MUTATION,
        ADD_MAILBOXNUM_MUTATION,
        GET_MAILBOX_BYID_MUTATION,
        GET_MAILBOX_BYMBOX_MUTATION,
        UPDATE_RESTAURANT_BYID,
        GET_CATEGORIES,
        CREATE_RESTAURANT_MUTATION,
        FETCH_SHIPPING_ADDRESS,
        UPDATE_SHIPPING_ADDRESS,
        GET_RIDER,
        UPDATE_RIDER_STATUS,
        GET_RESTAURANT,
        GET_ORDER_REJECTLIST_BY_ORDERID,
        CREATE_ORDER_REJECTLIST,
        UPDATE_ORDER_REJECTLIST,
        UPDATE_USER_MUTATION
      } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';
import sendEmail from "../email.js";
import moment from 'moment-timezone';
import { GET_PAY_SETTINGS } from '../GraphQL/Mutations';

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
            ////console.log("dispatching address:");
            ////console.log(action.payload.Address);
            return{
                ...state,
                Address: action.payload.Address
            };
        case "auth_change":
            //////console.log("Auth listener dispatch results.");
            //////console.log(action.payload);
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
              userInfo: action.payload.userInfo,
              userRolef: action.payload.userRolef,
              restaurantInfo: action.payload.restaurantInfo = undefined,
              paySettings: action.payload.paySettings = undefined,
              shippingAddress: action.payload.shippingAddress = undefined,
              restaurantCategories: action.payload.restaurantCategories = undefined
            }
        case "fetch_restaurants": 
          return {
            ...state,
            restaurants: action.payload.restaurants
          };
        case "view_menu_items":
          // console.log("about to dispatch");
          // console.log(action.payload.selectedRestaurant);
          // console.log(action.payload.selectedRestaurantName);
          return {
            ...state,
            selectedRestaurant: action.payload.selectedRestaurant,
            selectedRestaurantName: action.payload.selectedRestaurantName,
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
        case "filter_rest_category":
          return {
            ...state,
            filteredRestItems: action.payload.filteredRestItems,
            filterRestCategory: action.payload.filterRestCategory
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
        case "clear_cart_item":
          return {
            ...state,
            cartItems: action.payload.cartItems
          }
        case "checkout": 
          return {
            ...state,
            cartItems: action.payload.cartItems,
            orders: action.payload.orders,
            selectedRestaurant: action.payload.selectedRestaurant,
            receiptDetails: action.payload.receiptDetails
          }
        case "fetch_rider_orders_for_date":
          return {
            ...state,
            rider_orders: action.payload.rider_orders
          }
        case "refreshOrderTable": 
          //console.log("dispatching orders");
          //console.log(action.payload.orders);
          return {
            ...state,
            orders: action.payload.orders
          }
        case "set_general_location":
          return {
            ...state,
            generalLocation: action.payload.generalLocation
          }
        case "status_change":
          return {
            ...state,
            orders: action.payload.orders
          }
        case "fetch_riders":
          return {
            ...state,
            riders: action.payload.riders
          }
        case "fetch_rider":
          return {
            ...state,
            rider: action.payload.rider
          }
        case "fetch_restaurant":
          return {
            ...state,
            restaurantInfo: action.payload.restaurantInfo
          }
        case "update_rider_status":
          return {
            ...state,
            rider: action.payload.rider
          }
        case "get_rider_id":
          return {
            ...state,
            rider: action.payload.riders
          }
        case "selected_rider": {
          return {
            ...state,
            selectedRider: action.payload.selectedRider
          }
        }
        case "fetch_pay_settings":
          return {
            ...state,
            paySettings: action.payload.paySettings
          }
        case "fetch_shipping_address":
          return {
            ...state,
            shippingAddress: action.payload.shippingAddress
          }
        case "fetch_rest_categories":
          return {
            ...state,
            restaurantCategories: action.payload.restaurantCategories
          }
        case "fetch_mailbox":
          return {
            ...state,
            mailbox_Num: action.payload.mailbox_Num
          }
        case "SW_INIT":
          return{
            ...state,
            serviceWorkerInitialized: true
          }
        case "SW_UPDATE":
          return{
            ...state,
            serviceWorkerRegistration: action.payload.serviceWorkerRegistration
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
    const emailNewPreAlertTemplate = "template_k8ycohd";
    const emailContactUsTemplate = "template_lwlimnm"
    const emailNewInvoiceUploadTemplate = "template_a7m014a";
    const emailNewOrderStatusTemplate = "template_chhqfeg";
    const emailNewCustomerTemplate = "template_jqixj7b";
    const emailNewMerchantAppTemplate = "template_lc6ix4j";
    const emailUserId = "user_bDLFbepm6Arcdgh7Akzo3";
    //Declare necessary variables
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    const [updateUser] = useMutation(UPDATE_USER_MUTATION);
    const [createRestaurant] = useMutation(CREATE_RESTAURANT_MUTATION);
    const [getUser] = useMutation(GET_USER_MUTATION);
    const [getUserInRole] = useMutation(GET_USER_IN_ROLE);
    const [getRole] = useMutation(GET_ROLE);
    const [addUserToRole] = useMutation(CREATE_ROLE);
    const [getRestaurants] = useMutation(GET_RESTAURANTS);
    const [getRiders] = useMutation(GET_RIDERS);
    const [getRider] = useMutation(GET_RIDER);
    //const {data} = useQuery(GET_PAY_SETTINGS);
    const [getPaySettings] = useMutation(GET_PAY_SETTINGS);
    const [getMenucategories] = useMutation(GET_MENU_CATEGORIES);
    const [updateRestaurantById] = useMutation(UPDATE_RESTAURANT_BYID);
    const [updateRiderStatus] = useMutation(UPDATE_RIDER_STATUS);
    const [getOrderRejection] = useMutation(GET_ORDER_REJECTLIST_BY_ORDERID);
    const [createOrderRejection] = useMutation(CREATE_ORDER_REJECTLIST);
    // eslint-disable-next-line
    // const {data} = useQuery(GET_ORDERS,{
    //   pollInterval: 500,
    // });

    const [getOrders] = useMutation(GET_ORDERS);
    const [getOrdersByUserId] = useMutation(GET_ORDERS_BY_USERID);
    const [createOrder] = useMutation(CREATE_ORDER);
    const [updateOrder] = useMutation(UPDATE_ORDER);
    const [updatePaySetting] = useMutation(UPDATE_PAY_SETTING);
    const [getOrdersByRiderId] = useMutation(GET_ORDERS_BY_RIDERID);
    const [getOrdersByRiderIdAnDate] = useMutation(GET_ORDERS_BY_RIDERID_AND_DATE);

    const [getPackageById] = useMutation(GET_PACKAGE_BYID_MUTATION);
    const [addPackage] = useMutation(ADD_PACKAGE_MUTATION);
    const [updateContactAndAddress] = useMutation(UPDATE_CONTACT_AND_ADDRESS_BYID_MUTATION);
    const [addMailbox] = useMutation(ADD_MAILBOXNUM_MUTATION);
    const [getMailboxById] = useMutation(GET_MAILBOX_BYID_MUTATION);
    const [getMailboxByMbox] = useMutation(GET_MAILBOX_BYMBOX_MUTATION);
    const [getCategories] = useMutation(GET_CATEGORIES);
    const [fetchShippingAddress] = useMutation(FETCH_SHIPPING_ADDRESS);
    const [updateShippingAddress] = useMutation(UPDATE_SHIPPING_ADDRESS);
    const [getRestaurant] = useMutation(GET_RESTAURANT);
    const [updateOrderRejection] = useMutation(UPDATE_ORDER_REJECTLIST);

    var currentUser = undefined;
    var selectedRestaurant = undefined;
    var selectedRestaurantName = undefined;
    var selectedMenuSearchItem = undefined;
    var selectedMenuCategory = undefined;
    var selectedRider = undefined;
    var filteredMenuItems = [];
    var filteredRestItems = [];
    var filterCategory = undefined;
    var filterRestCategory = undefined;
    var generalLocation = undefined;
    var prevSelectedrestaurant = undefined; 
    var loading = true;
    var loggedIn = false;
    var cartItems = [];
    var noties = [];
    var orders = [];
    var rider_orders = [];
    var restaurants = [];
    var restaurantInfo = undefined;
    var menuCategories = [];
    var riders = [];
    var rider = undefined;
    var receiptDetails = undefined;
    var longitude = undefined;
    var latitude = undefined;

    var userInfo = {
      _id: "",
      contactNumber: "",
      email: "",
      fullName: "",
      addressLine1: "",
      addressLine2: "",
      city: ""
    };

    let mailbox_Num = undefined;

    let paySettings = undefined;
    let restaurantCategories = [];

    let shippingAddress = undefined;

    var userRolef= "";

    //PWA STUFF
    const serviceWorkerInitialized= false;
    const serviceWorkerUpdated= false;
    const serviceWorkerRegistration= null;

    var serviceWorkerInit = function serviceWorkerInit() {
      dispatch({
        type: "SW_INIT"
      });
    }

    var serviceWorkerUpdate = function serviceWorkerUpdate(reg, payload) {
      payload.serviceWorkerRegistration = reg;
      dispatch({
        type: "SW_UPDATE",
        payload: payload
      });
    }

    //sign up user
    var signup = function signup(currentstate, payload) {
        //retuns a promise
        var result = auth.createUserWithEmailAndPassword(currentstate.email.trim(), currentstate.password.trim()).then(async function (result) {
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
          //////console.log(error.code);
          //var errorMessage = error.message;
          //////console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          //////console.log(error.email);
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          //////console.log(error.credential);
          // ...
          return error.message;
        });
        return result;
    };

    var signup2 = function signup2(currentstate, payload) {
      //retuns a promise
      const creatRestauranteUser = functions.httpsCallable('creatRestauranteUser');
      let email = currentstate.Email.trim();
      let password = currentstate.password.trim()
      var result = creatRestauranteUser({email, password}).then(async function ({ data: user}) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        var payloadf = { ...payload,
          currentUser: user,
          loading: false,
          userInfo: {...userInfo, fullName: currentstate.Name, email: currentstate.Email}
        };
        return payloadf;
      }).catch(function (error) {
        // Handle Errors here.
        //var errorCode = error.code;
        //////console.log(error.code);
        //var errorMessage = error.message;
        //////console.log(error.message);
        // The email of the user's account used.
        //var email = error.email;
        //////console.log(error.email);
        // The firebase.auth.AuthCredential type that was used.
        //var credential = error.credential;
        //////console.log(error.credential);
        // ...
        return error.message;
      });
      return result;
  };

    var login = function login(email, password, payload) {
        //retuns a promise
        //////console.log("about to log the user in.")
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
          ////console.log(error.code);
          //var errorMessage = error.message;
          ////console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          ////console.log(error.email);
          //The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          ////console.log(error.credential);
          // ...
          return null;
        });
        return result;
    };

    var gLogin = async function gLogin(payload) {
        //retuns a promise
        //////console.log("about to log the user in using google.")
        var result = await socialAuth.signInWithPopup(googleAuthProvider).then(function (result) {
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
          //////console.log(error.code);
          //var errorMessage = error.message;
          //////console.log(error.message);
          // The email of the user's account used.
          //var email = error.email;
          //////console.log(error.email);
          // The firebase.auth.AuthCredential type that was used.
          //var credential = error.credential;
          //////console.log(error.credential);
          // ...
          return null;
        });
        return result;
    };

    var logout = function logout(payload) {
      //retuns a promise
      payload.loggedIn = false;
      auth.signOut().then(function () {
        payload.currentUser = undefined;
        payload.userInfo = {
          contactNumber: "",
          email: "",
          fullName: "",
          addressLine1: "",
          addressLine2: "",
          city: ""
        };
        payload.orders = [];
        payload.restaurantInfo = undefined;
        payload.paySettings = undefined;
        payload.shippingAddress = undefined;
        payload.restaurantCategories = undefined;

        payload.userRolef = undefined;
        dispatch({
          type: "logout_user",
          payload: payload
        });
      }); //return res;
    };

    var resetPassword = function resetPassword(email) {
      //retuns a promise
      var resultf = auth.sendPasswordResetEmail(email); //console.log(resultf);
    
      return resultf;
    };
    
    var userHasRole = async function userHasRole(uid, payload, userType) {
      //console.log("User id is: ");
      //console.log(uid);
      //console.log("fetching user role");
      let result =  await getUserInRole({variables: {UserID: uid}}).then(async function(response) {
        //console.log("Checking userRole result");
        //console.log(response);
        return response.data.getUserInRole;
      });

      if (result !== null) {
        //console.log("user role exist");
        //console.log(response);
        //console.log("what is inside payload");
        //console.log(payload);
        // Convert to City object
         var userRoleID = result.RoleID;
        //console.log("user in role res:");
        //console.log(userRoleID);
        if (userRoleID !== null) {
          let afterGetRole = await getRole({variables: {_id:userRoleID}}).then(function (response2) {
              if (response2.data.getRole !== null) {
                var res = response2.data.getRole;
                //console.log("Role Exists is?");
                //console.log(res);
                payload.userRolef = res.description;
                return payload;
                //return res.description;
              }
          });
          //console.log("about to return role result");
          return afterGetRole;
        }else{
          //console.log("about to return role result");
          return payload;
        }
      } else {
        //console.log("No such user role!")
        //console.log("creating new userinrole");
        let rID = process.env.REACT_APP_CUSTOMER_ROLE_ID;
        if(userType !== undefined && userType !== null){
          rID = userType === 'restaurant' ? 
            process.env.REACT_APP_RESTAURANT_ROLE_ID
            : process.env.REACT_APP_CUSTOMER_ROLE_ID;
        }
        var userInRole = {
          UserID: uid,
          RoleID: rID
        };
        let afterAddUserToRole = await addUserToRole({variables: {UserID: userInRole.UserID, RoleID: userInRole.RoleID}}).then(function (response3) {
          if (response3.data.addUserToRole !== null) {
            //console.log("User successfully added to role!");  
            payload.userRolef = "Customer";
            //console.log("What is in payload after creating role: ");
            //console.log(payload);
            return payload;
            //return true;
          }else{
            return payload;
            //return false;
          }
        }).catch(function (error) {
          //console.error("Error adding user to role: ", error);
          return payload;
          //return false;
        });
        //console.log("about to return role result");
        return afterAddUserToRole;
      }
    };

    var fetchUserInfoForSignUp = async function fetchUserInfoForSignUp(uid, payload, currentState) {
      console.log("User id is: ");
      console.log(uid);
      ////console.log("the currentState is: ");
      ////console.log(currentState);
      console.log("fetching user");
      

      
       await getUser({variables: { Id: uid}}).then(async function(response) {
        console.log("Checking user result");
        console.log("user exist");
        console.log(response);
        //console.log("what is inside payload");
        //console.log(payload);
        // Convert to City object
        var user = response.data.getUser;
    
        if (user !== null) {
          payload.userInfo._id = user._id;
          payload.userInfo.contactNumber = user.ContactNumber;
          payload.userInfo.email = user.Email;
          payload.userInfo.fullName = user.FirstName;
          payload.loggedIn = true;
          payload.userInfo.addressLine1 = user.AddressLine1 !== null && user.AddressLine1 !== undefined ? user.AddressLine1 : "";
          payload.userInfo.addressLine2 = user.AddressLine2 !== null && user.AddressLine2 !== undefined ? user.AddressLine2 : "";
          payload.userInfo.city = user.City !== null && user.City !== undefined ? user.City : "";
          var userRoleResf = undefined;
          return await userHasRole(uid, payload, undefined).then(function (userRoleRes) {
            console.log("Final user ref after fetch role is: ");
            console.log(userRoleRes);
            userRoleResf = userRoleRes;
            //Send Welcome Email
            dispatch({
              type: "fetch_userinfo",
              payload: userRoleResf
            });
            return true;
          });
        
        } else {
          //console.log("No such user!")
          ////console.log("creating new user");
          //////console.log("contact number is: " + currentState.contact);
          var user2 = {
            _id: "",
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
          
          createUser({variables: {...user2}}).then(async function (response2) {
            if(response2.data.createUser !== null){
              console.log("User info  successfully written!");
              console.log(response2.data);
              user2._id = response2.data.createUser._id
              payload.userInfo._id = user2._id;  
              payload.userInfo.contactNumber = user2.ContactNumber;
              payload.userInfo.email = user2.Email;
              payload.userInfo.fullName = user2.FirstName;
              payload.loggedIn = true;
              payload.userInfo.addressLine1 = user2.AddressLine1 !== null && user2.AddressLine1 !== undefined ? user2.AddressLine1 : "";
              payload.userInfo.addressLine2 = user2.AddressLine2 !== null && user2.AddressLine2 !== undefined ? user2.AddressLine2 : "";
              payload.userInfo.city = user2.City !== null && user2.City !== undefined ? user2.City : "";
              
              var userRoleResf = undefined;
              return await userHasRole(uid, payload, undefined).then(function (userRoleRes) {
                console.log("Final user ref after fetch role is: ");
                console.log(userRoleRes);
                userRoleResf = userRoleRes;
                //Send Welcome Email
                var RequestParams = {
                  from_name: payload.userInfo.fullName,
                  user_email: payload.userInfo.email,
                }
                
                return sendEmail(emailServiceId, emailNewCustomerTemplate, RequestParams, emailUserId).then(function (res) {
                  dispatch({
                    type: "fetch_userinfo",
                    payload: userRoleResf
                  });
                  return true;
                })
                
              });
            }
          
          }).catch(function (error) {
            console.error("Error writing user info: ", error);
            return false;
          });
    
          return payload;
        }
      }).catch(function(err){
        ////console.log(err);
      }); 
      ////console.log("user ref b4 fetch role is: ");
      ////console.log(userRef);
      
    };

    var restaurantSignUp = async function restaurantSignUp(uid, payload, currentState, newRestaurant) {
      ////console.log("User id is: ");
      ////console.log(uid);
      ////console.log("the currentState is: ");
      ////console.log(currentState);
      ////console.log("fetching user");
      

      
       await getUser({variables: { Id: uid}}).then(function(response) {
        ////console.log("Checking user result");
        if (response.data.getUser !== null) {
          ////console.log("user exist");
          ////console.log(response);
          ////console.log("what is inside payload");
          ////console.log(payload);
          // Convert to City object
          var user = response.data.getUser;
    
          if (user !== null) {
            payload.userInfo._id = user._id;
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
          ////console.log("No such user!")
          ////console.log("creating new user");
          //////console.log("contact number is: " + currentState.contact);
          var user2 = {
            MenuItems: newRestaurant.Menu,
            Id: uid,
            FirstName: payload.userInfo.fullName !== null ? payload.userInfo.fullName : "",
            LastName: payload.userInfo.fullName !== null ? payload.userInfo.fullName : "",
            Email: payload.userInfo.email !== null ? payload.userInfo.email : "",
            AddressLine1: newRestaurant.StreetAddress,
            AddressLine2: newRestaurant.StreetAddress2,
            City: newRestaurant.City,
            ContactNumber: newRestaurant.Contact,
            OpeningHrs: newRestaurant.OpeningHrs,
            category: newRestaurant.Category,
            ImageName: newRestaurant.ImageName
          };
          //verified: false,
          //verifiedemailsent: false,
          //postalCode: "",
          //stateOrparish: ""
          
          createRestaurant({variables: {...user2}}).then(async function (response2) {
              if(response2.data.createUser !== null){
                ////console.log("User info  successfully written!");
                ////console.log(response2.data);
                // payload.userInfo._id = user._id;  
                // payload.userInfo.contactNumber = user2.ContactNumber;
                // payload.userInfo.email = user2.Email;
                // payload.userInfo.fullName = user2.FirstName;
                // payload.loggedIn = true;
                // payload.userInfo.addressLine1 = user2.AddressLine1 !== null && user2.AddressLine1 !== undefined ? user2.AddressLine1 : "";
                // payload.userInfo.addressLine2 = user2.AddressLine2 !== null && user2.AddressLine2 !== undefined ? user2.AddressLine2 : "";
                // payload.userInfo.city = user2.City !== null && user2.City !== undefined ? user2.City : "";
                
                //var userRoleResf = undefined;
                await userHasRole(uid, payload, 'restaurant').then(function (userRoleRes) {
                  ////console.log("Final user ref after fetch role is: ");
                  ////console.log(userRoleRes);
                  //userRoleResf = userRoleRes;
                  //Send Welcome Email
                  // var RequestParams = {
                  //   from_name: payload.userInfo.fullName,
                  //   user_email: payload.userInfo.email,
                  // }
                  
                  // sendEmail(emailServiceId, emailNewCustomerTemplate, RequestParams, emailUserId).then(function (res) {
                  //   dispatch({
                  //     type: "fetch_userinfo",
                  //     payload: userRoleResf
                  //   });
                  // })

                  //get updated restaurant list
                  console.log('get updated restaurant list');
                  fetchRestaurants(currentState);
                  return userRoleRes;
                });

                return true;
              }
            
          }).catch(function (error) {
            console.error("Error writing restaurant info: ", error);
            return false;
          });
    
          return payload;
        }
      }).catch(function(err){
        ////console.log(err);
      }); 
      ////console.log("user ref b4 fetch role is: ");
      ////console.log(userRef);
      
    };

    var fetchUserInfo = async function fetchUserInfo(uid, payloadf) {
      // console.log("User id is: ");
      // console.log(uid);
      // console.log("fetching user");

      let userFetch = await getUser({variables: { Id: uid}}).then(async function(response) {
          //console.log("Checking user result for fetch user info");
          
          
          //console.log("what is inside payload for fetch user info");
          //console.log(payloadf);

          var user = response.data.getUser;
          // console.log(user);
          // console.log("firstname is:");
          //console.log(user.FirstName);
          return user
          
      }).catch(function(err){
        //console.log(err);
        return null;
      });

      let afterUserHasRole = false;
      if (userFetch !== null) {
        // console.log("user exist");
        // console.log(userFetch);
        payloadf.userInfo._id = userFetch._id;
        payloadf.userInfo.contactNumber = userFetch.ContactNumber !== null && userFetch.ContactNumber !== undefined ? userFetch.ContactNumber : "";
        payloadf.userInfo.email = userFetch.Email !== null && userFetch.Email !== undefined ? userFetch.Email : "";
        payloadf.userInfo.fullName = userFetch.FirstName !== null && userFetch.FirstName !== undefined? userFetch.FirstName : "";
        payloadf.userInfo._id = userFetch._id !== null && userFetch._id !== undefined && userFetch._id !== ""? userFetch._id : "";
        payloadf.loggedIn = true;
        payloadf.userInfo.addressLine1 = userFetch.AddressLine1 !== null && userFetch.AddressLine1 !== undefined ? userFetch.AddressLine1 : "";
        payloadf.userInfo.addressLine2 = userFetch.AddressLine2 !== null && userFetch.AddressLine2 !== undefined ? userFetch.AddressLine2 : "";
        payloadf.userInfo.city = userFetch.City !== null && userFetch.City !== undefined ? userFetch.City : "";

        //var userRoleResf = undefined;
        afterUserHasRole = await userHasRole(uid, payloadf, undefined).then(function (userRoleRes) {
          // console.log("Final user ref is: ");
          // console.log(userRoleRes);
          dispatch({
              type: "fetch_userinfo",
              payload: userRoleRes
          });
          return true;
        });

        //console.log("after user has role")
        return afterUserHasRole;
      } else {
        // console.log("No such user!")
        // console.log(userFetch);
        // console.log("creating new user");
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
        let afterCreateUser = await createUser({variables: {...user2}}).then(async function (response2) {
          if(response2.data.createUser !== null){
            // console.log("User info  successfully written!");
            // console.log(response2.data);
            var getUserResult = response2.data.createUser;
            payloadf.userInfo.contactNumber = user2.ContactNumber;
            payloadf.userInfo.email = user2.Email;
            payloadf.userInfo.fullName = user2.FirstName;
            payloadf.loggedIn = true;
            payloadf.userInfo.addressLine1 = user2.AddressLine1 !== null && user2.AddressLine1 !== undefined ? user2.AddressLine1 : "";
            payloadf.userInfo.addressLine2 = user2.AddressLine2 !== null && user2.AddressLine2 !== undefined ? user2.AddressLine2 : "";
            payloadf.userInfo.city = user2.City !== null && user2.City !== undefined ? user2.City : "";  
            payloadf.userInfo._id = getUserResult._id !== null && getUserResult._id !== undefined && getUserResult._id !== ""? getUserResult._id : "";
            
          }

          return payloadf;
        }).catch(function (error) {
          //console.error("Error writing user info: ", error);
          return false;
        });

        //console.log("afterCreateUser:", afterCreateUser);
        let afterUserHasRole = await userHasRole(uid, payloadf, undefined).then(async function (userRoleRes) {
          // console.log("Final user ref is: ");
          // console.log(userRoleRes);
          return userRoleRes;
        }).catch(function (err) {
          //console.error("Error with user Role: ", err);
          return false;
        });
        //console.log("after user has role", afterUserHasRole);

        var RequestParams = {
          from_name: payloadf.userInfo.fullName,
          user_email: payloadf.userInfo.email,
        }

        let afterSendMail = await sendEmail(emailServiceId, emailNewCustomerTemplate, RequestParams, emailUserId).then(function (res) {
          dispatch({
            type: "fetch_userinfo",
            payload: afterUserHasRole
          });
          return true;
        })

        //console.log("afterSendMail:", afterSendMail)
        return afterSendMail;
      }
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
          console.log(err);
        });

        dispatch({
          type: "fetch_restaurants",
          payload: payload
        });
    }

    var viewMenuItems = async function viewMenuItems(payload){
      // //console.log("about to dispatch");
      // //console.log(payload.selectedRestaurant);
      if(payload.selectedRestaurant !== undefined && payload.selectedRestaurantName !== undefined){
          dispatch({
            type: "view_menu_items",
            payload: payload
          });
      }
    }

    var viewRiderDetails = async function viewRiderDetails(payload){
      // //console.log("about to dispatch");
      // //console.log(payload.selectedRestaurant);
      if(payload.selectedRider !== undefined){
          dispatch({
            type: "selected_rider",
            payload: payload
          });
      }
    }

    var getMenuCats = async function getMenuCats(payload, Id){
      if(Id !== null && Id !== undefined){
         await getMenucategories({variables: {Id: Id}}).then(async function(response) {
          //////console.log("menu categories result");
          if (response.data.getMenucategories.MenuItems !== null) {
            //////console.log("menu categories exist");
            //////console.log(response.data.getMenucategories.MenuItems);

            // eslint-disable-next-line
            var distinct = (value, index, self) => {
              return self.indexOf(value) === index;
            }
            
            var menuRes = response.data.getMenucategories.MenuItems;
            const menuResF = [] as any;
            menuRes.forEach(element => {
              //////console.log(element);
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
          return '';
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

    var getRestBycategory = async function getRestBycategory(payload, category){
      //console.log(category)
      if(category !== "All"){
        var newRestItems = [] as Object[];
        value.restaurants.map((item, index) => {
          if(item.category.Name === category){
            newRestItems.push(item);
          }
          return '';
        });
        //return newMenuItems;
        payload.filteredRestItems = newRestItems;
        payload.filterRestCategory = category;

        dispatch({
          type: "filter_menu_category",
          payload: payload
        });
      }else{
        payload.filteredRestItems = [];
        payload.filterRestCategory = undefined;

        dispatch({
          type: "filter_rest_category",
          payload: payload
        });
      }
    }

    var addItemToCart = async function addItemToCart(payload, item, index){
      if(index !== null && index !== undefined){
        payload.cartItems[index].quantity = item.quantity;
        dispatch({
          type: "add_cart_item",
          payload: payload
        });
      }else if(item.length !== 0){
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

    var clearCartItems = async function clearCartItems(payload){
      if(cartItems.length > 0){
        payload.cartItems = [];
        dispatch({
          type: "clear_cart_item",
          payload: payload
        });
      }
    }

    var checkoutOrder  = async function checkoutOrder(payload, cartItems, state, deliveryFee, GCT, serviceFee, cartItemsSum, Total, restaurantID){
      if(cartItems.length !== 0){
        var orderItems : object[] = [];
        const now = new Date();
        const estTime = moment.tz(now, "America/Jamaica").format();
        ////console.log("Jamaican Time is:");
        ////console.log(estTime);
        cartItems.map((item, index) => {
          var body = {
            itemName: item.itemName,
            chickenFlavour1: item.chickenFlavour1,
            chickenFlavour2: item.chickenFlavour2,
            drink: item.drink,
            otherIntructions: item.otherIntructions,
            itemCost: item.itemCost,
            imageName: item.imageName,
            ifnotAvailable: item.ifnotAvailable,
            quantity: item.quantity,
            side: item.side,
            restaurantName: item.restaurantName
          } as object;
          orderItems.push(body);
          return null;
        })
        await fetchRidersForOrder().then(async (res) => {
          //Generate rand number
          //console.log("res is: ", res);
          type riderObj = {
            _id: string,
            Id: string,
            FirstName: string,
            LastName: string,
            Email: string,
            AddressLine1: string,
            AddressLine2: string,
            City: string,
            ContactNumber: string,
            isAvailable: boolean,
            disabled: boolean,
            ImageName: string
          }

          let RiderRes = [] as riderObj[];
          try{
            RiderRes = res.filter((item) => item.isAvailable === true && item.disabled === false)
          }catch(e){
            //console.log(e);
          }
          
          //console.log("sorted rider res is: ", RiderRes);
          const min = 0;
          const max = RiderRes.length;
          //console.log(max);
          const randRider = Math.floor((Math.random() * max) + min);
          //const randRider = parseInt(rand.toString());
          //console.log(randRider);
          var orderBody = {
            Id: payload.currentUser.uid,
            OrderItems: orderItems,
            OrderStatus: "Pending",
            OrderTotal: Number(Total.Cost),
            OrderDate: estTime,
            Rider: RiderRes[randRider]._id !== undefined? RiderRes[randRider]._id: '',
            DeliveryAddress: state.Street + "," + state.Town + ",Clarendon",
            PaymentMethod: state.PaymentMethod,
            AdditionalInfo: state.ContactNum + " " + payload.userInfo.email + " " + payload.userInfo.fullName,
            DeliveryFee: Number(deliveryFee.Cost),
            GCT: Number(GCT.Cost),
            ServiceCharge: Number(serviceFee.Cost),
            CartTotal: Number(cartItemsSum.Cost),
            OrderType: "Food",
            Restaurant: restaurantID
          }
  
          await createOrder({variables: orderBody}).then(async function(response) {
            //console.log("create orer result");
            if (response.data.createOrder !== null) {
              //console.log("Order Exist");
              ////console.log(response.data.createOrder);
              payload.cartItems = [];
              payload.selectedRestaurant = undefined;
              payload.receiptDetails = response.data.createOrder;
  
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
        })
        
        
      }
    }

    var UpdateOrder  = async function UpdateOrder(payload, order){
      if(order !== null && order !== undefined){
          let newOrder = order;
          if(newOrder.Rider.AddressLine1 !== undefined){
            newOrder.Rider = newOrder.Rider._id;
          }
          //console.log(newOrder);
          var updateRes = await updateOrder({variables: newOrder}).then(async function(response) {
            ////console.log("create orer result");
            if (response.data.updateOrder !== null) {
              console.log(response.data.updateOrder);
              let formVals = {
                user_name: response.data.updateOrder.userName,
                user_email: response.data.updateOrder.userEmail,
                status: response.data.updateOrder.OrderStatus,
                order_id: order._id
              }; 
              if(newOrder.OrderStatus === response.data.updateOrder.OrderStatus){
                //console.log("same")
                if(newOrder.OrderStatus !== "Not Assigned" && newOrder.OrderStatus !== "Pending"){
                  return await sendNewOrderStatusEmail(formVals).then(async(res) => {
                    await fetchOrders(payload);
                    return true;
                  })
                }else{
                  return await fetchOrders(payload).then((res) => {
                    return true;
                  })
                }
                
              }else{
                //console.log("not same")
                return await fetchOrders(payload).then((res) => {
                  return "Already Accepted";
                })
              }
              
            }
          });

          if(updateRes !== undefined){
            return updateRes;
          }
      }else{
        return false
      }
      return false
    }

    var UpdateOrderRider  = async function UpdateOrderRider(payload, order){
      if(order !== null && order !== undefined){
          let newOrder = order;
          if(newOrder.Rider.AddressLine1 !== undefined){
            newOrder.Rider = newOrder.Rider._id;
          }
          //console.log(newOrder);
          var updateRes = await updateOrder({variables: newOrder}).then(async function(response) {
            console.log("update order result");
            if (response.data.updateOrder !== null) {
              console.log(response.data.updateOrder);
              let formVals = {
                user_name: response.data.updateOrder.userName,
                user_email: response.data.updateOrder.userEmail,
                status: order.OrderStatus,
                order_id: order._id
              }; 

              return await sendNewOrderStatusEmail(formVals).then(async(res) => {
                await fetchOrdersForRider(payload);
                return true;
              })
            }
          });

          if(updateRes !== undefined){
            return updateRes;
          }
      }else{
        return false
      }
      return false
    }

    var OrderRejectionList  = async function OrderRejectionList(order){
      if(order._id !== undefined){
        let OrderId = order._id;
        return await getOrderRejection({variables:{OrderId}}).then(async function(response) {
          return response.data.getOrderRejection;
        });
      }
    }

    var CreateOrderRejectionList  = async function CreateOrderRejectionList(order){
      if(order._id !== undefined){
        let OrderId = order._id;
        let RejectionList = [] as String[];
        RejectionList.push(order.Rider);
        //console.log('rejection list', RejectionList);
        return await createOrderRejection({variables:{OrderId, RejectionList}}).then(async function(response) {
          return response.data.createOrderRejection;
        });
      }
    }

    var UpdateOrderRejectionList  = async function UpdateOrderRejectionList(order, _id){
      if(order._id !== undefined){
        let OrderId = order._id;
        let RejectionList = [] as String[];
        RejectionList.push(order.Rider);
        console.log('rejection list', _id);
        return await updateOrderRejection({variables:{_id: _id, OrderId, RejectionList}}).then(async function(response) {
          return response.data.updateOrderRejection;
        });
      }
    }

    var fetchOrdersByUser  = async function fetchOrdersByUser(payload){
      if(payload.currentUser !== undefined && payload.currentUser !== null){
        if(payload.currentUser.uid !== undefined){
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
    }

    var fetchOrders  = async function fetchOrders(payload){
      if(payload.currentUser !== undefined){
        await getOrders().then(async function(response) {
          console.log(response.data.getOrders)
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

    var refreshingOrderTables  = async function refreshingOrderTables(payload, Orders){
      if(payload.currentUser !== undefined){
        if(payload.orders !== undefined && Orders !== undefined){
          payload.orders = Orders;
          await dispatch({
            type: "refreshOrderTable",
            payload: payload
          })
        }
      }
    }
    

    var fetchOrdersForRider  = async function fetchOrdersForRider(payload){
      if(payload.currentUser !== undefined){
        //console.log("Rider Id is:");
        //console.log(payload.userInfo._id);
        if(payload.userInfo._id !== undefined){
          await getOrdersByRiderId({variables: {Rider: payload.userInfo._id}}).then(async function(response) {
            if (response.data.getOrdersByRiderId !== null) {
              payload.orders = response.data.getOrdersByRiderId;
              dispatch({
                type: "checkout",
                payload: payload
              })
            }
          });
        }
      }
    }

    var fetchOrdersForRider2  = async function fetchOrdersForRider2(payload, RiderId, StartDate, EndDate){
      if(payload.currentUser !== undefined){
        //console.log("Rider Id is:");
        //console.log(payload.userInfo._id);
        if(RiderId !== undefined){
          await getOrdersByRiderIdAnDate({variables: {Rider: RiderId, StartDate, EndDate}}).then(async function(response) {
            if (response.data.getOrdersByRiderIdAnDate !== null) {
              payload.rider_orders = response.data.getOrdersByRiderIdAnDate;
              dispatch({
                type: "fetch_rider_orders_for_date",
                payload: payload
              })
            }
          });
        }
      }
    }

    var sendNewApplicationEmail = async function sendNewApplicationEmail(formVals) {
      // var data1 = {event: 'staff add package send new package email',
      //                 value:{"Wtf is in formVals: " : "Wtf is in formVals:", formVals: formVals}
      // };
      // var entry1 = log.entry(METADATA, data1);
      // log.write(entry1);
      // ////console.log("Wtf is in formVals");
      // ////console.log(formVals);
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
      // ////console.log("What is in this package b4 emails sent");
      // ////console.log(RequestParams);
    
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
        // ////console.log("Send email error");
        // ////console.log(err);
        return false;
      });
      return fianlRes;
    };

    var buildTableItem = function buildTableItem(length : number,  cartItems){
      if(length <= cartItems.length){
        let result = cartItems[length - 1].chickenFlavour1 !== "" && cartItems[length - 1].chickenFlavour1 !== "Select Flavour" && cartItems[length - 1].chickenFlavour1 !== null && cartItems[length - 1].chickenFlavour1 !== undefined?
        `${cartItems[length - 1].itemName + ": "}\n${cartItems[length - 1].chickenFlavour1 + " | "}\n${cartItems[length - 1].chickenFlavour2 + " | "}
        \n${cartItems[length - 1].drink !== "Select Drink"? cartItems[length - 1].drink + " | ": "" + " | "}\n${cartItems[length - 1].otherIntructions + " | "}\n${'Not Available? ' + cartItems[length - 1].ifnotAvailable}` :
        `${cartItems[length - 1].itemName + ": "}\n${cartItems[length - 1].drink !== "Select Drink"? cartItems[length - 1].drink + " | ": "" + " | "}\n${cartItems[length - 1].otherIntructions + " | "}\n${'Side:' + cartItems[length - 1].side + " | "}\n${'Not Available? ' + cartItems[length - 1].ifnotAvailable}`;
        
        return result;
      }else{
        return "";
      }
    }

    var buildTableItemCost = function buildTableItemCost(length : number,  cartItems){
      if(length <= cartItems.length){
        let result = "$" + cartItems[length - 1].itemCost;
        return result;
      }else{
        return "";
      }
    }

    var sendOrderCompletedEmail = async function sendOrderCompletedEmail(fileType,file, UserInfo, orderNum, receiptInfo) {
      //var fileType = fileType;
      let cartItems = receiptInfo.OrderItems;
      var RequestParams = {
        user_email: "",
        user_name: "",
        content: file,
        order_number: orderNum,
        delivery_add: receiptInfo.DeliveryAddress,
        order_date: receiptInfo.OrderDate,
        payment_type: receiptInfo.PaymentMethod,
        order_total: receiptInfo.OrderTotal,
        item1: buildTableItem(1, cartItems),
        item2: buildTableItem(2, cartItems),
        item3: buildTableItem(3, cartItems),
        item4: buildTableItem(4, cartItems),
        item5: buildTableItem(5, cartItems),
        item6: buildTableItem(6, cartItems),
        item7: buildTableItem(7, cartItems),
        itemcost1: buildTableItemCost(1, cartItems),
        itemcost2: buildTableItemCost(2, cartItems),
        itemcost3: buildTableItemCost(3, cartItems),
        itemcost4: buildTableItemCost(4, cartItems),
        itemcost5: buildTableItemCost(5, cartItems),
        itemcost6: buildTableItemCost(6, cartItems),
        itemcost7: buildTableItemCost(7, cartItems)
      };

      if (UserInfo !== null && UserInfo !== undefined && UserInfo.email !== "") {
        RequestParams.user_email = UserInfo.email;
        RequestParams.user_name = UserInfo.fullName; ////console.log("Params going to sendNewPackageMethod");
        ////console.log(RequestParams)
        var emailRes = await uploadInvoiceEmail(RequestParams, fileType).then(function (emailSentRes) {
          if (emailSentRes) {
            return true;
          } else {
            ////console.log("Unable to send add package email at this time.")
            return true;
          }
        }).catch(function (err) {
          ////console.log("Unable to send add package email at this time.")
          ////console.log(err);
          return true;
        });
        return emailRes;
      } else {
        return false;
      }
    };

    var uploadInvoiceEmail = async function uploadInvoiceEmail(formVals, filetype) {
      ////console.log("Wtf is in formVals");
      ////console.log(formVals);
      const now = new Date(parseInt(formVals.order_date, 10));
      var RequestParams = {
        to_name: formVals.user_name,
        user_email: formVals.user_email,
        message: `Thank you for choosing Urged Internationals food delivery service.\n Please see receipt attatched.`,
        content_pdf: undefined,
        content_svg: undefined,
        content_jpeg: undefined,
        content_png: undefined,
        order_id: formVals.order_number,
        delivery_add: formVals.delivery_add,
        order_date: moment.tz(now, "America/Jamaica").format("YYYY-MM-DD h:mm a"),
        payment_type: formVals.payment_type,
        order_total: formVals.order_total,
        item1: formVals.item1,
        item2: formVals.item2,
        item3: formVals.item3,
        item4: formVals.item4,
        item5: formVals.item5,
        item6: formVals.item6,
        item7: formVals.item7,
        itemcost1: formVals.itemcost1,
        itemcost2: formVals.itemcost2,
        itemcost3: formVals.itemcost3,
        itemcost4: formVals.itemcost4,
        itemcost5: formVals.itemcost5,
        itemcost6: formVals.itemcost6,
        itemcost7: formVals.itemcost7
      };
    
      if (filetype.toLowerCase() === "application/pdf") {
        RequestParams.content_pdf = formVals.content;
      } else if (filetype.toLowerCase() === "image/png") {
        RequestParams.content_png = formVals.content;
      } else if (filetype.toLowerCase() === "image/svg+xml") {
        RequestParams.content_svg = formVals.content;
      } else if (filetype.toLowerCase() === "image/jpeg") {
        RequestParams.content_jpeg = formVals.content;
      } ////console.log("What is in this package b4 emails sent");
      ////console.log(RequestParams);
    
    
      var fianlRes = await sendEmail(emailServiceId, emailNewInvoiceUploadTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        ////console.log("Send email error");
        ////console.log(err);
        return false;
      });
      return fianlRes;
    };

    var sendContactUsEmail = async function sendContactUsEmail(user_name, user_email, subject, message) {
      // var data1 = {event: 'staff add package send new package email',
      //                 value:{"Wtf is in formVals: " : "Wtf is in formVals:", formVals: formVals}
      // };
      // var entry1 = log.entry(METADATA, data1);
      // log.write(entry1);
      // ////console.log("Wtf is in formVals");
      // ////console.log(formVals);
      var RequestParams = {
        from_name: user_name,
        user_email: user_email,
        subject: subject,
        reply_to: user_email,
        message: message
      }; // var data2 = {event: 'staff add package',
      //                       value:{"What is in this package b4 email sent for user: " : "What is in this package b4 email sent for user", RequestParams: RequestParams}
      // };
      // var entry2 = log.entry(METADATA, data2);
      // log.write(entry2);
      // ////console.log("What is in this package b4 emails sent");
      // ////console.log(RequestParams);
    
      var fianlRes = await sendEmail(emailServiceId, emailContactUsTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        // var data3 = {event: 'staff add package',
        //                     value:{"Send email error for user: " : formVals.user_email, error: err}
        // };
        // var entry3 = log.entry(METADATA, data3);
        // log.write(entry3);
        // ////console.log("Send email error");
        // ////console.log(err);
        return false;
      });
      return fianlRes;
    };

    var sendMerchantFormEmail = async function sendMerchantFormEmail(fullname, businessemail, businessname, contact, role) {
      // var data1 = {event: 'staff add package send new package email',
      //                 value:{"Wtf is in formVals: " : "Wtf is in formVals:", formVals: formVals}
      // };
      // var entry1 = log.entry(METADATA, data1);
      // log.write(entry1);
      // ////console.log("Wtf is in formVals");
      // ////console.log(formVals);
      var RequestParams = {
        from_name: fullname,
        user_email: businessemail,
        business: businessname,
        reply_to: businessemail,
        contact: contact,
        role: role
      }; // var data2 = {event: 'staff add package',
      //                       value:{"What is in this package b4 email sent for user: " : "What is in this package b4 email sent for user", RequestParams: RequestParams}
      // };
      // var entry2 = log.entry(METADATA, data2);
      // log.write(entry2);
      // ////console.log("What is in this package b4 emails sent");
      // ////console.log(RequestParams);
    
      var fianlRes = await sendEmail(emailServiceId, emailNewMerchantAppTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        // var data3 = {event: 'staff add package',
        //                     value:{"Send email error for user: " : formVals.user_email, error: err}
        // };
        // var entry3 = log.entry(METADATA, data3);
        // log.write(entry3);
        // ////console.log("Send email error");
        // ////console.log(err);
        return false;
      });
      return fianlRes;
    };

    var sendNewOrderStatusEmail = async function sendNewOrderStatusEmail(formVals) {
      // var data1 = {event: 'staff add package send new package email',
      //                 value:{"Wtf is in formVals: " : "Wtf is in formVals:", formVals: formVals}
      // };
      // var entry1 = log.entry(METADATA, data1);
      // log.write(entry1);
      // ////console.log("Wtf is in formVals");
      console.log(formVals);
      let msgString = "";
      let statString = "";
      
      switch(formVals.status){
        case "Cancelled":
          statString = "Order Cancelled";
          msgString = "Your order has been cancelled.";
          break;
        case "Ordered":
          statString = "Order Processed";
          msgString = "Your order has been accepted.";
          break;
        case "Picked Up":
          statString = "Order Collected";
          msgString = "Your order has been received at restaurant.";
          break;
        case "In Transit":
          statString = "Order Enroute";
          msgString = "The delivery personel is on the way to your address.";
          break;
        case "Delivered": 
          statString = "Order Delivered";
          msgString = "Your order has been delivered.";
          break;
        default:
          break;
      }
      var RequestParams = {
        to_name: formVals.user_name,
        user_email: formVals.user_email,
        reply_to: formVals.user_email,
        message: msgString,
        status_phrase: statString,
        order_id: formVals.order_id
      };
      //console.log(RequestParams);
      // var data2 = {event: 'staff add package',
      //                       value:{"What is in this package b4 email sent for user: " : "What is in this package b4 email sent for user", RequestParams: RequestParams}
      // };
      // var entry2 = log.entry(METADATA, data2);
      // log.write(entry2);
      // ////console.log("What is in this package b4 emails sent");
      // ////console.log(RequestParams);
    
      var fianlRes = await sendEmail(emailServiceId, emailNewOrderStatusTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        // var data3 = {event: 'staff add package',
        //                     value:{"Send email error for user: " : formVals.user_email, error: err}
        // };
        // var entry3 = log.entry(METADATA, data3);
        // log.write(entry3);
        // ////console.log("Send email error");
        // ////console.log(err);
        return false;
      });
      return fianlRes;
    };

    var changeOrderStatus = async function changeOrderStatus(payload){
      console.log("changing order status")
      dispatch({
        type: "status_change",
        payload: payload
      })
    }

    var fetchRiders = async function fetchRiders(payload){
      ////console.log("about to fetch restaurants");
        await getRiders().then(async function(response) {
          if (response.data.getRiders !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var restList = response.data.getRiders;

            if (restList !== null) {
              payload.riders = restList !== undefined && restList !== null? restList : [];
              return payload;
            }
          }
        }).catch(function(err){
          ////console.log(err);
        });

        dispatch({
          type: "fetch_riders",
          payload: payload
        });
    }

    var fetchRestaurantInfo = async function fetchRestaurantInfo(payload, id){
      ////console.log("about to fetch restaurants");
        await getRestaurant({variables: {_id: id}}).then(async function(response) {
          if (response.data.getRestaurant !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var result = response.data.getRestaurant;

            if (result !== null) {
              payload.restaurantInfo = result !== undefined && result !== null? result : undefined;
              dispatch({
                type: "fetch_restaurant",
                payload: payload
              });
              return payload;
            }
          }
        }).catch(function(err){
          ////console.log(err);
        });
    }

    var fetchRiderInfo = async function fetchRiderInfo(payload, id){
      ////console.log("about to fetch restaurants");
        await getRider({variables: {_id: id}}).then(async function(response) {
          if (response.data.getRider !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var result = response.data.getRider;

            if (result !== null) {
              payload.rider = result !== undefined && result !== null? result : undefined;
              dispatch({
                type: "fetch_rider",
                payload: payload
              });
              return payload;
            }
          }
        }).catch(function(err){
          ////console.log(err);
        });
    }

    var udateRiderStatusInfo = async function udateRiderStatusInfo(payload, id: string, isAvailable: boolean, disabled: boolean){
      ////console.log("about to fetch restaurants");
        await updateRiderStatus({variables: {_id: id, isAvailable: isAvailable, disabled: disabled}}).then(async function(response) {
          if (response.data.updateRiderStatus !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var result = response.data.updateRiderStatus;

            if (result !== null) {
              payload.rider = result !== undefined && result !== null? result : undefined;
              dispatch({
                type: "update_rider_status",
                payload: payload
              });
              return payload;
            }
          }
        }).catch(function(err){
          ////console.log(err);
        }); 
    }

    var fetchRidersForOrder = async function fetchRidersForOrder(){
      ////console.log("about to fetch restaurants");
        return await getRiders().then(async function(response) {
          if (response.data.getRiders !== null) {
            ////console.log("got list of restaurants");
            ////console.log(response);

            var restList = response.data.getRiders;

            if (restList !== null) {  
              return restList;
            }
          }
        }).catch(function(err){
          ////console.log(err);
        });
    }

    var AddGeneralLocation = async function AddGeneralLocation(payload, location) {
        payload.generalLocation = location;
        dispatch({
          type: "set_general_location",
          payload: payload
        })
    }

    var fetchPaySettings = async function fetchPaySettings(payload){
      //console.log("about to fetch pay settings");
        try{
          await getPaySettings().then((response) => {
            if (response.data.getPaySettings !== null) {
              //console.log("got list of restaurants");
              //console.log(response);
  
              var paySet = response.data.getPaySettings;
              //console.log(paySet);
  
              if (paySet !== null) {
                payload.paySettings = paySet !== undefined ? paySet[0] : undefined;
                return payload;
              }
            }
          }).catch((err) => {
            //console.log(err);
          })
          
        }catch(err){
          ////console.log(err);
        };

        dispatch({
          type: "fetch_pay_settings",
          payload: payload
        });
    }

    var UpdatePaySettings  = async function UpdatePaySettings(payload, paysetting){
      if(paysetting !== null && paysetting !== undefined){
          let newPaySetting = paysetting;
          console.log(newPaySetting);
          var updateRes = await updatePaySetting({variables: newPaySetting}).then(async function(response) {
            ////console.log("create orer result");
            if (response.data.updatePaySetting !== null) {
              await fetchPaySettings(payload);
              return true;
            }
          });

          if(updateRes !== undefined){
            return updateRes;
          }
      }else{
        return false
      }
      return false
    }

    var getShippingAddress = async function getShippingAddress(payload){
      //console.log("about to fetch pay settings");
        try{
          await fetchShippingAddress().then((response) => {
            if (response.data.fetchShippingAddress !== null) {
              //console.log("got shipping address");
              //console.log(response);
  
              var shippingAdd = response.data.fetchShippingAddress;
              //console.log(paySet);
  
              if (shippingAdd !== null) {
                payload.shippingAddress = shippingAdd !== undefined ? shippingAdd[0] : undefined;
                return payload;
              }
            }
          }).catch((err) => {
            //console.log(err);
          })
          
        }catch(err){
          ////console.log(err);
        };

        dispatch({
          type: "fetch_shipping_address",
          payload: payload
        });
    }

    var UpdateShippingAddress  = async function UpdateShippingAddress(payload, shippingaddress){
      if(shippingaddress !== null && shippingaddress !== undefined){
          let newShippingAdd = shippingaddress;
          //console.log(newShippingAdd);
          var updateRes = await updateShippingAddress({
            variables: {
              _id: shippingaddress._id,
              AirFreight: shippingaddress.AirFreight,
              SeaFreight: shippingaddress.SeaFreight
            }
          }).then(async function(response) {
            ////console.log("create orer result");
            if (response.data.updateShippingAddress !== null) {
              await getShippingAddress(payload);
              return true;
            }
          });

          if(updateRes !== undefined){
            return updateRes;
          }
      }else{
        return false
      }
      return false
    }

    var createPreAlert = async function createPreAlert(packageZip, file, uid, UserInfo, mbNum) {
      //var tstamp = ''
      let PackageInfo = {
          Cost: '',
          ItemName: '',
          MailBoxNumber: '',
          Merchant: '',
          OrderDate: '',
          Status: 'In Transit',
          TrackingNumber: packageZip.trackingNum2,
          Weight: '',
          Courier: ''
      };

      let Pickup = packageZip.pickup;
      let Deliver = packageZip.deliver;
      let Customer= `${UserInfo._id}`;
      let TrackingNumber= packageZip.trackingNum2;
      
      var fileType = packageZip.content.type;
      var RequestParams = {
        user_email: "",
        user_name: "",
        merchant: packageZip.merchant !== null && packageZip.merchant !== undefined ? packageZip.merchant : "",
        status: PackageInfo.Status !== null && PackageInfo.Status !== undefined ? PackageInfo.Status : "",
        content: file,
        tracking_number: packageZip.trackingNum2,
        Contact: packageZip.contact,
        ALine1: packageZip.aLine1,
        ALine2: packageZip.aLine2,
        City: packageZip.city,
        Pickup: packageZip.pickup
      };
      //var packArr = [];
      
      var checkIfPackageExists = await getPackageById({variables: {TrackingNumber: packageZip.trackingNum2}}).then(async function(response) {
        console.log("Checking user result for fetch user info");
        //console.log(response.data.getPackageById);
        if (response.data.getPackageById !== null && response.data.getPackageById !== undefined) {
          return "Tracking number exist";
        } else {
          console.log("Package with Tracking number does not exist.")
          var storeRes = await addPackage({variables: {PackageInfo, Customer, TrackingNumber, Pickup, Deliver}}).then(async function (response2) {
            //console.log("New Package Details  successfully written!");
            if (UserInfo !== null && UserInfo !== undefined && UserInfo.fullName !== "" && UserInfo.email !== "") {
              RequestParams.user_email = UserInfo.email;
              RequestParams.user_name = UserInfo.fullName; //console.log("Params going to sendNewPackageMethod");
              //console.log(RequestParams);
    
              var emailRes = await sendPreAlertEmail(RequestParams, fileType).then(async function (emailSentRes) {
                if(Deliver){
                  console.log("about to update contact and address details.")
                  let updateCAndAddress = await updateContactAndAddress({variables: {_id: Customer, ALine1: packageZip.aLine1, ALine2: packageZip.aLine2,
                    Contact: packageZip.contact, City: packageZip.city}}).then(async function (response2) {
                    if (emailSentRes) {
                      return true;
                    } else {
                      //console.log("Unable to send add package email at this time.")
                      return true;
                    }
                  }).catch(function (err) {
                    //console.log("Unable to send add package email at this time.")
                    //console.log(err);
                    return true;
                  });
                  return updateCAndAddress;
                }else{
                  if (emailSentRes) {
                    return true;
                  } else {
                    //console.log("Unable to send add package email at this time.")
                    return true;
                  }
                }
                
              }).catch(function (err) {
                //console.log("Unable to send add package email at this time.")
                //console.log(err);
                return true;
              });
              return emailRes;
            } else {
              return true;
            }
          }).catch(function (error) {
            //console.error("Error writing New Package Details: ", error);
            return false;
          });
          return storeRes;
        }
      }).catch(function (err) {
        //console.error("Error checking if package exist: ", err);
        return false;
      });
      return checkIfPackageExists;
    };

    var sendPreAlertEmail = async function sendPreAlertEmail(formVals, filetype) {
      //console.log("Wtf is in formVals");
      //console.log(formVals);
      let endingMessage = formVals.Pickup? "delivered to the store." : 
                          "delivered to " + formVals.ALine1 + ", " + 
                          formVals.ALine2 + ", " + formVals.City + ".";
      var RequestParams = {
        from_name: formVals.user_name,
        user_email: formVals.user_email,
        message: "A new pre alert was added by " + 
                formVals.user_name + " with status of " + 
                formVals.status + " and tracking number " + 
                formVals.tracking_number + ". " + formVals.user_name + 
                " can be contacted via " + formVals.Contact +
                " and package(s) should be " 
                + endingMessage,
        content_pdf: undefined,
        content_svg: undefined,
        content_jpeg: undefined,
        content_png: undefined,
        tracking_number: formVals.tracking_number
      };
    
      if (filetype.toLowerCase() === "application/pdf") {
        RequestParams.content_pdf = formVals.content;
      } else if (filetype.toLowerCase() === "image/png") {
        RequestParams.content_png = formVals.content;
      } else if (filetype.toLowerCase() === "image/svg+xml") {
        RequestParams.content_svg = formVals.content;
      } else if (filetype.toLowerCase() === "image/jpeg") {
        RequestParams.content_jpeg = formVals.content;
      } //console.log("What is in this package b4 emails sent");
      //console.log(RequestParams);
    
    
      var fianlRes = await sendEmail(emailServiceId, emailNewPreAlertTemplate, RequestParams, emailUserId).then(function (res) {
        if (res) {
          return true;
        }
      }).catch(function (err) {
        //console.log("Send email error");
        //console.log(err);
        return false;
      });
      return fianlRes;
    };

    var fetchMailBoxNumberByUserId = async function fetchMailBoxNumberByUserId(uid, payload) {
      //console.log("User id inside fetchMailBoxNumberByUserId is: ");
      //console.log(uid);
      //console.log("getting ref for MailBoxes");
      //console.log("querying Mailboxes");
      //var mbFound = "";
      var mboxRes = await getMailboxById({variables: {Uid: uid}}).then(function (response) {
        //console.log("Logging MailBox");
        if (response.data.getMailboxById !== null && response.data.getMailboxById !== undefined) {
          //console.log(doc.data());
          var mbFound = response.data.getMailboxById.MailboxNum;
        }
    
        if (mbFound !== "") {
          payload.mailbox_Num = mbFound;
        } else {
          //console.log("mailbox does not exist");
          payload.mailbox_Num = "None";
        }
    
    
        return payload;
      }).catch(function (err) {
        //console.log(err);
        payload.mailbox_Num = "None";
        return payload;
      });
      return mboxRes.mailbox_Num;
    };

    var mailBoxExist = async function mailBoxExist(number) {
    
      let finalRes = await getMailboxByMbox({variables: {MailboxNum: number}}).then(function (response) {
        if (response.data.getMailboxByMbox !== null && response.data.getMailboxByMbox !== undefined) {
          //console.log("Document data:", response.data.getMailboxByMbox);
          return true;
        } else {
          // response.data.getMailboxByMbox will be undefined in this case
          //console.log("No such document!");
          return false;
        }
      }).catch(function (error) {
        //console.log("Error getting document:", error);
        return false;
      });

      return finalRes;
    };

    var storeMailBoxNumber = async function storeMailBoxNumber(number, uid) {
      var res = await mailBoxExist(number);
    
      if (!res) {
        var storeRes = await addMailbox({variables: {Status: "O", Uid: uid, MailboxNum: number}}).then(function (response) {
          //console.log("Mailbox number  successfully written!");  
          return true;
        }).catch(function (error) {
          //console.error("Error writing mailbox number: ", error);
          return false;
        });
        return storeRes;
      } else {
        return false;
      }
    };

    var generate = async function generate(uid) {
      //console.log("inside generate method")
      try {
        var number = 0;
        number = Math.floor(Math.random() * 90000) + 10000; //console.log(number);
    
        var storedNumber = await storeMailBoxNumber(number.toString(), uid).then(function (res) {
          //console.log("result from store method: " + res);
          if (!res === true) {
            return "failed";
          } //console.log("returning number")
    
    
          return number.toString();
        }).catch(function (error) {
          //console.log(error);
          return "failed";
        });
        return storedNumber;
      } catch {
        return "failed";
      }
    };

    var fetchAddress = async function fetchAddress(uid, payload) {
      //console.log("User id is: ");
      //console.log(uid);
      //console.log("fetching mailboxNumber");
      await fetchMailBoxNumberByUserId(uid, payload).then(async function (res1) {
        if (res1 !== null && res1 !== undefined && res1 !== "None") {
          //console.log("Existing user mailboxnumber is: " + res1)
          payload.mailbox_Num = res1; //console.log("fetching addresses");
          dispatch({
              type: "fetch_mailbox",
              payload: payload
          });
        } else {
          //console.log("creating new mailbox address");
          var loop = "failed";
    
          while (loop === "failed") {
            //console.log("inside generate loop");
            // eslint-disable-next-line no-loop-func
            await generate(uid).then(async function (res) {
              loop = res;
    
              if (loop !== "failed") {
                //console.log("New user mailbox number is: " + res);
                payload.mailbox_Num = res; //console.log("fetching addresses");
                dispatch({
                  type: "fetch_mailbox",
                  payload: payload
                });
              }
            }).catch(function (error) {
              console.log("unable to generate mailbox number at this time");
            });
          }
        }
      });
    };

    var UpdateRestaurantBy_ID  = async function UpdateRestaurantBy_ID(payload: any, restaurant: { _id: any; Id: any; FirstName: any; LastName: any; Email: any; AddressLine1: any; AddressLine2: any; City: any; ContactNumber: any; OpeningHrs: any; category: { _id: any; }; MenuItems: any; ImageName: any; } | null | undefined){
      if(restaurant !== null && restaurant !== undefined){
          
          //console.log(restaurant);
          var updateRes = await updateRestaurantById({variables: {
            _id: restaurant._id,
            Id: restaurant.Id,
            FirstName: restaurant.FirstName,
            LastName: restaurant.LastName,
            Email: restaurant.Email,
            AddressLine1: restaurant.AddressLine1,
            AddressLine2: restaurant.AddressLine2,
            City: restaurant.City,
            ContactNumber: restaurant.ContactNumber,
            OpeningHrs: restaurant.OpeningHrs,
            category: restaurant.category._id,
            MenuItems: restaurant.MenuItems,
            ImageName: restaurant.ImageName,
          }}).then(async function(response) {
            ////console.log("create orer result");
            if (response.data.updateRestaurantById !== null) {
              await fetchRestaurants(payload);
              return true;
            }
          });

          if(updateRes !== undefined){
            return updateRes;
          }
      }else{
        return false
      }
      return false
    }

    var fetchCategories = async function fetchCategories(payload){
      //console.log("about to fetch pay settings");
        try{
          await getCategories().then((response) => {
            if (response.data.getCategories !== null) {
              // console.log("got list of restaurants");
              // console.log(response);
  
              var cats = response.data.getCategories;
              //console.log(cats);
  
              if (cats !== null) {
                payload.restaurantCategories = cats !== undefined ? cats : undefined;
                return payload;
              }
            }
          }).catch((err) => {
            //console.log(err);
          })
          
        }catch(err){
          ////console.log(err);
        };

        dispatch({
          type: "fetch_rest_categories",
          payload: payload
        });
    }

    var uploadToFirebaseCloud = async function uploadToFirebaseCloud(payload, file){
      try{
        if(!file) return;
        // Create a reference to 'images/filename'
        const storageRef = ref.child(`/images/${file.name}`);
       // var bytes = new Uint8Array(file);
        storageRef.put(file).then(async (snapshot) => {
          console.log('Uploaded an array!', snapshot);
          let res = await storageRef.getDownloadURL();
          console.log(res);
          if(res !== null && res !== undefined) {
            payload.restaurantInfo.ImageName = res;
            UpdateRestaurantBy_ID(payload, payload.restaurantInfo);
          }
        })
      }catch(err){
        console.log(err)
      }
    }

    var UpdateUserInfo  = async function UpdateUserInfo(payload, user){
      if(user !== null && user !== undefined){
          let newUser = {
            FirstName: user.FullName,
            LastName: "",
            Email: user.Email,
            AddressLine1: user.AddressLine1,
            AddressLine2: user.AddressLine2,
            ContactNumber: user.ContactNumber,
            City: user.City,
            _id: payload.userInfo._id
          }
          return await updateUser({variables: newUser}).then(async function(response) {
            ////console.log("update user result");
            if (response.data.updateUser !== null) {
              //console.log(response.data.updateOrder);
              payload.userInfo = {
                fullName: user.FullName,
                email: user.Email,
                addressLine1: user.AddressLine1,
                addressLine2: user.AddressLine2,
                contactNumber: user.ContactNumber,
                city: user.City,
                _id: payload.userInfo._id
              };
              dispatch({type: "fetch_userinfo", payload: payload});
              return true;
            }else{
              //console.log("not same")
              return false;
            }
          });
      }else{
        return false
      }
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
        rider_orders,
        restaurants,
        selectedRestaurant,
        selectedRestaurantName,
        selectedMenuSearchItem,
        selectedMenuCategory,
        selectedRider,
        prevSelectedrestaurant,
        menuCategories,
        filteredMenuItems,
        filterCategory,
        filteredRestItems,
        filterRestCategory,
        generalLocation,
        longitude,
        latitude,
        receiptDetails,
        riders,
        rider,
        serviceWorkerInitialized,
        serviceWorkerUpdated,
        serviceWorkerRegistration,
        paySettings,
        mailbox_Num,
        restaurantCategories,
        shippingAddress,
        restaurantInfo,
        OrderRejectionList,
        UpdateOrderRejectionList,
        CreateOrderRejectionList,
        JoinUs,
        signup,
        login,
        gLogin,
        logout,
        resetPassword,
        getAddress,
        fetchUserInfoForSignUp,
        fetchUserInfo,
        fetchRestaurants,
        viewMenuItems,
        getMenuBycategory,
        getRestBycategory,
        addItemToCart,
        removeCartItem,
        clearCartItems,
        getMenuCats,
        checkoutOrder,
        fetchOrdersByUser,
        fetchOrders,
        refreshingOrderTables,
        fetchOrdersForRider,
        fetchOrdersForRider2, 
        AddGeneralLocation,
        sendOrderCompletedEmail,
        sendMerchantFormEmail,
        changeOrderStatus,
        UpdateOrder,
        UpdateOrderRider,
        fetchRiders,
        serviceWorkerInit,
        serviceWorkerUpdate,
        sendContactUsEmail,
        fetchPaySettings,
        UpdatePaySettings,
        viewRiderDetails,
        createPreAlert,
        fetchAddress,
        UpdateRestaurantBy_ID,
        fetchCategories,
        restaurantSignUp,
        signup2,
        getShippingAddress,
        UpdateShippingAddress,
        fetchRiderInfo,
        udateRiderStatusInfo,
        fetchRestaurantInfo,
        uploadToFirebaseCloud,
        UpdateUserInfo
    });
    
     
    return (
        <AppDataContext.Provider value={{ value }}>
            {children}
        </AppDataContext.Provider>
    );
};


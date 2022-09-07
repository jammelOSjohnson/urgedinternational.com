import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
//Analytics
import ReactGa from 'react-ga';
//Analytics

//import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
//import { Header } from '../Components/Header';
import { Header2 } from '../Components/Header2';
import { Footer } from '../Components/Footer';
import { HomeScreen } from '../Screens/Home/HomeScreen';
import { ServicesScreen } from '../Screens/Services/ServicesScreen';
import { ContactUsScreen } from '../Screens/ContactUs/ContactUsScreen';
//import { AboutScreen } from '../Screens/About/AboutScreen';
import { CustomerDashboardScreen } from '../Screens/Dashboard/CustomerDashboard';
import { FoodDeliveryDashboardScreen } from '../Screens/Dashboard/FoodDeliveryDashboardScreen';
import { RestaurantsScreen } from '../Screens/Dashboard/RestaurantsScreen';
import { RestaurantMenuScreen } from '../Screens/Dashboard/RestaurantMenuScreen';
import { ViewRestaurantItem } from '../Screens/Dashboard/ViewRestaurantItem';
import { ShoppingCartScreen } from '../Screens/Dashboard/ShoppingCartScreen';
import { OrdersHistory } from '../Screens/Dashboard/OrderHistoryScreen';
import { ErrandScreen } from '../Screens/Dashboard/ErrandScreen';
import { RatesScreen } from '../Screens/Dashboard/RatesScreen';
import { UserProfileScreen } from '../Screens/Dashboard/UserProfileScreen';
//Admin
import { AdminDashboard } from '../Screens/AdminDashboard/AdminDashboard';
import { OrdersScreen } from '../Screens/AdminDashboard/OrdersScreen';
import { OrdersDetailsScreen } from '../Screens/AdminDashboard/OrdersDetailsScreen';
import { EmployeesScreen } from '../Screens/AdminDashboard/EmployeesScreen';
import { EmployeeDetailsScreen } from '../Screens/AdminDashboard/EmployeeDetailsScreen';
import { OrganisationsScreen } from '../Screens/AdminDashboard/OrganisationsScreen';
import { SettingsScreen } from '../Screens/AdminDashboard/SettingsScreen';
import { PaySettingsScreen } from '../Screens/AdminDashboard/PaySettingsScreen';
import { ShippingAddressSettingsScreen } from '../Screens/AdminDashboard/ShippingAddressSettingsScreen';
import { OrgDetailsScreen } from '../Screens/AdminDashboard/OrgDetailsScreen';
//Restaurant
import { RestaurantDashboardScreen } from '../Screens/RestaurantDashboard/RestaurantDashboardScreen';
import { RestaurantOrderDetailsScreen } from '../Screens/RestaurantDashboard/RestaurantOrderDetailsScreen';

//Rider
import { RiderOrderDetailsScreen } from '../Screens/RiderDashboard/RiderOrderDetailsScreen';
import { RiderOrdersScreen } from '../Screens/RiderDashboard/RiderOrdersScreen';
import { testmap } from '../Screens/Dashboard/testmap';
//import { RiderDashboard } from '../Screens/RiderDashboard/RiderDashboard';
//import { Sidebar } from '../Screens/Dashboard/Comp/Sidebar';
import { CheckoutScreen } from '../Screens/Checkout/CheckoutScreen';


//Import provider
//import { useAppData } from '../Context/AppDataContext';
//Graphql Client
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, split } from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { Suspense, useEffect } from 'react';
import "../css/custom.css";
import "jspdf/dist/polyfills.es.js";


//not found page
import { PrivacyPolicyScreen } from '../Screens/Dashboard/PrivacyPolicyScreen';
import { LiveChatWidget } from "@livechat/widget-react"
import React from 'react';
import { Spinner } from './spinner';
const NotFound = React.lazy(() => import('./NotFound'));
const RegisterScreen = React.lazy(() => import('../Screens/Auth/RegisterScreen'));
const LoginScreen = React.lazy(() => import('../Screens/Auth/LoginScreen'))
const AppDataProvider = React.lazy(() => import('../Context/AppDataContext'));
const TermsOfServiceScreen = React.lazy(() => import('../Screens/Dashboard/TermsOfServiceScreen'));
const CargoAndFreight = React.lazy(() => import('../Screens/Dashboard/CargoAndFreight'));
const OrderCompleted = React.lazy(() => import('../Screens/Checkout/OrderCompleted'));
const RestaurantProfileDetailsScreen = React.lazy(() => import('../Screens/RestaurantDashboard/RestaurantProfileDetailsScreen'));


const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      main: "#F7B614",
      light: "#FF5E14",
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: "#ffffff",
      light: "#C5C5C5"
    }
  },
  overrides: {
    MuiOutlinedInput: {
        root: {
            color: '#ffffff',
            position: 'relative',
            '& $notchedOutline': {
                borderColor: '#ffffff',
            },
            '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                borderColor: '#ffffff',
                color: '#ffffff',
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    borderColor: '#ffffff',
                    color: '#ffffff',
                },
            },
            '&$focused $notchedOutline': {
                borderColor: '#ffffff',
                borderWidth: 1,
                color: '#ffffff',
            },
            '&not($focused) $notchedOutline': {
              color: '#ffffff',
          },
        },
        colorSecondary: {
          color: "#ffffff"
        }
        
    },
    MuiInputLabel : {
        root: {
            '&$focused': {
                color: '#ffffff'
            },
        },
    },
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        '&$focused': {
          backgroundColor: "#FFF"
        }
      },
      outlinedSecondary: {
        color: "#ffffff",
        border: "1px solid #ffffff"
      }
    }
  },
})

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if(graphQLErrors){
    graphQLErrors.map(({message, locations, path}) => {
      if(process.env.NODE_ENV === 'development'){
        console.log(`Graphql error ${message}`)
      };
      return message;
    })
  }
}); 

var db_server = process.env.NODE_ENV === 'development'? process.env.REACT_APP_DEV_DB_URL : process.env.REACT_APP_PROD_DB_URL;
var ws_db_server = process.env.NODE_ENV === 'development'? process.env.REACT_APP_DEV_WS_DB_URL : process.env.REACT_APP_PROD_WS_DB_URL;

const wsLink = new WebSocketLink({
  uri: ws_db_server !== undefined ? ws_db_server: '',
  options: {
    reconnect: true,
  },
});

const httpLink = from([
  errorLink,
  new HttpLink({uri: db_server, credentials: 'include'})
])

const link = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


const App: React.FC = function App() {
  //var { value }  = useAppData();
  //var { serviceWorkerUpdate, serviceWorkerInit } = value;
  //var { refreshingOrderTables, userRolef } = value;
  //serviceWorkerRegistration.register();
  // {
  //   onSuccess: () => serviceWorkerInit(),
  //   onUpdate: reg => serviceWorkerUpdate(reg, value),
  // }

  useEffect(() =>{
    document.body.style.backgroundColor = "#fff";
    if(process.env.NODE_ENV !== 'development'){
      ReactGa.initialize('UA-228459826-1');
    }
    
    // try{
    //   var db_server_socket = process.env.NODE_ENV === 'development'? process.env.REACT_APP_SocketURL : process.env.REACT_APP_SocketProd_URL;
    //   const socket = io(`${db_server_socket}/socket`);
    //   socket.on("newOrder", (Order) => {
    //     console.log("new order deteted");
    //     if(userRolef !== undefined){
    //       if(userRolef === "Admin" || userRolef === "Rider"){
    //         refreshingOrderTables(value, Order).then(()=>{
          
    //         });
    //       }
    //     }
        
    //   })
    // }catch(err){
    //   console.log(err)
    // }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <main>
            <div>
              <Router>
                <Header2/>
                <Switch>
                  {/* <Sidebar/> */}
                    {/* <Route path="/" exact component={AboutScreen} /> */}
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/testmap" exact component={testmap} />
                    {/* Customer Screens */}
                    <Route path="/Services" exact component={ServicesScreen} />
                    <Route path="/ContactUs" exact component={ContactUsScreen} />
                    <Route path="/Login">
                      <LoginScreen />
                    </Route>
                    <Route path="/Register"  component={RegisterScreen} />
                    <Route path="/Dashboard" exact component={CustomerDashboardScreen} />
                    <Route path="/FoodDelivery" exact component={FoodDeliveryDashboardScreen} />
                    <Route path="/Restaurants" exact component={RestaurantsScreen} />
                    <Route path="/RestaurantItem" exact component={ViewRestaurantItem} />
                    <Route path="/Uship" exact component={CargoAndFreight} />
                    <Route path="/Rates" exact component={RatesScreen} />
                    <Route path="/ShoppingCart" exact component={ShoppingCartScreen} />
                    <Route path="/OrderHistory" exact component={OrdersHistory} />
                    <Route path="/Errands" exact component={ErrandScreen} />
                    <Route path="/Profile" exact component={UserProfileScreen} />
                    <Route path="/Privacy" exact component={PrivacyPolicyScreen} />
                    <Route path="/Tos" exact component={TermsOfServiceScreen} />
                    {/* Restaurant Screens */}
                    <Route path="/RestaurantDashboard" exact component={RestaurantDashboardScreen} />
                    <Route path="/ViewOrdersDetails" exact component={RestaurantOrderDetailsScreen} />
                    <Route path="/RestaurantProfile" exact component={RestaurantProfileDetailsScreen} />
                    {/* Admin Screens */}
                    <Route path="/AdminDashboard" exact component={AdminDashboard} />
                    <Route path="/AdminOrders" exact component={OrdersScreen} />
                    <Route path="/AdminOrderSDetails" exact component={OrdersDetailsScreen} />
                    <Route path="/Employees" exact component={EmployeesScreen} />
                    <Route path="/EmployeeDetails" exact component={EmployeeDetailsScreen} />
                    <Route path="/Organisations" exact component={OrganisationsScreen} />
                    <Route path="/AdminSettings" exact component={SettingsScreen} />
                    <Route path="/PaySettings" exact component={PaySettingsScreen} />
                    <Route path="/OrgDetails" exact component={OrgDetailsScreen} />
                    <Route path="/ShippingAddressSettings" exact component={ShippingAddressSettingsScreen} />
                    {/* Rider Screens */}
                    <Route path="/DeliveryOrders" exact component={RiderOrdersScreen} />
                    <Route path="/DeliveryOrdersDetails" exact component={RiderOrderDetailsScreen} />
                    <Route path="/OrgDetails" exact component={OrgDetailsScreen} />
                    {/* <Route path="/Menu/:id" exact component={RestaurantMenuScreen} /> */}
                    <Route path="/Menu" exact component={RestaurantMenuScreen} />
                    <Route path="/Checkout" exact component={CheckoutScreen} />
                    <Route path="/OrderCompleted" exact component={OrderCompleted} />
                    <Route path='/404' component={NotFound} />
                    <Redirect from='*' to="/404" />
                </Switch>
                {process.env.NODE_ENV !== 'development' ?
                  <LiveChatWidget license="14486910" />
                :
                  <></>
                }
                <Footer/>
              </Router>
            </div>
          </main>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
  return (
    <Suspense fallback={<Spinner />}>
      <ApolloProvider client={client}>
        <AppDataProvider>
          <App />
        </AppDataProvider>
      </ApolloProvider>
    </Suspense>
  );
};
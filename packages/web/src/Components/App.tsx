import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { HomeScreen } from '../Screens/Home/HomeScreen';
import { AboutScreen } from '../Screens/About/AboutScreen';
import { LoginScreen } from '../Screens/Auth/LoginScreen';
import { RegisterScreen } from '../Screens/Auth/RegisterScreen';
import { CustomerDashboardScreen } from '../Screens/Dashboard/CustomerDashboard';
import { FoodDeliveryDashboardScreen } from '../Screens/Dashboard/FoodDeliveryDashboardScreen';
import { RestaurantsScreen } from '../Screens/Dashboard/RestaurantsScreen';
import { RestaurantMenuScreen } from '../Screens/Dashboard/RestaurantMenuScreen';
import { ShoppingCartScreen } from '../Screens/Dashboard/ShoppingCartScreen';
import { OrdersHistory } from '../Screens/Dashboard/OrderHistoryScreen';
import { ErrandScreen } from '../Screens/Dashboard/ErrandScreen';
//Admin
import { AdminDashboard } from '../Screens/AdminDashboard/AdminDashboard';
import { OrdersScreen } from '../Screens/AdminDashboard/OrdersScreen';
import { OrdersDetailsScreen } from '../Screens/AdminDashboard/OrdersDetailsScreen';
import { EmployeesScreen } from '../Screens/AdminDashboard/EmployeesScreen';
import { EmployeeDetailsScreen } from '../Screens/AdminDashboard/EmployeeDetailsScreen';
import { OrganisationsScreen } from '../Screens/AdminDashboard/OrganisationsScreen';
//Rider
import { RiderOrderDetailsScreen } from '../Screens/RiderDashboard/RiderOrderDetailsScreen';
import { RiderOrdersScreen } from '../Screens/RiderDashboard/RiderOrdersScreen';
import { RiderDashboard } from '../Screens/RiderDashboard/RiderDashboard';
//import { Sidebar } from '../Screens/Dashboard/Comp/Sidebar';
import { CheckoutScreen } from '../Screens/Checkout/CheckoutScreen';
import { OrderCompleted } from '../Screens/Checkout/OrderCompleted'

//Import provider
import AppDataProvider from '../Context/AppDataContext';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { useEffect } from 'react';
import "jspdf/dist/polyfills.es.js";

//not found page
import {NotFound} from './NotFound';

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
      if(process.env.NODE_ENV === 'development'){console.log(`Graphql error ${message}`)};
      return message;
    })
  }
}); 

var db_server = process.env.NODE_ENV === 'development'? process.env.REACT_APP_DEV_DB_URL : process.env.REACT_APP_PROD_DB_URL;

const link = from([
  errorLink,
  new HttpLink({uri: db_server})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


const App: React.FC = function App() {
  useEffect(() =>{
    document.body.style.backgroundColor = "#fff"
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <main>
            <div>
              <Router>
              <Header/>
                <Switch>
                  {/* <Sidebar/> */}
                    {/* <Route path="/" exact component={AboutScreen} /> */}
                    <Route path="/" exact component={HomeScreen} />
                    {/* Customer Screens */}
                    <Route path="/About" exact component={AboutScreen} />
                    <Route path="/Login">
                      <LoginScreen />
                    </Route>
                    <Route path="/Register"  component={RegisterScreen} />
                    <Route path="/Dashboard" exact component={CustomerDashboardScreen} />
                    <Route path="/FoodDelivery" exact component={FoodDeliveryDashboardScreen} />
                    <Route path="/Restaurants" exact component={RestaurantsScreen} />
                    <Route path="/ShoppingCart" exact component={ShoppingCartScreen} />
                    <Route path="/OrderHistory" exact component={OrdersHistory} />
                    <Route path="/Errands" exact component={ErrandScreen} />
                    {/* Admin Screens */}
                    <Route path="/AdminDashboard" exact component={AdminDashboard} />
                    <Route path="/AdminOrders" exact component={OrdersScreen} />
                    <Route path="/AdminOrderSDetails" exact component={OrdersDetailsScreen} />
                    <Route path="/Employees" exact component={EmployeesScreen} />
                    <Route path="/EmployeeDetails" exact component={EmployeeDetailsScreen} />
                    <Route path="/Organisations" exact component={OrganisationsScreen} />
                    {/* Rider Screens */}
                    <Route path="/DeliveryOrders" exact component={RiderOrdersScreen} />
                    <Route path="/DeliveryOrdersDetails" exact component={RiderOrderDetailsScreen} />
                    {/* <Route path="/Menu/:id" exact component={RestaurantMenuScreen} /> */}
                    <Route path="/Menu" exact component={RestaurantMenuScreen} />
                    <Route path="/Checkout" exact component={CheckoutScreen} />
                    <Route path="/OrderCompleted" exact component={OrderCompleted} />
                    <Route path='/404' component={NotFound} />
                    <Redirect from='*' to="/404" />
                </Switch>
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
    <ApolloProvider client={client}>
      <AppDataProvider>
        <App />
      </AppDataProvider>
    </ApolloProvider>
  );
};
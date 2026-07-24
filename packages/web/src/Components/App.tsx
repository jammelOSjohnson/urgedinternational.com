import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//Analytics
import ReactGa from "react-ga";
//Analytics

//import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
//import { Header } from '../Components/Header';
import { Header2 } from "../Components/Header2";
import { Footer } from "../Components/Footer";
import { RoleProtectedRoute } from "../Components/RoleProtectedRoute";
import { HomeScreen } from "../Screens/Home/HomeScreen";
import { ServicesScreen } from "../Screens/Services/ServicesScreen";
import { ContactUsScreen } from "../Screens/ContactUs/ContactUsScreen";
//import { AboutScreen } from '../Screens/About/AboutScreen';
import { CustomerDashboardScreen } from "../Screens/Dashboard/CustomerDashboard";
import { FoodDeliveryDashboardScreen } from "../Screens/Dashboard/FoodDeliveryDashboardScreen";
import { RestaurantsScreen } from "../Screens/Dashboard/RestaurantsScreen";
import { RestaurantMenuScreen } from "../Screens/Dashboard/RestaurantMenuScreen";
import { ViewRestaurantItem } from "../Screens/Dashboard/ViewRestaurantItem";
import { ShoppingCartScreen } from "../Screens/Dashboard/ShoppingCartScreen";
import { OrdersHistory } from "../Screens/Dashboard/OrderHistoryScreen";
import { ErrandScreen } from "../Screens/Dashboard/ErrandScreen";
import { RatesScreen } from "../Screens/Dashboard/RatesScreen";
import { UserProfileScreen } from "../Screens/Dashboard/UserProfileScreen";
//Admin
import { AdminDashboard } from "../Screens/AdminDashboard/AdminDashboard";
import { OrdersScreen } from "../Screens/AdminDashboard/OrdersScreen";
import { OrdersDetailsScreen } from "../Screens/AdminDashboard/OrdersDetailsScreen";
import { EmployeesScreen } from "../Screens/AdminDashboard/EmployeesScreen";
import { EmployeeDetailsScreen } from "../Screens/AdminDashboard/EmployeeDetailsScreen";
import { OrganisationsScreen } from "../Screens/AdminDashboard/OrganisationsScreen";
import { SettingsScreen } from "../Screens/AdminDashboard/SettingsScreen";
import { PaySettingsScreen } from "../Screens/AdminDashboard/PaySettingsScreen";
import { ShippingAddressSettingsScreen } from "../Screens/AdminDashboard/ShippingAddressSettingsScreen";
import { OrgDetailsScreen } from "../Screens/AdminDashboard/OrgDetailsScreen";
//Restaurant
import { RestaurantDashboardScreen } from "../Screens/RestaurantDashboard/RestaurantDashboardScreen";
import { RestaurantOrderDetailsScreen } from "../Screens/RestaurantDashboard/RestaurantOrderDetailsScreen";

//Rider
import { RiderOrderDetailsScreen } from "../Screens/RiderDashboard/RiderOrderDetailsScreen";
import { RiderOrdersScreen } from "../Screens/RiderDashboard/RiderOrdersScreen";
import testmap2 from "../Screens/Dashboard/testmap2";
//import { RiderDashboard } from '../Screens/RiderDashboard/RiderDashboard';
//import { Sidebar } from '../Screens/Dashboard/Comp/Sidebar';
import { CheckoutScreen } from "../Screens/Checkout/CheckoutScreen";

//Import provider
//import { useAppData } from '../Context/AppDataContext';
//Graphql Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider as JssThemeProvider } from "@mui/styles";
import { Suspense, useEffect } from "react";
import "../css/custom.css";
import "jspdf/dist/polyfills.es.js";

//not found page
import { PrivacyPolicyScreen } from "../Screens/Dashboard/PrivacyPolicyScreen";
import React from "react";
import { OrderCompleted } from "../Screens/Checkout/OrderCompleted";
const PaymentProcessScreen = React.lazy(
  () => import("../Screens/Dashboard/PaymentProcessScreen"),
);
const SalesExport = React.lazy(
  () => import("../Screens/AdminDashboard/SalesExport"),
);
const NotFound = React.lazy(() => import("./NotFound"));
const RegisterScreen = React.lazy(
  () => import("../Screens/Auth/RegisterScreen"),
);
const LoginScreen = React.lazy(() => import("../Screens/Auth/LoginScreen"));
const AppDataProvider = React.lazy(() => import("../Context/AppDataContext"));
const TermsOfServiceScreen = React.lazy(
  () => import("../Screens/Dashboard/TermsOfServiceScreen"),
);
// const CargoAndFreight = React.lazy(
//   () => import("../Screens/Dashboard/CargoAndFreight"),
// );

const RestaurantProfileDetailsScreen = React.lazy(
  () => import("../Screens/RestaurantDashboard/RestaurantProfileDetailsScreen"),
);

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: {
      main: "#F7B614",
      light: "#FF5E14",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
      light: "#C5C5C5",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          position: "relative",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#ffffff",
              color: "#ffffff",
            },
          "@media (hover: none)": {
            "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#ffffff",
                color: "#ffffff",
              },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
            borderWidth: 1,
            color: "#ffffff",
          },
          "&:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
            color: "#ffffff",
          },
        },
        colorSecondary: {
          color: "#ffffff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            backgroundColor: "#FFF",
          },
        },
        outlinedSecondary: {
          color: "#ffffff",
          border: "1px solid #ffffff",
        },
      },
    },
  },
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      if (import.meta.env.MODE === "development") {
        console.log(`Graphql error ${message}`);
      }
      return message;
    });
  }
});

console.log(import.meta.env.MODE);
var db_server =
  import.meta.env.MODE === "development"
    ? import.meta.env.REACT_APP_DEV_DB_URL
    : import.meta.env.REACT_APP_PROD_DB_URL;
var ws_db_server =
  import.meta.env.MODE === "development"
    ? import.meta.env.REACT_APP_DEV_WS_DB_URL
    : import.meta.env.REACT_APP_PROD_WS_DB_URL;

const wsLink = new WebSocketLink(
  new SubscriptionClient(ws_db_server !== undefined ? ws_db_server : "", {
    connectionParams: {
      reconnect: true,
    },
  }),
);

//{
// uri: ws_db_server !== undefined ? ws_db_server : "",
// options: {
//   reconnect: true,
// },
//}
const httpLink = from([
  errorLink,
  new HttpLink({ uri: db_server, credentials: "include" }),
]);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App: React.FC = function App() {
  //var { value }  = useAppData();
  //var { serviceWorkerUpdate, serviceWorkerInit } = value;
  //var { refreshingOrderTables, userRolef } = value;
  //serviceWorkerRegistration.register();
  // {
  //   onSuccess: () => serviceWorkerInit(),
  //   onUpdate: reg => serviceWorkerUpdate(reg, value),
  // }

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    if (import.meta.env.MODE !== "development") {
      ReactGa.initialize("UA-228459826-1");
    }

    // try{
    //   var db_server_socket = import.meta.env.MODE  === 'development'? import.meta.env.REACT_APP_SocketURL : import.meta.env.REACT_APP_SocketProd_URL;
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
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <JssThemeProvider theme={theme}>
          <CssBaseline>
            <main>
              <div>
                <Router>
                  <Header2 />
                  <Switch>
                    {/* <Sidebar/> */}
                    {/* <Route path="/" exact component={AboutScreen} /> */}
                    <Route path="/" exact component={HomeScreen} />
                    <Route path="/testmap" exact component={testmap2} />
                    {/* Customer Screens */}
                    <Route path="/Services" exact component={ServicesScreen} />
                    <Route
                      path="/ContactUs"
                      exact
                      component={ContactUsScreen}
                    />
                    <Route path="/Login">
                      <LoginScreen />
                    </Route>
                    <Route path="/Register" component={RegisterScreen} />
                    <Route
                      path="/Dashboard"
                      exact
                      component={CustomerDashboardScreen}
                    />
                    <Route
                      path="/FoodDelivery"
                      exact
                      component={FoodDeliveryDashboardScreen}
                    />
                    <Route
                      path="/Restaurants"
                      exact
                      component={RestaurantsScreen}
                    />
                    <Route
                      path="/RestaurantItem"
                      exact
                      component={ViewRestaurantItem}
                    />
                    {/* <Route path="/Uship" exact component={CargoAndFreight} /> */}
                    <Route path="/Rates" exact component={RatesScreen} />
                    <Route
                      path="/ShoppingCart"
                      exact
                      component={ShoppingCartScreen}
                    />
                    <Route
                      path="/OrderCompleted"
                      exact
                      component={OrderCompleted}
                    />
                    <Route
                      path="/OrderHistory"
                      exact
                      component={OrdersHistory}
                    />
                    <Route path="/Errands" exact component={ErrandScreen} />
                    <Route
                      path="/Profile"
                      exact
                      component={UserProfileScreen}
                    />
                    <Route
                      path="/Privacy"
                      exact
                      component={PrivacyPolicyScreen}
                    />
                    <Route path="/Tos" exact component={TermsOfServiceScreen} />
                    {/* Restaurant Screens */}
                    <Route
                      path="/RestaurantDashboard"
                      exact
                      component={RestaurantDashboardScreen}
                    />
                    <Route
                      path="/ViewOrdersDetails"
                      exact
                      component={RestaurantOrderDetailsScreen}
                    />
                    <Route
                      path="/RestaurantProfile"
                      exact
                      component={RestaurantProfileDetailsScreen}
                    />
                    {/* Admin Screens */}
                    <RoleProtectedRoute
                      path="/AdminDashboard"
                      exact
                      component={AdminDashboard}
                      allowedRoles={["Admin"]}
                    />
                    <RoleProtectedRoute
                      path="/AdminOrders"
                      exact
                      component={OrdersScreen}
                      allowedRoles={["Admin", "Urged_Staff"]}
                    />
                    <RoleProtectedRoute
                      path="/AdminOrderSDetails"
                      exact
                      component={OrdersDetailsScreen}
                      allowedRoles={["Admin", "Urged_Staff"]}
                    />
                    <RoleProtectedRoute
                      path="/Employees"
                      exact
                      component={EmployeesScreen}
                      allowedRoles={["Admin", "Urged_Staff"]}
                    />
                    <RoleProtectedRoute
                      path="/EmployeeDetails"
                      exact
                      component={EmployeeDetailsScreen}
                      allowedRoles={["Admin", "Urged_Staff"]}
                    />
                    <RoleProtectedRoute
                      path="/Organisations"
                      exact
                      component={OrganisationsScreen}
                      allowedRoles={["Admin", "Urged_Staff"]}
                    />
                    <RoleProtectedRoute
                      path="/AdminSettings"
                      exact
                      component={SettingsScreen}
                      allowedRoles={["Admin"]}
                    />
                    <RoleProtectedRoute
                      path="/PaySettings"
                      exact
                      component={PaySettingsScreen}
                      allowedRoles={["Admin"]}
                    />
                    <RoleProtectedRoute
                      path="/OrgDetails"
                      exact
                      component={OrgDetailsScreen}
                      allowedRoles={["Admin", "Urged_Staff"]}
                    />
                    <RoleProtectedRoute
                      path="/ShippingAddressSettings"
                      exact
                      component={ShippingAddressSettingsScreen}
                      allowedRoles={["Admin"]}
                    />
                    <RoleProtectedRoute
                      path="/SalesExport"
                      exact
                      component={SalesExport}
                      allowedRoles={["Admin"]}
                    />
                    {/* Rider Screens */}
                    <Route
                      path="/DeliveryOrders"
                      exact
                      component={RiderOrdersScreen}
                    />
                    <Route
                      path="/DeliveryOrdersDetails"
                      exact
                      component={RiderOrderDetailsScreen}
                    />
                    <Route
                      path="/ProcessPaymentResult/:id"
                      exact
                      component={PaymentProcessScreen}
                    />
                    <Route path="/:id" exact component={RestaurantMenuScreen} />

                    {/* <Route path="/Menu" exact component={RestaurantMenuScreen} /> */}

                    <Route path="/Checkout" exact component={CheckoutScreen} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                  </Switch>
                  <Footer />
                </Router>
              </div>
            </main>
          </CssBaseline>
          </JssThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};

// Minimal fallback with no MUI/emotion to avoid duplicate-React crash when lazy chunks load
// (MUI CircularProgress in Spinner can see a different React instance and throw "useContext" null)
// Styling aligned with Spinner: same overlay and a CSS-only circular indicator.
const spinnerOuterStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const overlayStyle = {
  zIndex: 1300,
  position: "fixed" as const,
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};
const cssSpinnerStyle = {
  width: 40,
  height: 40,
  border: "4px solid rgba(255,255,255,0.3)",
  borderTopColor: "#fff",
  borderRadius: "50%",
  animation: "suspenseFallbackSpin 0.8s linear infinite",
};
const SuspenseFallback = () => (
  <div style={spinnerOuterStyle}>
    <style>{`@keyframes suspenseFallbackSpin { to { transform: rotate(360deg); } }`}</style>
    <div style={overlayStyle} aria-hidden>
      <div style={cssSpinnerStyle} />
    </div>
  </div>
);

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <ApolloProvider client={client}>
        <AppDataProvider>
          <App />
        </AppDataProvider>
      </ApolloProvider>
    </Suspense>
  );
}

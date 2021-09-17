import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
//import { HomeScreen } from '../Screens/HomeScreen';
import { AboutScreen } from '../Screens/About/AboutScreen';
import { LoginScreen } from '../Screens/Auth/LoginScreen';
import { RegisterScreen } from '../Screens/Auth/RegisterScreen';
import { CustomerDashboardScreen } from '../Screens/Dashboard/CustomerDashboard';

//Import provider
import AppDataProvider from '../Context/AppDataContext';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import {onError} from '@apollo/client/link/error';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      main: "#FF5E14"
    },
    secondary: {
      main: "#ffffff"
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
      console.log(`Graphql error ${message}`)
    })
  }
}); 

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:4000/graphql"})
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
                  <Route path="/" exact component={AboutScreen} />
                  <Route path="/Login" exact component={LoginScreen} />
                  <Route path="/Register" exact component={RegisterScreen} />
                  <Route path="/Dashboard" exact component={CustomerDashboardScreen} />
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
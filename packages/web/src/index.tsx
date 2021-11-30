import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import { useAppData } from './Context/AppDataContext';
//var { value }  = useAppData();
//var { serviceWorkerUpdate, serviceWorkerInit } = value;

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();


// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js')
//   .then((reg) => console.log("service worker registered."))
//   .catch((err) => console.log(err));
// }
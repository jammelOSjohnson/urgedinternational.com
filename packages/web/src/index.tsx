//import { StrictMode } from "react";
//import ReactDOM from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";

//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
//import { useAppData } from './Context/AppDataContext';
//var { value }  = useAppData();
//var { serviceWorkerUpdate, serviceWorkerInit } = value;

/*ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);*/

//Updated to React 18
const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}
const root = createRoot(container);

root.render(
  // Temporarily removed StrictMode to avoid React 18 + Material-UI v4 compatibility issues
  <App />,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();

// if('serviceWorker' in navigator){
//   navigator.serviceWorker.register('/sw.js')
//   .then((reg) => //console.log("service worker registered."))
//   .catch((err) => //console.log(err));
// }

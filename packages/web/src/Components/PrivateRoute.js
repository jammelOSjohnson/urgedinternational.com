/* eslint-disable no-lone-blocks */
import { Route } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  var { value } = useAuth();
  var { currentUser } = value;
  //var localOrProd = "http://localhost:3000/";
  var localOrProd = "https://urgedservices.com/Dashboard";

  //Local Or Prod
  return (
    <Route
      {...rest}
      render={function (props) {
        return currentUser ? (
          <Component {...props} />
        ) : (
          window.location.replace(localOrProd)
        );
      }}
    ></Route>
  );
}

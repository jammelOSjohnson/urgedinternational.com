import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAppData } from "../Context/AppDataContext";
import { roleHomeRoute } from "../utils/roleHomeRoute";

type RoleProtectedRouteProps = {
  component: React.ComponentType<any>;
  allowedRoles: string[];
  exact?: boolean;
  path: string;
};

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
  animation: "routeGuardSpin 0.8s linear infinite",
};

const RouteGuardFallback = () => (
  <div style={spinnerOuterStyle}>
    <style>{`@keyframes routeGuardSpin { to { transform: rotate(360deg); } }`}</style>
    <div style={overlayStyle} aria-hidden>
      <div style={cssSpinnerStyle} />
    </div>
  </div>
);

export const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({
  component: Component,
  allowedRoles,
  ...rest
}) => {
  const { value } = useAppData();
  const { currentUser, loading, userRolef } = value;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading) return <RouteGuardFallback />;

        if (!currentUser) {
          return (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: props.location.pathname },
              }}
            />
          );
        }

        if (userRolef === undefined || userRolef === null || userRolef === "") {
          return <RouteGuardFallback />;
        }

        if (!allowedRoles.includes(userRolef)) {
          return <Redirect to={roleHomeRoute(userRolef)} />;
        }

        return <Component {...props} />;
      }}
    />
  );
};


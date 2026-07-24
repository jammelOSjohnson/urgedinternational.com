import { Container } from "@mui/material";
import React from "react";
import { Redirect } from "react-router-dom";
import { LiveChatWidget } from "@livechat/widget-react";
import { useAppData } from "../../Context/AppDataContext";
import { roleHomeRoute } from "../../utils/roleHomeRoute";

//Import Sections
import { Section1 } from "./Comp/Section1";
import { Section2 } from "./Comp/Section2";
import { Section3 } from "./Comp/Section3";
import { Section4 } from "./Comp/Section4";
import { Section5 } from "./Comp/Section5";
import { Section6 } from "./Comp/Section6";
import { Section7 } from "./Comp/Section7";

const OPS_ROLES = new Set(["Admin", "Urged_Staff", "Rider"]);

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
  animation: "homeAuthSpin 0.8s linear infinite",
};

const AuthHydrateFallback = () => (
  <div style={spinnerOuterStyle}>
    <style>{`@keyframes homeAuthSpin { to { transform: rotate(360deg); } }`}</style>
    <div style={overlayStyle} aria-hidden>
      <div style={cssSpinnerStyle} />
    </div>
  </div>
);

export const HomeScreen: React.FC = function HomeScreen() {
  const { value } = useAppData();
  const { userRolef, loading, currentUser } = value;

  if (
    !loading &&
    userRolef &&
    OPS_ROLES.has(userRolef)
  ) {
    return <Redirect to={roleHomeRoute(userRolef)} />;
  }

  if (currentUser && (loading || !userRolef || userRolef === "")) {
    return <AuthHydrateFallback />;
  }

  return (
    <>
      <Container maxWidth="xl" style={{ padding: 0, overflowX: "hidden" }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </Container>
      {import.meta.env.MODE !== "development" ? (
        <LiveChatWidget
          license={
            import.meta.env.REACT_APP_LIVECHAT_LICENSE !== undefined
              ? import.meta.env.REACT_APP_LIVECHAT_LICENSE
              : ""
          }
        />
      ) : (
        <></>
      )}
    </>
  );
};

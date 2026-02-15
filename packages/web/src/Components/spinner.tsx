import React from "react";
import { CircularProgress } from "@mui/material";

const spinnerStyle: React.CSSProperties = {
  paddingTop: 0,
  paddingBottom: 0,
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const overlayStyle: React.CSSProperties = {
  zIndex: 1300,
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};

export const Spinner: React.FC = function Spinner() {
  return (
    <div style={spinnerStyle}>
      <div style={overlayStyle} aria-hidden>
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
};

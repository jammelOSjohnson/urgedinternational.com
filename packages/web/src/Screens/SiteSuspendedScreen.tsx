import React from "react";
import { Container, Typography, Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1D2635",
      borderTop: "5px solid #F7B614",
      color: "#FFFFFF",
      textAlign: "center",
      padding: theme.spacing(4, 2),
    },
    logo: {
      height: 56,
      width: "auto",
      marginBottom: theme.spacing(4),
    },
    title: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      fontSize: "1.75rem",
      lineHeight: 1.3,
      marginBottom: theme.spacing(2),
      color: "#FFFFFF",
    },
    body: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 400,
      fontSize: "1.05rem",
      lineHeight: 1.6,
      color: "rgba(255, 255, 255, 0.85)",
      maxWidth: 480,
      margin: "0 auto",
    },
    accent: {
      display: "block",
      width: 48,
      height: 3,
      backgroundColor: "#F7B614",
      margin: "0 auto",
      marginBottom: theme.spacing(3),
    },
  }),
);

export const SiteSuspendedScreen: React.FC = function SiteSuspendedScreen() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters className={classes.root}>
      <div>
        <img
          className={classes.logo}
          src="Images/urged logo.jpg"
          alt="Urged"
        />
        <span className={classes.accent} aria-hidden />
        <Typography component="h1" className={classes.title}>
          We&apos;ll be back soon
        </Typography>
        <Typography className={classes.body}>
          This service is temporarily unavailable. Thank you for your patience
          while we complete scheduled maintenance.
        </Typography>
      </div>
    </Container>
  );
};

import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { Cart } from "../../../Components/Cart";
import { Notification } from "../../../Components/Notification";
import { User } from "../../../Components/User";
import { useHistory } from "react-router-dom";

const sx = {
  main: { padding: 0 },
  gridRoot: { padding: "0px" },
  notScrolled: { backgroundColor: "transparent" },
};

/** Mirrors HeaderLeft menu: `left: theme.spacing(1)` → cart uses same inset from the right on compact headers. */
function MobileFixedCart({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  /** Align with Dashboard HeaderLeft `isMobile` (md) so cart mirrors menu inset. */
  const isCompact = useMediaQuery(theme.breakpoints.down("md"));
  if (!isCompact) return <>{children}</>;
  return (
    <Box
      sx={{
        position: "fixed",
        right: theme.spacing(1),
        top: `calc(env(safe-area-inset-top, 0px) + ${theme.spacing(2)})`,
        zIndex: 2,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}

export const HeaderRight: React.FC = function HeaderRight() {
  const [scrolled, setScrolled] = React.useState(false);
  var history = useHistory();
  var location = history.location;
  var referralPath = location.pathname;

  const handleScroll = () => {
    let container = document.getElementById("right-container");
    let cart = document.getElementById("cart-icon-header-right");
    let scrollY = window.scrollY;
    //console.log('scrolled', scrollY)
    if (scrollY > 0) {
      setScrolled(true);
      if (!container?.classList.contains("scrolled")) {
        container?.classList.toggle("scrolled");
      }
      if (!cart?.classList.contains("cart-scrolled")) {
        cart?.classList.toggle("cart-scrolled");
      }
    } else {
      setScrolled(false);
      if (container?.classList.contains("scrolled")) {
        container.classList.toggle("scrolled");
      }

      if (cart?.classList.contains("cart-scrolled")) {
        cart?.classList.toggle("cart-scrolled");
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  if (!scrolled) {
    return (
      <>
        <Container
          id="right-container"
          maxWidth="xl"
          sx={{ ...sx.main, ...sx.notScrolled }}
          onScroll={handleScroll}
        >
          <Grid
            container
            direction="row"
            spacing={0}
            sx={sx.gridRoot}
            alignItems="center"
          >
            <Grid item xs={6}>
              <User />
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row" spacing={0}>
                <Grid item xs={12} style={{ marginTop: "0%" }}>
                  <Notification /> <span style={{ marginRight: "10%" }}></span>
                  <MobileFixedCart>
                    <Cart />
                  </MobileFixedCart>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <style>
          {`
                        .scrolled {
                            background-color: #FFF;
                            position: fixed;
                            z-index: 2;
                        }

                        .cart-scrolled {
                            position: relative;
                        }

                    `}
        </style>
      </>
    );
  } else if (referralPath.toLowerCase() === "/shoppingcart") {
    return (
      <>
        <Container
          id="right-container"
          maxWidth="xl"
          sx={{ ...sx.main, ...sx.notScrolled }}
          onScroll={handleScroll}
        >
          <Grid
            container
            direction="row"
            spacing={0}
            sx={sx.gridRoot}
            alignItems="center"
          >
            <Grid item xs={6}>
              <User />
            </Grid>
            <Grid item xs={6}>
              <Grid container direction="row" spacing={1}>
                <Grid item xs={12} style={{ marginTop: "10%" }}>
                  <Notification /> <span style={{ marginRight: "10%" }}></span>
                  <MobileFixedCart>
                    <Cart />
                  </MobileFixedCart>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <style>
          {`
                        .scrolled {
                            // background-color: #FFF;
                            // position: fixed;
                            // z-index: 2;
                        }

                        .cart-scrolled {
                            position: relative;
                        }

                    `}
        </style>
      </>
    );
  } else {
    return (
      <>
        <div id="right-container">
          <MobileFixedCart>
            <Cart />
          </MobileFixedCart>
        </div>
        <style>
          {`
                        .scrolled {
                            position: fixed;
                            z-index: 2;
                            text-align: right;
                            width: 30%;
                            padding-top: 1.5%;
                        }

                        .cart-scrolled {
                            position: relative;
                            text-align: right;
                            margin-right: 26%;
                            background-color: white;
                            border-radius: 50px;
                            padding: 15px;
                        }

                    `}
        </style>
      </>
    );
  }
};

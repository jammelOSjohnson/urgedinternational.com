import { LiveChatWidget } from "@livechat/widget-react";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
//Import Components
import { HeaderRight } from "./Comp/HeaderRight";
import { RestaurantList } from "./Comp/RestaurantList";
import RestaurantCategories from "./Comp/RestaurantCategories";
const DashboardFooter = React.lazy(() => import("./Comp/DashboardFooter"));
const HeaderLeft = React.lazy(() => import("./Comp/HeaderLeft"));
const Sidebar = React.lazy(() => import("./Comp/Sidebar"));

const gridRootSx = { padding: "0px", width: "95%", marginLeft: "auto", marginRight: "auto" };
const mainSx = { padding: 0, backgroundImage: "url(Images/FoodPortalBackground.png)", height: "100vh" };

export const RestaurantsScreen: React.FC = function RestaurantsScreen() {
  return (
    <>
      <Sidebar>
        <Container
          maxWidth="xl"
          style={{ paddingLeft: "8px", paddingRight: "8px" }}
          sx={mainSx}
        >
          <Grid
            container
            direction="row"
            spacing={0}
            sx={gridRootSx}
            alignItems="center"
          >
            <Grid
              item
              xs={8}
              style={{
                marginBottom: "2%",
                marginTop: "1%",
                background: "transparent",
              }}
            >
              <HeaderLeft />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                marginBottom: "2%",
                marginTop: "1%",
                background: "transparent",
              }}
            >
              <HeaderRight />
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  fontFamily: "PT Sans",
                }}
                variant="h3"
              >
                Restaurants
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <RestaurantCategories />
            </Grid>
            <Grid item xs={12}>
              <RestaurantList />
            </Grid>
            <Grid item xs={12}>
              <DashboardFooter />
            </Grid>
          </Grid>
        </Container>
      </Sidebar>
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

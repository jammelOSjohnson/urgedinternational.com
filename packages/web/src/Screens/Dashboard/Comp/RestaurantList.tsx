import { useAppData } from "../../../Context/AppDataContext";
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ItemRating } from "../../../Components/ItemRating";
import { Link } from "react-router-dom";
//import MapContainer from "../MapContainer";
import CheckGps from "./CheckGps";

const sx = {
  root: { padding: "0% 0px 5% 0px", borderRadius: "22px" },
  gridSpacing: { marginLeft: "auto", marginRight: "auto" },
  avatar: { width: 52, height: 52, backgroundColor: "#FFFFFF" },
  cardImage: { textAlign: "left" as const, position: "relative" as const },
  kfcImage: { marginTop: "-24%" },
  menuImages: { borderRadius: "10px" },
  link: { textDecoration: "none" },
};

interface NoGps {
  open2: boolean;
  errorMessage: string;
}

export const RestaurantList: React.FC = function RestaurantList(props) {
  var { value } = useAppData();
  var {
    fetchRestaurants,
    restaurants,
    viewMenuItems,
    filteredRestItems,
    generalLocation,
  } = value;

  const [gpsCheck, setgpsCheck] = React.useState<NoGps>({
    open2: false,
    errorMessage: "Please turn on GPS to use Urged Food Delivery.",
  });

  useEffect(() => {
    ////console.log("inside use effect");
    ////console.log(restaurants);
    if (restaurants.length === 0) {
      fetchRestaurants(value);
    }
    // eslint-disable-next-line
  }, [restaurants, filteredRestItems]);

  var history = useHistory();

  var handleSelectedRestaurant = async function (index, restaurantName) {
    if (index !== undefined || index !== null) {
      // //console.log("Index is");
      // //console.log(index);
      var payload = value;
      payload.selectedRestaurant = index;
      payload.selectedRestaurantName = restaurantName;
      await viewMenuItems(payload).then(() => {
        //console.log("about to leave page")
        history.push(`/Menu-${restaurantName}`);
      });
    }
  };

  if (restaurants.length !== 0) {
    return (
      <>
        <Typography
          variant="body1"
          style={{ paddingTop: "3%", paddingBottom: "3%" }}
        >
          Please select restaurants listed below to see their menu.
        </Typography>
        {/* {gpsCheck.open2 && 
                                        <Typography 
                                        variant="h5" 
                                        style={{
                                            backgroundColor: "#ff0000",
                                            color: "#FFF",
                                            fontWeight: "bolder",
                                            padding: 5,
                                            textAlign: "center"
                                        }}>
                                        {gpsCheck.errorMessage}
                                        </Typography>
                                    } */}
        {/* <MapContainer setLoading={"none"} setgpsCheck={setgpsCheck} gpsCheck={gpsCheck} /> */}
        <CheckGps setLoading={"none"} />
        <Grid
          container
          direction="row"
          spacing={1}
          sx={sx.root}
          alignItems="center"
        >
          {filteredRestItems.length !== 0
            ? filteredRestItems.map((restaurant, index) => {
                ////console.log("restaurant is");
                ////console.log(restaurant);

                if (
                  restaurant.isAvailable !== null &&
                  restaurant.isAvailable !== undefined
                ) {
                  if (
                    restaurant.isAvailable &&
                    restaurant.Parish === generalLocation
                  ) {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={3}
                        xl={3}
                        sx={sx.gridSpacing}
                        key={index}
                      >
                        <Link
                          to={"javascript();"}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectedRestaurant(
                              index,
                              restaurant.FirstName,
                            );
                          }}
                          style={sx.link}
                        >
                          <Card sx={sx.root}>
                            <CardHeader
                              avatar={
                                <Avatar
                                  variant="square"
                                  aria-label="restaurant"
                                  sx={sx.avatar}
                                >
                                  <CardMedia sx={sx.cardImage}>
                                    <img
                                      style={sx.kfcImage}
                                      src={restaurant.ImageName}
                                      alt="kfcImage"
                                    ></img>
                                  </CardMedia>
                                </Avatar>
                              }
                              action={
                                <IconButton aria-label="settings">
                                  <img
                                    style={sx.kfcImage}
                                    src="Images/FavIcon.png"
                                    alt="FavIcon"
                                  ></img>
                                </IconButton>
                              }
                              title={restaurant.FirstName}
                              subheader={restaurant.City}
                            />
                            <CardContent>
                              <Grid
                                container
                                direction="row"
                                spacing={1}
                                sx={sx.root}
                                alignItems="center"
                              >
                                <Grid item xs={6}>
                                  <Typography variant="body2" component="p">
                                    Menu
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="body2" component="p">
                                    <ItemRating rating={3.5} />
                                  </Typography>
                                </Grid>
                                {restaurant.MenuItems.filter(
                                  (item, index) => index < 3,
                                ).map((item, index) => {
                                  return (
                                    <Grid item xs={4} key={index}>
                                      <img
                                        style={sx.menuImages}
                                        src={item.ImageName}
                                        height="81px"
                                        width="100%"
                                        alt="img3"
                                      ></img>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    );
                  } else {
                    return null;
                  }
                } else {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      sx={sx.gridSpacing}
                      key={index}
                    >
                      <Link
                        to={"javascript();"}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectedRestaurant(index, restaurant.FirstName);
                        }}
                        style={sx.link}
                      >
                        <Card sx={sx.root}>
                          <CardHeader
                            avatar={
                              <Avatar
                                variant="square"
                                aria-label="restaurant"
                                sx={sx.avatar}
                              >
                                <CardMedia sx={sx.cardImage}>
                                  <img
                                    style={sx.kfcImage}
                                    src={restaurant.ImageName}
                                    alt="kfcImage"
                                  ></img>
                                </CardMedia>
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <img
                                  style={sx.kfcImage}
                                  src="Images/FavIcon.png"
                                  alt="FavIcon"
                                ></img>
                              </IconButton>
                            }
                            title={restaurant.FirstName}
                            subheader={restaurant.City}
                          />
                          <CardContent>
                            <Grid
                              container
                              direction="row"
                              spacing={1}
                              sx={sx.root}
                              alignItems="center"
                            >
                              <Grid item xs={6}>
                                <Typography variant="body2" component="p">
                                  Menu
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="body2" component="p">
                                  <ItemRating rating={3.5} />
                                </Typography>
                              </Grid>
                              {restaurant.MenuItems.filter(
                                (item, index) => index < 3,
                              ).map((item, index) => {
                                return (
                                  <Grid item xs={4} key={index}>
                                    <img
                                      style={sx.menuImages}
                                      src={item.ImageName}
                                      height="81px"
                                      width="100%"
                                      alt="img3"
                                    ></img>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </CardContent>
                        </Card>
                      </Link>
                    </Grid>
                  );
                }
              })
            : restaurants.map((restaurant, index) => {
                ////console.log("restaurant is");
                ////console.log(restaurant);
                console.log();
                if (
                  restaurant.isAvailable !== null &&
                  restaurant.isAvailable !== undefined
                ) {
                  if (
                    restaurant.isAvailable &&
                    restaurant.Parish === generalLocation
                  ) {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={3}
                        xl={3}
                        sx={sx.gridSpacing}
                        key={index}
                      >
                        <Link
                          to={"javascript();"}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectedRestaurant(
                              index,
                              restaurant.FirstName,
                            );
                          }}
                          style={sx.link}
                        >
                          <Card sx={sx.root}>
                            <CardHeader
                              avatar={
                                <Avatar
                                  variant="square"
                                  aria-label="restaurant"
                                  sx={sx.avatar}
                                >
                                  <CardMedia sx={sx.cardImage}>
                                    <img
                                      style={sx.kfcImage}
                                      src={restaurant.ImageName}
                                      alt="kfcImage"
                                    ></img>
                                  </CardMedia>
                                </Avatar>
                              }
                              action={
                                <IconButton aria-label="settings">
                                  <img
                                    style={sx.kfcImage}
                                    src="Images/FavIcon.png"
                                    alt="FavIcon"
                                  ></img>
                                </IconButton>
                              }
                              title={restaurant.FirstName}
                              subheader={restaurant.City}
                            />
                            <CardContent>
                              <Grid
                                container
                                direction="row"
                                spacing={1}
                                sx={sx.root}
                                alignItems="center"
                              >
                                <Grid item xs={6}>
                                  <Typography variant="body2" component="p">
                                    Menu
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography variant="body2" component="p">
                                    <ItemRating rating={3.5} />
                                  </Typography>
                                </Grid>
                                {restaurant.MenuItems.filter(
                                  (item, index) => index < 3,
                                ).map((item, index) => {
                                  return (
                                    <Grid item xs={4} key={index}>
                                      <img
                                        style={sx.menuImages}
                                        src={item.ImageName}
                                        height="81px"
                                        width="100%"
                                        alt="img3"
                                      ></img>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    );
                  } else {
                    return null;
                  }
                } else {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      sx={sx.gridSpacing}
                      key={index}
                    >
                      <Link
                        to={"javascript();"}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSelectedRestaurant(index, restaurant.FirstName);
                        }}
                        style={sx.link}
                      >
                        <Card sx={sx.root}>
                          <CardHeader
                            avatar={
                              <Avatar
                                variant="square"
                                aria-label="restaurant"
                                sx={sx.avatar}
                              >
                                <CardMedia sx={sx.cardImage}>
                                  <img
                                    style={sx.kfcImage}
                                    src={restaurant.ImageName}
                                    alt="kfcImage"
                                  ></img>
                                </CardMedia>
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <img
                                  style={sx.kfcImage}
                                  src="Images/FavIcon.png"
                                  alt="FavIcon"
                                ></img>
                              </IconButton>
                            }
                            title={restaurant.FirstName}
                            subheader={restaurant.City}
                          />
                          <CardContent>
                            <Grid
                              container
                              direction="row"
                              spacing={1}
                              sx={sx.root}
                              alignItems="center"
                            >
                              <Grid item xs={6}>
                                <Typography variant="body2" component="p">
                                  Menu
                                </Typography>
                              </Grid>
                              <Grid item xs={6}>
                                <Typography variant="body2" component="p">
                                  <ItemRating rating={3.5} />
                                </Typography>
                              </Grid>
                              {restaurant.MenuItems.filter(
                                (item, index) => index < 3,
                              ).map((item, index) => {
                                return (
                                  <Grid item xs={4} key={index}>
                                    <img
                                      style={sx.menuImages}
                                      src={item.ImageName}
                                      height="81px"
                                      width="100%"
                                      alt="img3"
                                    ></img>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </CardContent>
                        </Card>
                      </Link>
                    </Grid>
                  );
                }
              })}
        </Grid>
      </>
    );
  } else {
    return (
      <>
        {/* <Typography
          variant="body1"
          style={{ paddingTop: "3%", paddingBottom: "3%" }}
        >
          Loading...
        </Typography> */}
        <br />
        <div style={{ margin: "auto", width: "200px", textAlign: "center" }}>
          <CircularProgress color="primary" />
        </div>
      </>
    );
  }
};

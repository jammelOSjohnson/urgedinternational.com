import { useAppData } from "../../../Context/AppDataContext";
import {
  Grid,
  makeStyles,
  createStyles,
  Typography,
  Theme,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  AppBar,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
//import clsx from 'clsx';
//Import Components
//import { ItemRating } from '../../../Components/ItemRating';
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

// Phone Number to test
//const phoneNumber = " (876)-888-8888"

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2% 0% 5% 0%",
      // borderRadius: "22px"
    },
    category: {
      fontWeight: "bold",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#1D2635",
      fontFamily: "PT Sans",
    },
    cardContent: {
      flexGrow: 1,
      textAlign: "left",
      paddingBottom: "0px",
      paddingTop: "0px",
    },
    cardImage: {
      textAlign: "left",
      position: "relative",
    },
    card: {
      background: "#FFFFFF",
      border: "0.813791px solid #E2E2E2",
      boxSizing: "border-box",
      boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
      borderRadius: "34.3745px",
      height: "185px",
    },
    OrderResult1: {
      position: "absolute",
      top: "23%",
      right: "9%",
      color: "#13ADD1",
      fontFamily: "PT Sans",
      fontWeight: "bold",
    },
    OrderResult2: {
      position: "absolute",
      top: "23%",
      right: "9%",
      color: "#13ADD1",
      fontFamily: "PT Sans",
      fontWeight: "bold",
    },
    gridSpacing: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    avatar: {
      width: "33px",
      height: "33px",
      backgroundColor: "#FFFFFF",
      margin: "20% 0% 0% -40%",
    },
    kfcImage: {
      width: "33px",
      height: "33px",
      margin: "0% 0% 14% 8%",
    },
    btnLayout: {
      textAlign: "left",
      width: "100%",
      left: "50%",
      // top: "-108%",
      position: "relative",
      paddingTop: "3%",
      zIndex: 1,
    },
    inactiveItemLink: {
      textDecoration: "none",
      color: "inherit",
    },
    Button: {
      backgroundColor: "#FF5E14",
      border: "1.21951px solid #FFFFFF",
      height: "41px",
      width: "113px",
      borderRadius: 36,
    },
    btnfonts: {
      fontFamily: "PT Sans",
      fontSize: "13px",
      lineHeight: "16.82px",
      fontWeight: "bolder",
      color: "#FAFAFA",
      textTransform: "none",
    },
    menuImages: {
      borderRadius: "10px",
    },
    link: {
      textDecoration: "none",
    },
    statusDot: {
      height: "10px",
      width: "10px",
      backgroundColor: "#22F810" /*Active*/,
      /*backgroundColor: "#F86363", In-Active*/
      borderRadius: "50%",
      display: "inline-block",
    },
  })
);

export const OrganisationsCardList: React.FC = function OrganisationsCardList(
  props
) {
  const classes = useStyles();

  var { value } = useAppData();
  var { fetchRestaurants, restaurants, viewMenuItems } = value;
  const [tab, setTab] = React.useState(0);

  useEffect(() => {
    //console.log("inside use effect");
    //console.log(restaurants);
    if (restaurants.length === 0) {
      fetchRestaurants(value);
    }
  }, [restaurants]);

  // const [values, setValues] = React.useState<State>({
  //     email: '',
  //     password: '',
  //     showPassword: false,
  //   });

  var history = useHistory();

  var handleSelectedRestaurant = async function (index) {
    if (index !== undefined || index !== null) {
      //console.log("Index is");
      //console.log(index);
      var payload = value;
      payload.selectedRestaurant = index;
      await viewMenuItems(payload).then(() => {
        history.push("/OrgDetails");
      });
    }
  };

  var shrinkAddress = function (address: string): string {
    let addy = "";
    if (address.length >= 24) {
      let addyArr = address.split("");
      //console.log(addyArr);
      let addyFiltered = addyArr.map((item: any, index: number) => {
        if (index <= 23) {
          return item;
        } else {
          return "";
        }
      });
      //console.log(addyFiltered)
      for (let i = 0; i < addyFiltered.length; ) {
        addy = addy + addyFiltered[i];
        i += 1;
      }

      addy = addy + "...";
    }

    return addy;
  };

  const handleChange3 = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  if (restaurants.length !== 0) {
    return (
      <>
        <br />
        <Card>
          <CardContent>
            <AppBar position="static" color="default">
              <Tabs
                value={tab}
                onChange={handleChange3}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Clarendon" {...a11yProps(0)} />
                <Tab label="Kingston" {...a11yProps(1)} />
                <Tab label="St. Catherine" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0}>
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.root}
                alignItems="center"
              >
                {restaurants.map((restaurant, index) => {
                  //console.log("restaurant is");
                  //console.log(restaurant);
                  let addy = shrinkAddress(restaurant.AddressLine1);
                  //let name = '';
                  if (restaurant.Parish === "Clarendon") {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={4}
                        xl={4}
                        className={classes.gridSpacing}
                        key={index}
                      >
                        <Link
                          onClick={() => handleSelectedRestaurant(index)}
                          className={classes.link}
                        >
                          <Card className={classes.root}>
                            <CardHeader
                              title={`${index + 1}. ${restaurant.FirstName}`}
                              action={
                                <Avatar
                                  variant="square"
                                  aria-label="restaurant"
                                  className={classes.avatar}
                                >
                                  <CardMedia className={classes.cardImage}>
                                    <img
                                      className={classes.kfcImage}
                                      src={restaurant.ImageName}
                                      alt=""
                                    ></img>
                                  </CardMedia>
                                </Avatar>
                              }
                            />
                            <CardContent>
                              <Grid
                                container
                                direction="row"
                                spacing={1}
                                className={classes.root}
                                alignItems="center"
                              >
                                <Grid item xs={12}></Grid>
                                <Grid
                                  item
                                  container
                                  xs={12}
                                  direction="row"
                                  spacing={0}
                                >
                                  <Grid item xs={1}>
                                    <LocationOnIcon color="primary" />
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography variant="h6" component="p">
                                      {addy !== ""
                                        ? addy
                                        : restaurant.AddressLine1}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <br />
                                <Grid item container xs={8} direction="row">
                                  <Grid item xs={1}>
                                    <PhoneEnabledIcon color="primary" />
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography variant="h6" component="p">
                                      (876)-888-8888
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography
                                    variant="body2"
                                    component="p"
                                    align="center"
                                    style={{
                                      background: "#13ADD1",
                                      color: "#FFFFFF",
                                      padding: "0% 0% 0% 0%",
                                    }}
                                  >
                                    Open
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.root}
                alignItems="center"
              >
                {restaurants.map((restaurant, index) => {
                  //console.log("restaurant is");
                  //console.log(restaurant);
                  let addy = shrinkAddress(restaurant.AddressLine1);
                  //let name = '';
                  if (restaurant.Parish === "Kingston") {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={4}
                        xl={4}
                        className={classes.gridSpacing}
                        key={index}
                      >
                        <Link
                          onClick={() => handleSelectedRestaurant(index)}
                          className={classes.link}
                        >
                          <Card className={classes.root}>
                            <CardHeader
                              title={`${index + 1}. ${restaurant.FirstName}`}
                              action={
                                <Avatar
                                  variant="square"
                                  aria-label="restaurant"
                                  className={classes.avatar}
                                >
                                  <CardMedia className={classes.cardImage}>
                                    <img
                                      className={classes.kfcImage}
                                      src={restaurant.ImageName}
                                      alt=""
                                    ></img>
                                  </CardMedia>
                                </Avatar>
                              }
                            />
                            <CardContent>
                              <Grid
                                container
                                direction="row"
                                spacing={1}
                                className={classes.root}
                                alignItems="center"
                              >
                                <Grid item xs={12}></Grid>
                                <Grid
                                  item
                                  container
                                  xs={12}
                                  direction="row"
                                  spacing={0}
                                >
                                  <Grid item xs={1}>
                                    <LocationOnIcon color="primary" />
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography variant="h6" component="p">
                                      {addy !== ""
                                        ? addy
                                        : restaurant.AddressLine1}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <br />
                                <Grid item container xs={8} direction="row">
                                  <Grid item xs={1}>
                                    <PhoneEnabledIcon color="primary" />
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography variant="h6" component="p">
                                      (876)-888-8888
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography
                                    variant="body2"
                                    component="p"
                                    align="center"
                                    style={{
                                      background: "#13ADD1",
                                      color: "#FFFFFF",
                                      padding: "0% 0% 0% 0%",
                                    }}
                                  >
                                    Open
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.root}
                alignItems="center"
              >
                {restaurants.map((restaurant, index) => {
                  //console.log("restaurant is");
                  //console.log(restaurant);
                  let addy = shrinkAddress(restaurant.AddressLine1);
                  //let name = '';
                  if (restaurant.Parish === "St. Catherine") {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        lg={4}
                        xl={4}
                        className={classes.gridSpacing}
                        key={index}
                      >
                        <Link
                          onClick={() => handleSelectedRestaurant(index)}
                          className={classes.link}
                        >
                          <Card className={classes.root}>
                            <CardHeader
                              title={`${index + 1}. ${restaurant.FirstName}`}
                              action={
                                <Avatar
                                  variant="square"
                                  aria-label="restaurant"
                                  className={classes.avatar}
                                >
                                  <CardMedia className={classes.cardImage}>
                                    <img
                                      className={classes.kfcImage}
                                      src={restaurant.ImageName}
                                      alt=""
                                    ></img>
                                  </CardMedia>
                                </Avatar>
                              }
                            />
                            <CardContent>
                              <Grid
                                container
                                direction="row"
                                spacing={1}
                                className={classes.root}
                                alignItems="center"
                              >
                                <Grid item xs={12}></Grid>
                                <Grid
                                  item
                                  container
                                  xs={12}
                                  direction="row"
                                  spacing={0}
                                >
                                  <Grid item xs={1}>
                                    <LocationOnIcon color="primary" />
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography variant="h6" component="p">
                                      {addy !== ""
                                        ? addy
                                        : restaurant.AddressLine1}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <br />
                                <Grid item container xs={8} direction="row">
                                  <Grid item xs={1}>
                                    <PhoneEnabledIcon color="primary" />
                                  </Grid>
                                  <Grid item xs={11}>
                                    <Typography variant="h6" component="p">
                                      (876)-888-8888
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <Typography
                                    variant="body2"
                                    component="p"
                                    align="center"
                                    style={{
                                      background: "#13ADD1",
                                      color: "#FFFFFF",
                                      padding: "0% 0% 0% 0%",
                                    }}
                                  >
                                    Open
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Link>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </TabPanel>
          </CardContent>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Typography
          variant="body1"
          style={{ paddingTop: "3%", paddingBottom: "3%" }}
        >
          Loading...
        </Typography>
      </>
    );
  }
};

import { useAppData } from "../../../Context/AppDataContext";
import {
  Grid,
  makeStyles,
  createStyles,
  Typography,
  Theme,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface defMenuItem {
  MenuCategory: string;
  ItemName: string;
  ItemCost: number;
  ItemDescription: string;
  ImageName: string;
}

interface deCat {
  _id: string;
  Id: string;
  Name: string;
}

interface defOpeningHrs {
  Sunday: string;
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
}

interface defRestaurant {
  _id: string;
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  ContactNumber: string;
  OpeningHrs: defOpeningHrs;
  category: deCat;
  MenuItems: [defMenuItem];
  ImageName: string;
  isAvailable: Boolean;
  disabled: Boolean;
  Parish: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    favorites: {
      fontWeight: "bold",
      textAlign: "left",
    },
    viewMore: {
      ontWeight: "bold",
      textAlign: "right",
      color: "#4A4A4A",
    },
    root: {
      padding: "0% 0px 5% 0px",
    },
    card: {
      background: "#FFFFFF",
      border: "1.14582px solid #F3F3F3",
      boxSizing: "border-box",
      boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
      borderRadius: "34.3745px",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: "10px",
      minHeight: 224.275,
    },
    cardContent: {
      flexGrow: 1,
      textAlign: "center",
      paddingBottom: "0px",
      paddingTop: "0px",
    },
    cardImage: {
      textAlign: "center",
      position: "relative",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: 700,
      color: "#1D2635",
      fontFamily: "PT Sans",
    },
  })
);

export const Favourites: React.FC = function Favourites() {
  const classes = useStyles();
  var { value } = useAppData();
  var { restaurants, fetchRestaurants, generalLocation } = value;
  const [filteredRest, setfilteredRest] = useState<defRestaurant[]>([]);

  useEffect(() => {
    if (restaurants.length === 0) {
      fetchRestaurants(value);
    } else if (restaurants.length !== 0 && generalLocation !== undefined) {
      let filteredR = restaurants.filter(
        (item) => item?.Parish === generalLocation
      );
      console.log(filteredR);
      setfilteredRest(filteredR);
    }
  }, [restaurants, generalLocation]);

  if (filteredRest.length === 0 || generalLocation === undefined) {
    return (
      <>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid
              container
              direction="row"
              spacing={3}
              className={classes.root}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                container
                spacing={1}
                style={{ overflowY: "scroll", height: "378.58px" }}
              >
                <Grid item xs={8}>
                  <Typography variant="subtitle1" className={classes.favorites}>
                    Favourites
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Link to="/Restaurants" title="View More">
                    <Typography
                      variant="subtitle1"
                      className={classes.viewMore}
                    >
                      View More
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      {/* <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                                                        Loading...
                                            </Typography> */}
                      <CircularProgress
                        color="primary"
                        style={{ marginTop: "15%" }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  } else {
    return (
      <>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Grid
              container
              direction="row"
              spacing={3}
              className={classes.root}
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                container
                spacing={1}
                style={{ overflowY: "scroll", height: "378.58px" }}
              >
                <Grid item xs={8}>
                  <Typography variant="subtitle1" className={classes.favorites}>
                    Favourites
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Link to="/Restaurants" title="View More">
                    <Typography
                      variant="subtitle1"
                      className={classes.viewMore}
                    >
                      View More
                    </Typography>
                  </Link>
                </Grid>
                {filteredRest.slice(0, 6).map((item, index) => {
                  if (item?.Parish === generalLocation) {
                    return (
                      <Grid item xs={6}>
                        <Card className={classes.card}>
                          <CardMedia className={classes.cardImage}>
                            <img
                              src={filteredRest[index].MenuItems[0].ImageName}
                              alt="ExampleBigDeal1"
                              width={149}
                              height={121}
                            ></img>
                          </CardMedia>
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              className={classes.cardTitle}
                            >
                              {filteredRest[index].MenuItems[0].ItemName}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  }
};

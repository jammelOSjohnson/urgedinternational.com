import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import "../CSS/RestaurantCategories.css";
import { useAppData } from "../../../Context/AppDataContext";

// Static styles (no @mui/styles hook - avoids "Invalid hook call" when multiple React copies exist)
const sx = {
  root: { padding: "2% 0px 0% 0px" },
  category: { fontWeight: "bold" },
  card: {
    background: "#FFFFFF",
    border: "1.14582px solid #F3F3F3",
    boxSizing: "border-box",
    boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
    borderRadius: "34.3745px",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "4%",
  },
  cardMobile: {
    background: "#FFFFFF",
    border: "1.14582px solid #F3F3F3",
    boxSizing: "border-box",
    boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
    borderRadius: "34.3745px",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "4%",
    minWidth: "140px",
  },
  cardContent: {
    flexGrow: 1,
    display: "inline-block",
    paddingBottom: "0px !important",
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  cardContent2: {
    flexGrow: 1,
    display: "inline-block",
    paddingBottom: "0px !important",
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
  },
  cardImage: {
    textAlign: "center",
    position: "relative" as const,
    width: "30%",
    display: "inline-block",
  },
  images: { width: "55%" },
  cardTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#1D2635",
    fontFamily: "PT Sans",
  },
  cardTitle2: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#FF5E14",
    fontFamily: "PT Sans",
  },
  inactiveItemLink: { textDecoration: "none", color: "inherit" },
  gridSpacing: { marginLeft: "auto", marginRight: "auto" },
  table: { minWidth: 320, backgroundColor: "transparent" },
  tableContainer: { display: "grid" },
  tableHead: { display: "none" },
};

function useMatchMedia(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    const listener = () => setMatches(m.matches);
    m.addEventListener("change", listener);
    return () => m.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

export const RestaurantCategories: React.FC = function RestaurantCategories() {
  var { value } = useAppData();
  var { filterRestCategory, getRestBycategory } = value;

  const isMatch = useMatchMedia("(max-width: 600px)");
  const isMatchMedium = useMatchMedia("(min-width: 960px)");

  const restCategories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Fast Food",
    "Pastry",
    "Chinese",
    "Salads",
  ];

  var filterCat = function (event, category) {
    try {
      event.preventDefault();
      getRestBycategory(value, category).then(() => {
        //setSate
      });
    } catch (err) {
      //console.log(err)
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={1}
        sx={sx.root}
        alignItems="center"
      >
        <Grid item xs={10} md={10}>
          <Typography variant="subtitle1" sx={sx.category}>
            Categories
          </Typography>
        </Grid>
      </Grid>
      {isMatchMedium ? (
        <Grid
          container
          direction="row"
          spacing={1}
          sx={sx.root}
          alignItems="center"
        >
          <Grid container direction="column">
            <Grid container direction="row" spacing={1}>
              {filterRestCategory === undefined ||
              filterRestCategory === "All" ? (
                <a
                  href="javascript()"
                  title="All"
                  style={{ ...sx.inactiveItemLink, ...sx.gridSpacing }}
                  onClick={(e) => filterCat(e, "All")}
                  key={"All"}
                >
                  <Grid item>
                    <Card sx={sx.card} className="cardSizeCategoriesRestarants2">
                      <CardContent sx={sx.cardContent2}>
                        <Typography gutterBottom sx={sx.cardTitle2}>
                          ALL
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </a>
              ) : (
                <a
                  href="javascript()"
                  style={{ ...sx.inactiveItemLink, ...sx.gridSpacing }}
                  onClick={(e) => filterCat(e, "All")}
                  key={"All"}
                >
                  <Grid item>
                    <Card
sx={sx.card} className="cardSizeCategoriesRestarants3"
                    >
                      <CardContent sx={sx.cardContent2}>
                        <Typography
                          gutterBottom
                          sx={sx.cardTitle}
                          style={{ color: "#000000" }}
                        >
                          ALL
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </a>
              )}
              {filterRestCategory !== undefined
                ? restCategories.map((item, index) => {
                    return filterRestCategory === item ? (
                      <a
                        href="javascript()"
                        title="Fast Food"
                        style={{ ...sx.inactiveItemLink, ...sx.gridSpacing }}
                        onClick={(e) => filterCat(e, item)}
                        key={item}
                      >
                        <Grid item>
                          <Card
                            sx={sx.card} className="cardSizeCategoriesRestarants2"
                          >
                            <CardMedia sx={sx.cardImage}>
                              <img
                                src="Images/FoodDeliveryFastFood.png"
                                style={sx.images}
                                alt="FoodDeliveryFastFood"
                              ></img>
                            </CardMedia>
                            <CardContent sx={sx.cardContent2}>
                              <Typography
                                gutterBottom
                                sx={sx.cardTitle2}
                              >
                                {item}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </a>
                    ) : (
                      <a
                        href="javascript()"
                        title="Fast Food"
                        style={{ ...sx.inactiveItemLink, ...sx.gridSpacing }}
                        onClick={(e) => filterCat(e, item)}
                        key={item}
                      >
                        <Grid item>
                          <Card
                            sx={sx.card} className="cardSizeCategoriesRestarants"
                          >
                            <CardMedia sx={sx.cardImage}>
                              <img
                                src="Images/FoodDeliveryFastFood.png"
                                style={sx.images}
                                alt="FoodDeliveryFastFood"
                              ></img>
                            </CardMedia>
                            <CardContent sx={sx.cardContent}>
                              <Typography
                                gutterBottom
                                sx={sx.cardTitle}
                              >
                                {item}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </a>
                    );
                  })
                : restCategories.map((item, index) => {
                    return (
                      <a
                        href="javascript()"
                        title="Fast Food"
                        style={{ ...sx.inactiveItemLink, ...sx.gridSpacing }}
                        onClick={(e) => filterCat(e, item)}
                        key={item}
                      >
                        <Grid item>
                          <Card
                            sx={sx.card} className="cardSizeCategoriesRestarants"
                          >
                            <CardMedia sx={sx.cardImage}>
                              <img
                                src="Images/FoodDeliveryFastFood.png"
                                style={sx.images}
                                alt="FoodDeliveryFastFood"
                              ></img>
                            </CardMedia>
                            <CardContent sx={sx.cardContent}>
                              <Typography
                                gutterBottom
                                sx={sx.cardTitle}
                              >
                                {item}
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </a>
                    );
                  })}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}

      {isMatch ? (
        <>
          <TableContainer component={Paper} sx={sx.tableContainer}>
            <Table sx={sx.table} aria-label="simple table">
              <TableHead sx={sx.tableHead}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={0}>
                  <TableCell align="center">
                    {filterRestCategory === undefined ||
                    filterRestCategory === "All" ? (
                      <a
                        href="javascript()"
                        title="All"
                        style={sx.inactiveItemLink}
                        onClick={(e) => filterCat(e, "All")}
                        key={"All"}
                      >
                        <Grid item>
                          <Card
                            sx={sx.cardMobile} className="cardSizeCategoriesRestarants2"
                          >
                            <CardContent sx={sx.cardContent}>
                              <Typography
                                gutterBottom
                                sx={sx.cardTitle2}
                              >
                                ALL
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </a>
                    ) : (
                      <a
                        href="javascript()"
                        style={sx.inactiveItemLink}
                        onClick={(e) => filterCat(e, "All")}
                        key={"All"}
                      >
                        <Grid item>
                          <Card
                            sx={sx.cardMobile} className="cardSizeCategoriesRestarants3"
                          >
                            <CardContent sx={sx.cardContent}>
                              <Typography
                                gutterBottom
                                sx={sx.cardTitle}
                              >
                                ALL
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </a>
                    )}
                  </TableCell>
                  {filterRestCategory !== undefined
                    ? restCategories.map((item, index) => {
                        return filterRestCategory === item ? (
                          <TableCell align="center">
                            <a
                              href="javascript()"
                              title="Fast Food"
                              style={sx.inactiveItemLink}
                              onClick={(e) => filterCat(e, item)}
                              key={item}
                            >
                              <Grid item>
                                <Card
                                  sx={sx.cardMobile} className="cardSizeCategoriesRestarants2"
                                >
                                  <CardMedia sx={sx.cardImage}>
                                    <img
                                      src="Images/FoodDeliveryFastFood.png"
                                      style={sx.images}
                                      alt="FoodDeliveryFastFood"
                                    ></img>
                                  </CardMedia>
                                  <CardContent sx={sx.cardContent}>
                                    <Typography
                                      gutterBottom
                                      sx={sx.cardTitle2} className="selected"
                                    >
                                      {item}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </a>
                          </TableCell>
                        ) : (
                          <TableCell align="center">
                            <a
                              href="javascript()"
                              title="Fast Food"
                              style={sx.inactiveItemLink}
                              onClick={(e) => filterCat(e, item)}
                              key={item}
                            >
                              <Grid item>
                                <Card sx={sx.cardMobile}>
                                  <CardMedia sx={sx.cardImage}>
                                    <img
                                      src="Images/FoodDeliveryFastFood.png"
                                      style={sx.images}
                                      alt="FoodDeliveryFastFood 3"
                                    ></img>
                                  </CardMedia>
                                  <CardContent sx={sx.cardContent}>
                                    <Typography
                                      gutterBottom
                                      sx={sx.cardTitle} className="selected"
                                    >
                                      {item}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </a>
                          </TableCell>
                        );
                      })
                    : restCategories.map((item, index) => {
                        return (
                          <TableCell align="center">
                            <a
                              href="javascript()"
                              title="Fast Food"
                              style={{ ...sx.inactiveItemLink, ...sx.gridSpacing }}
                              onClick={(e) => filterCat(e, item)}
                              key={item}
                            >
                              <Grid item>
                                <Card sx={sx.cardMobile}>
                                  <CardMedia sx={sx.cardImage}>
                                    <img
                                      src="Images/FoodDeliveryFastFood.png"
                                      style={sx.images}
                                      alt="FoodDeliveryFastFood"
                                    ></img>
                                  </CardMedia>
                                  <CardContent sx={sx.cardContent}>
                                    <Typography
                                      gutterBottom
                                      sx={sx.cardTitle} className="selected"
                                    >
                                      {item}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </Grid>
                            </a>
                          </TableCell>
                        );
                      })}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RestaurantCategories;

import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        favorites: {
            fontWeight: "bold",
            textAlign: "left"
        },
        viewMore: {
            ontWeight: "bold",
            textAlign: "right",
            color: "#4A4A4A"
        },
        root: {
            padding: "0% 0px 5% 0px"
        },
        category: {
            fontWeight: "bold"
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
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "center",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "center",
            position: "relative"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        links: {
            textDecoration: "none"
        },
    }),
);

export const Popularcategories: React.FC = function Popularcategories() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
          <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Popular Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid container xs={6} direction="column">
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryBreakfast.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Breakfast">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Breakfast
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryLunch.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Lunch">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Lunch
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryDinner.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Dinner">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Dinner
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryDessert.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Dessert">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Dessert
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={6} direction="column">
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryFastFood.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Fast Food">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Fast Food
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryPastry.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Pastry">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Pastry
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliveryChinese.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Chinese">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Chinese
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={10} md={3}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/FoodDeliverySalads.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Link className={classes.links} to="#" title="Salads">
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Salads
                                        </Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
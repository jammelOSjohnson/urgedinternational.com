import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
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
        root: {
            padding: "0% 0px 5% 0px"
        },
        cardTitle1: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#F25A29"
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#13ADD1"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#FEC109"
        },
        cardTitle4: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#53C557"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            padding: 0,
            paddingTop: "30px"
        },
        cardImage: {
            textAlign: "left"
        },
        card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: "20px",
            paddingTop: "10px"
        },
        links: {
            textDecoration: "none"
        },
        category: {
            fontWeight: "bold"
        }
    }),
);

export const Categories: React.FC = function Categories() {
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
                            Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/FoodDeliveryServiceSM.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle1}>
                                    Food Delivery
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/lightbluetruckIconImageSM.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle2}>
                                    Errand Services
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/yellowtruckIconImageSM.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle3}>
                                    Urged Express
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/GreenMarketPlace.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle4}>
                                    Market Place
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
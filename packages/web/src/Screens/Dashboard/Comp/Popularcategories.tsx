import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent, useMediaQuery, useTheme } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import  '../CSS/PopularCategories.css';

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
            padding: "2% 0px 0% 0px"
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
            paddingTop: "23%",
        },
        cardMobile: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: "10px",
            minHeight: "142px",
            minWidth: "120px"
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
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto"
        },
        gridSpacingMobile: {
            marginLeft: "2%", 
            marginRight: "2%"
        },
        wrapper: {
            // display: "flex",
            // overflow: "auto"
        },
        item: {
            
        }
    }),
);

export const Popularcategories: React.FC = function Popularcategories() {
    const classes = useStyles();
    const theme = useTheme();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
    
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    var history = useHistory();

    
      
    return (
        <>
          <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Popular Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {isMatchMedium? (
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    <Grid container xs={12} direction="column">
                        <Grid container direction="row" spacing={1}>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Breakfast" title="Breakfast" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryBreakfast.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Breakfast
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Lunch" title="Lunch" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryLunch.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Lunch
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Dinner" title="Dinner" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryDinner.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Dinner
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Dessert" title="Dessert" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryDessert.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Dessert
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/FastFood" title="Fast Food" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryFastFood.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Fast Food
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Pastry" title="Pastry" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryPastry.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Pastry
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Chinese" title="Chinese" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryChinese.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Chinese
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid item className={classes.gridSpacing}>
                                <Link to="/FoodDelivery/Salads" title="Salads" className={classes.inactiveItemLink}>
                                    <Card className={clsx(classes.card, "cardSizeCategories")}>
                                        <CardMedia className={classes.cardImage} style={{paddingTop: "14px"}}>
                                            <img src="Images/FoodDeliverySalads.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Salads
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ):<></>}

            {isMatch? (
                <div >
                                <Link to="/FoodDelivery/Breakfast" title="Breakfast" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryBreakfast.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Breakfast
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/Lunch" title="Lunch" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryLunch.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Lunch
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/Dinner" title="Dinner" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryDinner.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Dinner
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/Dessert" title="Dessert" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryDessert.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Dessert
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/FastFood" title="Fast Food" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryFastFood.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Fast Food
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/Pastry" title="Pastry" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryPastry.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Pastry
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/Chinese" title="Chinese" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/FoodDeliveryChinese.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Chinese
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link to="/FoodDelivery/Salads" title="Salads" className={classes.inactiveItemLink}>
                                    <Card className={classes.cardMobile}>
                                        <CardMedia className={classes.cardImage} style={{paddingTop: "14px"}}>
                                            <img src="Images/FoodDeliverySalads.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle}>
                                                    Salads
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
              </div>
            ):<></>}
            
        </>
    )
}
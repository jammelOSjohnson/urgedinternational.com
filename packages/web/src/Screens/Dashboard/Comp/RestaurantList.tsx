import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardHeader, Avatar, CardMedia, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { ItemRating } from '../../../Components/ItemRating';
import { Link } from "react-router-dom";



interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 5% 0px",
            borderRadius: "22px"
        },
        category: {
            fontWeight: "bold"
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
            position: "relative"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
        OrderResult1: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        OrderResult2: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto"
        },
        avatar: {
            width: "52px",
            height: "52px",
            backgroundColor: "#FFFFFF"
          },
        kfcImage: {
            marginTop: "-24%"
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "50%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
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
            textTransform: "none"
        },
        menuImages: {
            borderRadius: "10px"
        },
        link: {
            textDecoration: "none"
        }
    }),
);

export const RestaurantList: React.FC = function RestaurantList(props) {
    const classes = useStyles();
    
    var { value }  = useAppData();
    var { fetchRestaurants, restaurants, viewMenuItems } = value;
    
    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        if(restaurants.length === 0){
            fetchRestaurants(value);
        }
    }, [restaurants])

    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
    var history = useHistory();

    var handleSelectedRestaurant = async function(index){
        if(index !== undefined || index !== null){
            //console.log("Index is");
            //console.log(index);
            var payload = value;
            payload.selectedRestaurant = index;
            await viewMenuItems(payload).then(() => {
                history.push("/Menu")
            })
        } 
    }
    if (restaurants.length !== 0){  
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                    Please select from the list of reataurants listed below to see their menu.
                </Typography>
                <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                    {restaurants.map((restaurant, index) => {
                        //console.log("restaurant is");
                        //console.log(restaurant);
                        return(
                            <Grid item xs={10} md={6} lg={3} xl={3} className={classes.gridSpacing} key={index}>
                                <Link onClick={() =>handleSelectedRestaurant(index)} className={classes.link}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                            <Avatar variant="square" aria-label="restaurant" className={classes.avatar}>
                                                <CardMedia className={classes.cardImage}>
                                                    <img className={classes.kfcImage} src={restaurant.ImageName}></img>
                                                </CardMedia>
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <img className={classes.kfcImage} src="Images/FavIcon.png"></img>
                                            </IconButton>
                                        }
                                        title={restaurant.FirstName}
                                        subheader={restaurant.City}
                                    />
                                    <CardContent>
                                        <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                            <Grid item xs={6}>
                                                    <Typography variant="body2"  component="p">
                                                        Menu
                                                    </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                    <Typography variant="body2"  component="p">
                                                    <ItemRating rating={3.5}/>
                                                    </Typography>
                                            </Grid>
                                                <Grid item xs={4}>
                                                        <img className={classes.menuImages} src="Images/KFC Order1.png"></img>
                                                </Grid>
                                                <Grid item xs={4}>
                                                        <img className={classes.menuImages} src="Images/KFC Order2.png"></img>
                                                </Grid>
                                                <Grid item xs={4}>
                                                        <img className={classes.menuImages} src="Images/KFC Order3.png"></img>
                                                </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                </Link>
                            </Grid>
                            
                        )
                    })}
                </Grid>
            </>
        )
    }else {
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                            Loading...
                </Typography>
            </>
        )
    }
}

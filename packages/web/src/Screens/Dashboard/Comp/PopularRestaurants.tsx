import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent, CardHeader, Avatar } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";

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
            padding: "2% 0px 5% 0px",
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
            height: "52px"
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
        Btn: {
            color: "#FFF",
            backgroundColor: "#FF5E14",
            width: "150px",
            borderRadius: "50px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3%",
            height: "41px"
        },
        menuImages: {
            borderRadius: "10px"
        }
    }),
);

export const PopularRestaurants: React.FC = function PopularRestaurants() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
      var { value }  = useAppData();
      var { orders } = value;

      var TotalOrders = orders.length;
      var OrdersInProcess = 0;
      var history = useHistory();

    
      
    return (
        <>
           <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Popular Restaurants
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                {[1,2,3].map((text, index) => (
                    <Grid item xs={10} md={6} lg={3} xl={3} className={classes.gridSpacing} key={text}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar variant="square" aria-label="restaurant" className={classes.avatar}>
                                        <CardMedia className={classes.cardImage}>
                                            <img className={classes.kfcImage} src="Images/KFC Avatar.png"></img>
                                        </CardMedia>
                                    </Avatar>
                                }
                                // action={
                                //     <IconButton aria-label="settings">
                                //         <img className={classes.kfcImage} src="Images/FavIcon.png"></img>
                                //     </IconButton>
                                // }
                                title="Kentucky Fried Chicken"
                                subheader="Kingston"
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
                                            {/* <ItemRating rating={3.5}/> */}
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
                                        <Grid item xs={4}>
                                                <img className={classes.menuImages} src="Images/KFC Order4.png"></img>
                                        </Grid>
                                        <Grid item xs={4}>
                                                <img className={classes.menuImages} src="Images/KFC Order1.png"></img>
                                        </Grid>
                                        <Grid item xs={4}>
                                                <img className={classes.menuImages} src="Images/KFC Order5.png"></img>
                                        </Grid>
                                        <Button variant="contained" fullWidth={true}
                                            className={classes.Btn} 
                                            type="button">
                                            Place an Order
                                        </Button>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>
    )
}
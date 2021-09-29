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
    }),
);

export const Favourites: React.FC = function Favourites() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
            <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                        <Grid item xs={12} container spacing={1} style={{overflowY: "scroll", height: "378.58px"}}>
                            <Grid item xs={8} >
                                <Typography variant="subtitle1" className={classes.favorites}>
                                        Favourites
                                </Typography>
                            </Grid>
                            <Grid item xs={4} >
                                <Link to="#" title="View More">
                                    <Typography variant="subtitle1" className={classes.viewMore}>
                                        View More
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardImage}>
                                        <img src="Images/ExampleBigDeal1.png"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Big Deal
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardImage}>
                                        <img src="Images/ExampleBigDeal2.png"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Big Deal
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardImage}>
                                        <img src="Images/ExampleSalad.png"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Salad
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardImage}>
                                        <img src="Images/ExampleBigDeal2.png"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Big Deal
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardImage}>
                                        <img src="Images/ExampleBigDeal2.png"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Big Deal
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardImage}>
                                        <img src="Images/ExampleBigDeal2.png"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Big Deal
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            
        </>
    )
}
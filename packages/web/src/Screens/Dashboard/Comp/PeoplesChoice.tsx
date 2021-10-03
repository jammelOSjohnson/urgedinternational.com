import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent, useMediaQuery, useTheme} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
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
            padding: "2% 0px 0% 0px"
        },
        category: {
            fontWeight: "bold"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            // textAlign: "left",
            position: "relative",
            borderRadius: "30px"
        },
        card: {
            background: "#FEC109",
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
        gridSpacingMobile: {
            marginLeft: "2%", 
            marginRight: "2%"
        }

    }),
);

export const PeoplesChoice: React.FC = function PeoplesChoice() {
    const classes = useStyles();
    const theme = useTheme();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
      var { value }  = useAppData();
      var { orders } = value;

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

      var TotalOrders = orders.length;
      var OrdersInProcess = 0;
      var history = useHistory();

    
      
    return (
        <>
            {isMatchMedium? (
                <>
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    <Grid item xs={12} md={6} lg={3} container spacing={1}>
                        <Grid item xs={10} md={10}>
                            <Typography variant="subtitle1" className={classes.category}>
                                People's Choice
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                        <Grid xs={'auto'} className={classes.gridSpacing}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={'auto'} className={classes.gridSpacing}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={'auto'} className={classes.gridSpacing}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={'auto'} className={classes.gridSpacing}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid xs={'auto'} className={classes.gridSpacing}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                </Grid>
                </>
            ):<></>}

            {isMatch? (
                <>
                <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                    <Grid item xs={12} md={6} lg={3} container spacing={1}>
                        <Grid item xs={10} md={10}>
                            <Typography variant="subtitle1" className={classes.category}>
                                People's Choice
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <div className={classes.root} style={{overflow: "auto"}}>
                    <div >
                        <div className={classes.gridSpacingMobile}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.gridSpacingMobile}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.gridSpacingMobile}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.gridSpacingMobile}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.gridSpacingMobile}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardImage}>
                                    <img src="Images/ExampleSalad.png"></img>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle}>
                                            Green Salad
                                        </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                </>
            ):<></>}
        </>
    )
}
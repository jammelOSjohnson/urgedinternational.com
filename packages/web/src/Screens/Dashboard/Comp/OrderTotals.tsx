import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardMedia, CardContent } from '@material-ui/core';
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
        }
    }),
);

export const OrderTotals: React.FC = function OrderTotals() {
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
                <CardMedia className={classes.cardImage}>
                    <img src="Images/MediumSpaceShip.png"></img>
                    <Typography variant="h2" className={classes.OrderResult1}>18</Typography>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Total Orders
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <Card className={classes.card}>
                <CardMedia className={classes.cardImage}>
                    <img src="Images/SmallSpaceShip.png"></img>
                    <Typography variant="h2" className={classes.OrderResult2}>03</Typography>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Orders In Process
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
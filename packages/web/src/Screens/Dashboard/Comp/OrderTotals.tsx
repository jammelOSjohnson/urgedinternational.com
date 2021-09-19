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
            textAlign: "left"
        },
        cardImage: {
            textAlign: "left"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
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
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Total Orders
                    </Typography>
                    <Typography>18</Typography>
                </CardContent>
            </Card>
            <br />
            <Card className={classes.card}>
                <CardMedia className={classes.cardImage}>
                    <img src="Images/SmallSpaceShip.png"></img>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Reliability
                    </Typography>
                    <Typography>We are reliable, so you can always count on us.</Typography>
                </CardContent>
            </Card>
        </>
    )
}
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
            textAlign: "center"
        },
        cardImage: {
            textAlign: "center"
        },
        card: {
            background: "transparent",
            boxShadow: "none"
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
                    <img src="Images/Reliability.svg"></img>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Reliability
                    </Typography>
                    <Typography>We are reliable, so you can always count on us.</Typography>
                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardMedia className={classes.cardImage}>
                    <img src="Images/Reliability.svg"></img>
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
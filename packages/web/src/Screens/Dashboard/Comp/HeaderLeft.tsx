import { makeStyles, createStyles, Typography, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";


interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        link: {
            textDecoration: "none",
            color: "inherit"
        }
    }),
);

export const HeaderLeft: React.FC = function HeaderLeft() {
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
    var location = history.location;
    var referralPath = location.pathname;

    
      
    return (
        <>
            {isMatchMedium? (
                <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
                    <Link to="/Dashboard" className={classes.link}>
                        PORTAL
                    </Link>
                    {referralPath === "/fooddelivery" || referralPath === "/FoodDelivery" ?
                    <span><PlayArrowRounded /> FOOD DELIVERY</span> :
                    referralPath === "/Restaurants" || referralPath === "/restaurants" ?
                    <span><PlayArrowRounded /> <Link to="/FoodDelivery" className={classes.link}>FOOD DELIVERY</Link> <PlayArrowRounded /> RESTAURANTS</span> :
                    referralPath === "/Menu" || referralPath === "/menu" ?
                    <span><PlayArrowRounded /> <Link to="/FoodDelivery" className={classes.link}>FOOD DELIVERY</Link> <PlayArrowRounded /> <Link to="/Restaurants" className={classes.link}>RESTAURANTS</Link> <PlayArrowRounded /> MENU</span> : ""}
                    
                </Typography>
            ):<></>}

            {isMatch? (
                <img src="Images/MobileMenuIcon.png"></img>
            ):<></>}
        </>
    )
}
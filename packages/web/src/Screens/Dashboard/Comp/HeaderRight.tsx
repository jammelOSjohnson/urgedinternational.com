import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { Cart } from "../../../Components/Cart";
import { Notification } from "../../../Components/Notification";
import { User } from "../../../Components/User"
import { useHistory } from 'react-router-dom';





const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        },
        main: {
            padding: 0,
        },
        gridRoot: {
            padding: "0px"
        },
        notScrolled:{
            backgroundColor: "transparent",
        }
    }),
);

export const HeaderRight: React.FC = function HeaderRight() {
    const classes = useStyles();
    const [scrolled, setScrolled] = React.useState(false);
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    const handleScroll = () => {
        let container = document.getElementById("right-container");
        let cart = document.getElementById("cart-icon-header-right");
        let scrollY = window.scrollY;
        //console.log('scrolled', scrollY)
        if (scrollY > 0) {
            setScrolled(true);
            if(!(container?.classList.contains("scrolled"))){
                container?.classList.toggle("scrolled");
            }
            if(!(cart?.classList.contains("cart-scrolled"))){
                cart?.classList.toggle("cart-scrolled");
            }
        } else {
            setScrolled(false);
            if(container?.classList.contains("scrolled")){
                container.classList.toggle("scrolled");
            }

            if(cart?.classList.contains("cart-scrolled")){
                cart?.classList.toggle("cart-scrolled");
            }
        }
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    if(!scrolled){
        return (
            <>
                <Container id='right-container' maxWidth="xl" className={clsx(classes.main, classes.notScrolled)} onScroll={handleScroll}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid item xs={6}>
                            <User />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="row" spacing={0}>
                                <Grid item xs={12} style={{marginTop: "10%"}}>
                                    <Notification /> <span style={{marginRight: "10%"}}></span>
                                    <Cart />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <style>
                    {`
                        .scrolled {
                            background-color: #FFF;
                            position: fixed;
                            z-index: 2;
                        }

                        .cart-scrolled {
                            position: relative;
                        }

                    `}
                </style>
            </>
        )
    }else if(referralPath.toLowerCase() == "/shoppingcart") {
        return (
            <>
                <Container id='right-container' maxWidth="xl" className={clsx(classes.main, classes.notScrolled)} onScroll={handleScroll}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid item xs={6}>
                            <User />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="row" spacing={1}>
                                <Grid item xs={12} style={{marginTop: "10%"}}>
                                    <Notification /> <span style={{marginRight: "10%"}}></span>
                                    <Cart />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <style>
                    {`
                        .scrolled {
                            // background-color: #FFF;
                            // position: fixed;
                            // z-index: 2;
                        }

                        .cart-scrolled {
                            position: relative;
                        }

                    `}
                </style>
            </>
        )
    }else{
        return (
            <>
                <div id='right-container'>
                    <Cart />
                </div>
                <style>
                    {`
                        .scrolled {
                            position: fixed;
                            z-index: 2;
                            text-align: right;
                            width: 30%;
                            padding-top: 1.5%;
                        }

                        .cart-scrolled {
                            position: relative;
                            text-align: right;
                            margin-right: 26%;
                            background-color: white;
                            border-radius: 50px;
                            padding: 15px;
                        }

                    `}
                </style>
            </>
        )
    }
}
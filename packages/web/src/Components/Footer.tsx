import React from 'react'
import { useHistory } from 'react-router-dom';
//import CSS
import { Container, Typography, makeStyles, createStyles, Theme, Grid} from '@material-ui/core';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Background: {
            backgroundColor: "#1D2635" ,
            padding: "3% 1% 0 1%",
            color: "#FFFFFF",
            borderTop: "5px solid #F7B614",
            textAlign: "center"
        },
        root: {
            padding: "0% 0px 1% 0px"
        },
        heroSocialIcons: {
            paddingTop: "3%",
            paddingBottom: "5%"
        },
        icon: {
            marginRight: "3%"
        },
        gridLeft: {
            textAlign: "left"
        },
        gridRight: {
            textAlign: "right"
        },
        link: {
            color: theme.palette.primary.main,
        },
        linkDisabled: {
            color: "#FFFFFF",
            textDecoration: "none",
        }
    }),
);

export const Footer: React.FC = function Footer() {
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    ////console.log("pathname is:" + location.pathname);
    const classes = useStyles();
    if(referralPath !== '/' && referralPath.toLowerCase() !== '/services' && referralPath.toLowerCase() !== '/contactus'){
        return(
          <>
  
          </>
        )
      }
    return (
        <>
            <Container maxWidth="xl" className={classes.Background}>
                <Grid container direction="row" spacing={2} className={classes.root} alignItems="center">
                    <Grid item xs={12} sm={6} lg={3}>
                        <div>
                            <img src="Images/UrgedFooterLogo.png" alt="footerlogo" />
                        </div>
                        <div>
                            <Typography >
                            Tel: <a style={{color:"#F7B614", textDecoration: "none"}} href="tel:8767735015" title="telephone">876 773 5015</a>
                            </Typography>
                            <Typography >
                                77 Manchester Ave, May Pen
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} >
                        <Typography variant="h6">Quick Links</Typography>
                        {/* <a href="javascript()" className={classes.linkDisabled}> */}
                        {/* <a href="/FoodDelivery" className={classes.linkDisabled}> */}
                        <a href="/Restaurants" className={classes.linkDisabled}>
                            <Typography>Order Food</Typography>
                        </a>
                        <Typography>Order Pickup</Typography>
                        <Typography>Careers</Typography>        
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} >
                        <Typography variant="h6">WHAT WE DO</Typography>
                        <a href="/Restaurants" className={classes.linkDisabled}>
                            <Typography>Food Delivery</Typography>
                        </a>
                        <a href="/Uship" className={classes.linkDisabled}>
                            <Typography>Package Delivery</Typography>
                        </a>
                        <Typography>Market Place</Typography>    
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3} >
                        <Typography variant="h6">Get In Touch</Typography>
                        <a href="/Login" className={classes.linkDisabled}>
                            <Typography color="primary">Login</Typography> 
                        </a>  
                        <Typography className={classes.heroSocialIcons}>
                            <a href="https://twitter.com/urgedint" rel="nofollow noreferrer" target="_blank" className={classes.icon}>
                                <Twitter color="primary" />
                            </a>
                            <a href="https://www.facebook.com/URGED-International-Limited-416151199168851/" rel="nofollow noreferrer" target="_blank" className={classes.icon}>
                                <Facebook color="primary" />
                            </a>
                            <a href="https://www.instagram.com/urgedint/?hl=en" rel="nofollow noreferrer" target="_blank">
                                <Instagram color="primary" />
                            </a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div>
                            <Typography >
                                Copyright ©2021, Urged. All Rights Reserved.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div style={{textAlign: "center", display: "inline-flex"}}>
                            <a href="/Tos" target="_blank" className={classes.link}>
                                <Typography variant="body1" color="primary">
                                    Terms of Use
                                </Typography>
                            </a>&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="/Privacy" target="_blank" className={classes.link}>
                                <Typography variant="body1" color="primary">
                                    Privacy Policy
                                </Typography>
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.gridLeft}>
                        <div style={{textAlign: "center"}}>
                            <Typography>Created by J.O.S.J</Typography>
                        </div>        
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Button, Card, CardMedia, CardContent, Paper} from '@material-ui/core';
import { Link } from "react-router-dom";
//import icons
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from "@material-ui/icons/Instagram";

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
          },
        heroText1: {
            fontSize: '6vh',
            fontWeight: 700,
            paddingTop: "18%",
        },
        heroText2: {
            fontSize: '16px',
            fontWeight: 600,
            paddingTop: "5%",
        },
        heroSubText: {
            fontSize: '6vh',
            color: "#F7B614",
        },
        heroBackground: {
            backgroundImage: "url(Images/AboutUsHeroImage.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: 0,
            color: "#FFFFFF",
        },
        heroTruckIcon: {
            paddingTop: "2.5%"
        },
        heroCards: {
            paddingTop: "10%",
            paddingBottom: "5%",
            textAlign: "center"
        },
        heroTextMargin: {
            marginLeft: "auto",
            marginRight: "auto",
        },
        placeOrderBtn: {
            backgroundColor: "#FFFFFF",
            color: "#F7B614",
            width: "204px",
            marginTop: "3%"
        },
        cardTitle1: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#F7B614"
        },
        cardTitleMiddle: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#FFFFFF",
            width: "150px",
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#13ADD1"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#FEC109"
        },
        cardTitle4: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#53C557"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            padding: 0,
            paddingTop: "30px"
        },
        cardImage: {
            textAlign: "left"
        },
        card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
        },
        cardMiddle: {
            background: "#F7B614",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            
        },
        links: {
            textDecoration: "none",
        },
        paper: {
            height: 140,
            width: 100,
          },
    }),
);

export const Section1: React.FC = function Section1() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <Grid container spacing={0} alignContent="center" alignItems="center">
                    <Grid xs={11} sm={6} md={5} lg={4} xl={3} className={classes.heroTextMargin}>
                        <Typography className={classes.heroText1} align="center">
                            Enjoy Hassle Free 
                            <span className={classes.heroSubText}> Urged</span>  Services
                        </Typography>
                    </Grid>
                </Grid>
                {/* <Typography align="center" className={classes.heroTruckIcon}>
                    <img src="Images/yellowtruckIconImage.svg" alt="truck icon"/>
                </Typography> */}
                <div style={{textAlign: "center", marginBottom: "10%"}}>
                    <Link to="/Dashboard" className={classes.links}>
                        <Button variant="contained" fullWidth={true}
                            className={classes.placeOrderBtn} 
                            startIcon={ <img src="Images/yellowtruckIconImage.svg" style={{width: "50%"}} alt="google icon"/>}  
                            type="button">
                            Place an Order
                        </Button>
                    </Link>
                </div>
                <Grid container direction="row" className={classes.root} spacing={2}>
                    <Grid item style={{marginLeft: "auto"}}>
                        <a className={classes.links} href="/FoodDelivery" title="Food Delivery">
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid key={0} item>
                                    <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/YellowFoodDeliveryService.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Typography className={classes.cardTitle1}>
                                                Food Delivery
                                                <br/>&nbsp;
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </a>
                    </Grid>
                    <Grid item >
                        <Link className={classes.links} to="#" title="Food Delivery">
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid key={1} item>
                                    <Card className={classes.cardMiddle}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/whitetruckIconImage.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Link className={classes.links} to="#" title="Food Delivery">
                                                <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                    Package Delivery Services
                                                </Typography>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid item style={{marginRight: "auto"}}>
                        <Link className={classes.links} to="#" title="Food Delivery">
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid key={2} item>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.cardImage}>
                                            <img src="Images/YellowMarketPlaceService.png"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Link className={classes.links} to="#" title="Food Delivery">
                                                <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                    Market Place Services
                                                </Typography>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
                {/* <Typography align="center" className={classes.heroSocialIcons}>
                    <a href="https://twitter.com/urgedint" rel="nofollow noreferrer" target="_blank" style={{color: "#FFF"}}>
                        <Twitter />
                    </a>
                    <a href="https://www.facebook.com/URGED-International-Limited-416151199168851/" rel="nofollow noreferrer" target="_blank" style={{color: "#FFF"}}>
                        <Facebook />
                    </a>
                    <a href="https://www.instagram.com/urgedint/?hl=en" rel="nofollow noreferrer" target="_blank" style={{color: "#FFF"}}>
                        <Instagram />
                    </a>
                    
                </Typography> */}
            </Container>
        </>
    )
}
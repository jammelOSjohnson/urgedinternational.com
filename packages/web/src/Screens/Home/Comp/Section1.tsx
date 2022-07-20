import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Button, Card, CardMedia, CardContent, useMediaQuery, useTheme} from '@material-ui/core';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/slider.css";
import clsx from 'clsx';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
          },
        heroText1: {
            fontSize: '6vh',
            fontWeight: 700,
            paddingTop: "18%",
            fontFamily: "PT Sans",
            width: "93%"
        },
        heroText1Slide2: {
            fontSize: '6vh',
            fontWeight: 700,
            paddingTop: "18%",
            fontFamily: "PT Sans",
            width: "100%"
        },
        heroText2: {
            fontSize: '18px',
            fontWeight: 500,
            fontStyle: "normal",
            paddingTop: "5%",
            fontFamily: "Open Sans",
            width: "284px"
        },
        heroSubText: {
            fontSize: '6vh',
            color: "#F7B614",
        },
        heroSubText2: {
            fontSize: '6vh',
            color: "#FF5E14",
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
            marginLeft: "10%",
        },
        placeOrderBtn: {
            backgroundColor: "#F7B614",
            color: "#FFFFFF",
            width: "165px",
            height: "41px",
            borderRadius: "45px",
            marginTop: "3%",
            fontFamily: "PT Sans",
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
        cardMiddle2: {
            background: "#FF5E14",
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
        image: {
            zIndex: 1,
            margin: '0% 0% 0% 0%',
            position: "absolute",
            right: 0,
            top: "7%",
            width: "40%"
        },
    }),
);

export const Section1: React.FC = function Section1() {
    const classes = useStyles();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('xs'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('sm'));
    
    return (
        <>
            <div style={{position: "relative"}} id="HomeSlide">
                    <Carousel nextIcon={false} prevIcon={false} >
                        <Carousel.Item >  
                            <img
                            className="d-block"
                            src="Images/AboutUsHeroImage.jpg"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "30%"}}
                            id="slideimage"
                            />
                            <img src="Images/FoodDHomeSlide.png" className={clsx(classes.image, "mobileCaroselImage")} alt="KFC Bucket"/>
                            <Carousel.Caption style={{top: "5%"}}>
                                <Grid container spacing={0} alignContent="flex-start"  alignItems="flex-start">
                                    <Grid item xs={11} sm={6} md={5} lg={6} xl={3} className={classes.heroTextMargin}>
                                        <Typography className={clsx(classes.heroText1, "mobileheroText1")} align="left">
                                            Enjoy Hassle Free 
                                            <span className={classes.heroSubText}> Food</span>  Delivery.
                                        </Typography>
                                        <Typography className={clsx(classes.heroText2, "mobileheroText2")} align="left">
                                            Select your favorite food from a wide range of restaraunts. We deliver right to your door.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <div style={{textAlign: "left", marginLeft: "10%", marginBottom: "3%"}}>
                                    {/* <Link to="/Dashboard" className={classes.links}> */}
                                    <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                        <Button variant="contained" fullWidth={true}
                                            className={classes.placeOrderBtn} 
                                            endIcon={ <img src="Images/GetStartedIcon.png" style={{width: "50%"}} alt="google icon"/>}  
                                            type="button">
                                            Get Started
                                        </Button>
                                    </a>
                                    {/* </Link> */}
                                </div>
                                <Container maxWidth="xl" id="cardsArea">
                                    <Grid container direction="row" className={classes.root} spacing={2}>
                                        {isMatch?
                                            <> 
                                            <Grid item xs={12} sm={6}>
                                                {/* <a className={classes.links} href="javascipt();" onClick={handleFood} title="Food Delivery"> </a>*/}
                                                {/* <a className={classes.links} href="/FoodDelivery" title="Food Delivery"> */}
                                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={0} item>
                                                            <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowFoodDeliveryService.png" alt="YellowFoodDeliveryService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                    <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                        Food Delivery
                                                                        <br/>&nbsp;
                                                                    </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Link className={classes.links} to="/Uship" title="Uship">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={1} item>
                                                            <Card className={classes.cardMiddle}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/whitetruckIconImage.png" alt="whitetruckIconImage"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                                            Freight Forwarding
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <a className={classes.links} href="https://sallyspantry.com/" target={"_blank"} title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={2} item>
                                                            <Card className={classes.card}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowMarketPlaceService.png" alt="YellowMarketPlaceService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                            Online Grocery
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            </>
                                            :
                                            <></>
                                        }
                                        {isMatchMedium?
                                            <> 
                                            <Grid item style={{marginLeft: "auto"}}>
                                                {/* <a className={classes.links} href="javascipt();" onClick={handleFood} title="Food Delivery"> </a>*/}
                                                {/* <a className={classes.links} href="/FoodDelivery" title="Food Delivery"> */}
                                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={0} item>
                                                            <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowFoodDeliveryService.png" alt="YellowFoodDeliveryService"></img>
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
                                            <Grid item>
                                                <Link className={classes.links} to="/Uship" title="Uship">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={1} item>
                                                            <Card className={classes.cardMiddle}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/whitetruckIconImage.png" alt="whitetruckIconImage"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                                            Freight Forwarding
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <Grid item style={{marginRight: "auto"}}>
                                                <a className={classes.links} href="https://sallyspantry.com/" target={"_blank"} title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={2} item>
                                                            <Card className={classes.card}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowMarketPlaceService.png" alt="YellowMarketPlaceService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                            Online Grocery
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            </>
                                            :
                                            <></>
                                        }
                                    </Grid>
                                </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >  
                            <img
                            className="d-block"
                            src="Images/PackageDevHeroImage.jpg"
                            alt="Second slide"
                            width="100%"
                            style={{minHeight: "30%"}}
                            id="slideimage"
                            />
                            <img src="Images/package delivery.png" className={clsx(classes.image, "mobileCaroselImage")} alt="KFC Bucket"/>
                            <Carousel.Caption style={{top: "5%"}} >
                                <Grid container spacing={0} alignContent="flex-start"  alignItems="flex-start">
                                    <Grid item xs={11} sm={6} md={5} lg={6} xl={3} className={classes.heroTextMargin}>
                                        <Typography className={clsx(classes.heroText1Slide2, "mobileheroSlideText2")} align="left">
                                            Enjoy Super Fast 
                                            <span className={classes.heroSubText2}> Package</span>  Delivery.
                                        </Typography>
                                        <Typography className={clsx(classes.heroText2, "mobileheroText2")} align="left">
                                            We deliver Pacakges of all shapes and sizes. Schedule a pick-up and we will drop them off wherever you like.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <div style={{textAlign: "left", marginLeft: "10%", marginBottom: "3%"}}>
                                </div>
                                <Container maxWidth="xl" id="cardsArea">
                                    <Grid container direction="row" className={classes.root} spacing={2}>
                                        {isMatch?
                                            <> 
                                            <Grid item xs={12} sm={6}>
                                                {/* <a className={classes.links} href="javascipt();" onClick={handleFood} title="Food Delivery"> </a>*/}
                                                {/* <a className={classes.links} href="/FoodDelivery" title="Food Delivery"> */}
                                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={0} item>
                                                            <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowFoodDeliveryService.png" alt="YellowFoodDeliveryService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                    <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                        Food Delivery
                                                                        <br/>&nbsp;
                                                                    </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Link className={classes.links} to="/Uship" title="Uship">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={1} item>
                                                            <Card className={classes.cardMiddle2}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/whitetruckIconImage.png" alt="whitetruckIconImage"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                                            Freight Forwarding
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <a className={classes.links} href="https://sallyspantry.com/" target={"_blank"} title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={2} item>
                                                            <Card className={classes.card}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowMarketPlaceService.png" alt="YellowMarketPlaceService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                            Online Grocery
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            </>
                                            :
                                            <></>
                                        }
                                        {isMatchMedium?
                                            <> 
                                            <Grid item style={{marginLeft: "auto"}}>
                                                {/* <a className={classes.links} href="javascipt();" onClick={handleFood} title="Food Delivery"> </a>*/}
                                                {/* <a className={classes.links} href="/FoodDelivery" title="Food Delivery"> */}
                                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={0} item>
                                                            <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowFoodDeliveryService.png" alt="YellowFoodDeliveryService"></img>
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
                                            <Grid item>
                                                <Link className={classes.links} to="/Uship" title="Uship">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={1} item>
                                                            <Card className={classes.cardMiddle2}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/whitetruckIconImage.png" alt="whitetruckIconImage"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                                            Freight Forwarding
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <Grid item style={{marginRight: "auto"}}>
                                                <a className={classes.links} href="https://sallyspantry.com/" target={"_blank"} title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={2} item>
                                                            <Card className={classes.card}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowMarketPlaceService.png" alt="YellowMarketPlaceService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                            Online Grocery
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            </>
                                            :
                                            <></>
                                        }
                                    </Grid>
                                </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >  
                            <img
                            className="d-block"
                            src="Images/AboutUsHeroImage.jpg"
                            alt="First slide"
                            width="100%"
                            style={{minHeight: "30%"}}
                            id="slideimage"
                            />
                            <Carousel.Caption style={{top: "5%"}}>
                                <Grid container spacing={0} alignContent="flex-start"  alignItems="flex-start">
                                    <Grid item xs={11} sm={6} md={5} lg={6} xl={3} className={classes.heroTextMargin}>
                                        <Typography className={clsx(classes.heroText1, "mobileheroText1")} align="left">
                                            Enjoy Hassle Free 
                                            <span className={classes.heroSubText}> Food</span>  Delivery.
                                        </Typography>
                                        <Typography className={clsx(classes.heroText2, "mobileheroText2")} align="left">
                                            Select your favorite food from a wide range of restaraunts. We deliver right to your door.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <div style={{textAlign: "left", marginLeft: "10%", marginBottom: "3%"}}>
                                    {/* <Link to="/Dashboard" className={classes.links}> */}
                                    <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                        <Button variant="contained" fullWidth={true}
                                            className={classes.placeOrderBtn} 
                                            endIcon={ <img src="Images/GetStartedIcon.png" style={{width: "50%"}} alt="google icon"/>}  
                                            type="button">
                                            Get Started
                                        </Button>
                                    </a>
                                    {/* </Link> */}
                                </div>
                                <Container maxWidth="xl" id="cardsArea">
                                    <Grid container direction="row" className={classes.root} spacing={2}>
                                        {isMatch?
                                            <> 
                                            <Grid item xs={12} sm={6}>
                                                {/* <a className={classes.links} href="javascipt();" onClick={handleFood} title="Food Delivery"> </a>*/}
                                                {/* <a className={classes.links} href="/FoodDelivery" title="Food Delivery"> */}
                                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={0} item>
                                                            <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowFoodDeliveryService.png" alt="YellowFoodDeliveryService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                    <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                        Food Delivery
                                                                        <br/>&nbsp;
                                                                    </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Link className={classes.links} to="/Uship" title="Uship">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={1} item>
                                                            <Card className={classes.cardMiddle}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/whitetruckIconImage.png" alt="whitetruckIconImage"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                                            Freight Forwarding
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <a className={classes.links} href="https://sallyspantry.com/" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={2} item>
                                                            <Card className={classes.card}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowMarketPlaceService.png" alt="YellowMarketPlaceService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                            Online Grocery
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            </>
                                            :
                                            <></>
                                        }
                                        {isMatchMedium?
                                            <> 
                                            <Grid item style={{marginLeft: "auto"}}>
                                                {/* <a className={classes.links} href="javascipt();" onClick={handleFood} title="Food Delivery"> </a>*/}
                                                {/* <a className={classes.links} href="/FoodDelivery" title="Food Delivery"> */}
                                                <a className={classes.links} href="/Restaurants" title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={0} item>
                                                            <Card className={classes.card} style={{paddingBottom: "0px"}}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowFoodDeliveryService.png" alt="YellowFoodDeliveryService"></img>
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
                                            <Grid item>
                                                <Link className={classes.links} to="/Uship" title="Uship">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={1} item>
                                                            <Card className={classes.cardMiddle}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/whitetruckIconImage.png" alt="whitetruckIconImage"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography gutterBottom className={classes.cardTitleMiddle}>
                                                                            Freight Forwarding
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Link>
                                            </Grid>
                                            <Grid item style={{marginRight: "auto"}}>
                                                <a className={classes.links} href="https://sallyspantry.com/" target={"_blank"} title="Food Delivery">
                                                    <Grid container justifyContent="center" spacing={2}>
                                                        <Grid key={2} item>
                                                            <Card className={classes.card}>
                                                                <CardMedia className={classes.cardImage}>
                                                                    <img src="Images/YellowMarketPlaceService.png" alt="YellowMarketPlaceService"></img>
                                                                </CardMedia>
                                                                <CardContent className={classes.cardContent}>
                                                                        <Typography style={{width: "150px"}} className={classes.cardTitle1}>
                                                                            Online Grocery
                                                                        </Typography>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </a>
                                            </Grid>
                                            </>
                                            :
                                            <></>
                                        }
                                    </Grid>
                                </Container>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <style>
                        {
                            `
                                #form-style {
                                    display: none;
                                }

                                .restaurants-btn:hover {
                                    background-color: #FEC109;
                                    color: #fff;
                                }

                                .restaurants-font:hover{
                                    color: #fff
                                }

                                @media only screen and (max-width: 1269px) {
                                    #cardsArea {
                                      display: none;
                                    }

                                    .carousel-item {
                                        height: 100vh;
                                    }

                                    #slideimage {
                                        min-height: 91% !important;
                                    }

                                    #HomeSlide .carousel-indicators {
                                        top: 0%;
                                        left: -152%;
                                        transform: rotate(90deg);
                                    }
                                }

                                @media only screen and (max-width: 968px) {
                                    #HomeSlide .carousel-indicators {
                                        top: 0%;
                                        left: -170%;
                                        transform: rotate(90deg);
                                    }
                                }


                                @media only screen and (max-width: 768px) {
                                    #HomeSlide .carousel-indicators {
                                        top: 0%;
                                        left: -191%;
                                        transform: rotate(90deg);
                                    }

                                    #slideimage {
                                        min-height: 91% !important;
                                        object-fit: cover;
                                    }

                                    .mobileCaroselImage{
                                        width: 47% !important;
                                    }
                                }

                                @media only screen and (max-width: 691px) {
                                    .mobileCaroselImage{
                                        width: 52% !important;
                                        right: 0;
                                    }
                                }

                                @media only screen and (max-width: 668px) {
                                    #HomeSlide .carousel-indicators {
                                        top: auto;
                                        bottom: 11%;
                                        left: 0;
                                        right: 0;
                                        transform: rotate(0deg);
                                    }
                                }

                                @media only screen and (max-width: 593px) {
                                    .mobileCaroselImage{
                                        width: 80% !important;
                                        right: -40%
                                    }

                                    .mobileheroText1 {
                                        width: 66% !important;
                                    }

                                    .mobileheroText2 {
                                        width: 68% !important;
                                    }

                                    .mobileheroSlideText2{
                                        width: 66% !important;
                                    }
                                }

                                @media only screen and (max-width: 470px) {
                                    .mobileCaroselImage{
                                        width: 80% !important;
                                        right: -40%
                                    }

                                    .mobileheroText1 {
                                        width: 86% !important;
                                        padding-top: 0%;
                                    }

                                    .mobileheroText2 {
                                        width: 71% !important;
                                    }

                                    .mobileheroSlideText2{
                                        width: 100% !important;
                                    }
                                }

                                @media only screen and (max-width: 470px) {
                                    .mobileCaroselImage{
                                        width: 80% !important;
                                        right: -40%;
                                        top: 20%;
                                    }
                                }
                            `
                        }
                    </style>
                </div>
        </>
    )
}
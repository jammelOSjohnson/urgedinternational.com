import React from 'react'
//import CSS
import { Link, Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardContent, CardMedia} from '@material-ui/core';

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
        },
        cardGrid: {
            padding: "5% 0",
            color: "#1D2635"
        },
        cardGrid2: {
            padding: "5% 0 10% 0",
            color: "#1D2635",
        },
        cardGrid3: {
            padding: "5% 0 0 0",
            color: "#1D2635",
        },
        cardImage: {
            backgroundSize: "auto",
            backgroundPosition: "left",
            height: "100px",
            marginLeft: "12%",
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardBody: {
            fontSize: "16px",
            fontWeight: 300,
            color: "#1D2635",
            fontFamily: "Open Sans",
        },
        cardContent: {
            flexGrow: 1,
            paddingLeft: "35px",
            paddingRight: "35px",
        },
        cardBorder1: {
            borderBottom: "3px solid #0491B2",
            borderRadius: "16px",
        },
        cardBorder2: {
            borderBottom: "3px solid #F7B614",
            borderRadius: "16px",
        },
        cardBorder3: {
            borderBottom: "3px solid #E54545",
            borderRadius: "16px",
        },
        cardBorder4: {
            borderBottom: "3px solid #F25A29",
            borderRadius: "16px",
        },
        cardBorder5: {
            borderBottom: "3px solid #47934A",
            borderRadius: "16px",
        },
        secTitle: {
            color: "#1D2635",
            fontSize: "20px",
            fontWeight: "bold",
        },
        secSubTitle: {
            color: "#F7B614",
            fontSize: "35px",
            fontWeight: "bold",
            paddingBottom: "5%"
        },
        excitedGirl: {
            zIndex: -1,
            width: "320px",
            position: "relative",
            bottom: "-115px",
        },
        link: {
            color: "#E54545",
            textDecoration: "underline"
        }
    }),
);

export const Section4: React.FC = function Section4() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography align="center" className={classes.secTitle}>
                    Services
                </Typography>
                <Typography align="center" className={classes.secSubTitle}>
                    How Can We Help?
                </Typography>
                <Grid container spacing={4} alignContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card} ${classes.cardBorder1}`}>
                            <CardMedia
                                className={classes.cardImage}
                                image="/Images/lightbluetruckIconImage.svg"
                                title="lightbluetruck"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle}>
                                    Errand Solution
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    We Pay Bills &amp; Tax office Transactions on your behalf.
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Typography></Typography>
                                </Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card} ${classes.cardBorder2}`}>
                            <CardMedia
                                className={classes.cardImage}
                                image="/Images/expresserviceImage.svg"
                                title="lightbluetruck"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle}>
                                    Urged Express
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    on-demand delivery solution that helps you to send items 
                                    like parcels, documents and gifts to your family, business 
                                    partners and friends.
                                </Typography>
                            </CardContent>
                        </Card>  
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card} ${classes.cardBorder3}`}>
                            <CardMedia
                                className={classes.cardImage}
                                image="/Images/OnlineGrocerServiceImage.svg"
                                title="lightbluetruck"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle}>
                                    Online Grocery
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    <span>Order from <Link className={classes.link} href="https://sallyspantry.com" target="_blank" rel="noreferrer">Sallyspantry.com</Link> and we will deliver your Grocery
                                    to your grill or door.</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                            </CardContent>
                        </Card>  
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="md" className={classes.cardGrid2}>
                <Grid container spacing={3} alignContent="center" alignItems="center" style={{justifyContent: "center"}}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card} ${classes.cardBorder4}`}>
                            <CardMedia
                                className={classes.cardImage}
                                image="/Images/FoodDeliveryService.svg"
                                title="lightbluetruck"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle}>
                                    Food Delivery
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    we provide delivery solutions for both Restaurant owners and Customers.
                                     We deliver from your favorite local restaurant to your door.
                                    <Typography></Typography>
                                </Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card} ${classes.cardBorder5}`}>
                            <CardMedia
                                className={classes.cardImage}
                                image="/Images/MarketPlaceService.svg"
                                title="lightbluetruck"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle}>
                                    Urged Market Place
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    A place for all merchants to sell their good and services. 
                                    Coming soon.
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </Typography>
                            </CardContent>
                        </Card>  
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="md" className={classes.cardGrid3}>
                <div style={{textAlign: "center"}}>
                    <div>
                        <img src="Images/ExcitedGirl.png" alt="excited girl" className={classes.excitedGirl} />
                    </div>
                </div>
            </Container>
        </>
    )
}
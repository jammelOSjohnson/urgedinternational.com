import React from 'react';
//import CSS
import { Container, Button, Grid, Typography, makeStyles, createStyles, Theme, Card, CardContent, CardMedia} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Background2: {
            background: "#F9FAFB",
            padding: "5% 0 5% 0",
        },
        sectionTitle: {
            fontSize: "2.5rem",
            fontWeight: 700,
            fontFamily: "Inter",
            textAlign: "center",
            paddingBottom: "2%",
        },
        sectionTitle2: {
            fontSize: "20px",
            fontWeight: 300,
            fontFamily: "Inter",
            textAlign: "center",
            paddingBottom: "2%",
        },
        root: {
            padding: 0
        },
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: "273px"
        },
        cardGrid: {
            paddingTop: "5%",
            color: "#1D2635"
        },
        cardImage: {
            backgroundSize: "auto",
            backgroundPosition: "left",
            marginLeft: "auto",
            marginRight: "auto",
            width: "53.29px",
            height: "100px",
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
            textAlign: "center"
        },
        cardBody: {
            fontSize: "16px",
            fontWeight: 300,
            color: "#1D2635",
            fontFamily: "Open Sans",
            textAlign: "center"
        },
        cardContent: {
            flexGrow: 1,
            paddingLeft: "35px",
            paddingRight: "35px",
        },
        btn: {
            color: "#FFFFFF",
            backgroundColor: "#F7B614",
            textAlign: "center",
            borderRadius: "32px",
            width: "234px",
            height: "50px"
        },
        links: {
            textDecoration: "none"
        }
    }),
);

export const Section5: React.FC = function Section5() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.Background2} >
                <Typography variant="caption">
                    <Typography className={classes.sectionTitle}>
                        Stay Home,<br/> 
                        We Got You Covered
                    </Typography>
                </Typography>
                <Typography variant="caption">
                    <Typography className={classes.sectionTitle2}>
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae cursus et<br/>
                        euismod tempor. Adipiscing elementum vestibulum in eget enim donec sed tincidunt. */}
                    </Typography>
                </Typography>
                <Container>
                    <Grid container spacing={2} className={classes.root} alignContent="center" alignItems="center" style={{justifyContent: "center"}}>
                        <Grid item xs={10} sm={6} md={3}>
                            <Card className={`${classes.card}`}>
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/Images/Reliability.svg"
                                    title="lightbluetruck"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        Reliability
                                    </Typography>
                                    <Typography className={classes.cardBody}>
                                        We are reliable, so you can always count on us.
                                    </Typography>
                                </CardContent>
                            </Card> 
                        </Grid>
                        <Grid item xs={10} sm={6} md={3}>
                            <Card className={`${classes.card}`}>
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/Images/Fast DeliveryGreen.svg"
                                    title="lightbluetruck"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        Fast Delivery
                                    </Typography>
                                    <Typography className={classes.cardBody}>
                                        Where ever you are, we got you covered. Speed is our priority
                                    </Typography>
                                </CardContent>
                            </Card>  
                        </Grid>
                        <Grid item xs={10} sm={6} md={3}>
                            <Card className={`${classes.card}`}>
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/Images/DiversifiedYellow.svg"
                                    title="lightbluetruck"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        Diversified
                                    </Typography>
                                    <Typography className={classes.cardBody}>
                                        We will take care of all your delivery and errand needs for you.
                                    </Typography>
                                </CardContent>
                            </Card>  
                        </Grid>
                        <Grid item xs={10} sm={6} md={3}>
                            <Card className={`${classes.card}`}>
                                <CardMedia
                                    className={classes.cardImage}
                                    image="/Images/QualityOrange.svg"
                                    title="lightbluetruck"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        Quality
                                    </Typography>
                                    <Typography className={classes.cardBody}>
                                        We provide quality services, and will never let you down.
                                    </Typography>
                                </CardContent>
                            </Card>  
                        </Grid>
                    </Grid>
                </Container>
                <Typography variant="caption">
                    <Typography style={{textAlign: "center", paddingTop: "5%"}}>
                        <a href="/Restaurants" title="Food Delivery" className={classes.links}>
                            <Button
                                type="button"
                                className={classes.btn}
                            >
                                Get Started
                            </Button>
                        </a>
                    </Typography>
                </Typography>
            </Container>
            <style>
                {
                    `
                        .MuiButton-contained:hover {
                            box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
                            background-color: #F7B614;
                        }
                    `
                }
            </style>
        </>
    )
}
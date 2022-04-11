import React from 'react'
//import css
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardContent} from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Background1: {
            backgroundColor: "#000",
            padding: 0,
        },
        Background2: {
            backgroundImage: "url(Images/bridge2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: 0,
            color: "#FFFFFF",
            borderTop: "5px solid #F7B614"
        },
        sectionTitle: {
            fontSize: "40px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            textAlign: "center",
            paddingTop: "5%",
        },
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "transparent",
            boxShadow: "none",
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
        cardTitle: {
            fontSize: "30px",
            fontWeight: 700,
            color: "#FFFFFF",
            fontFamily: "Roboto",
        },
        cardBody: {
            fontSize: "16px",
            fontWeight: 300,
            color: "#FFFFFF",
            fontFamily: "Open Sans",
        },
        cardContent: {
            flexGrow: 1,
            paddingLeft: 0,
            paddingRight: 0,
            position: "relative",
            width: "66%",
            marginLeft: "24%",
            marginRight: "auto",
        },
        cardNumber: {
            color: "#F7B614",
            fontWeight: 700,
            fontSize: "50px",
            left: "-25%",
            position: "absolute",
        },
        gridContainer: {
            paddingLeft: "3%",
        }
    }),
);

export const Section5: React.FC = function Section5() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.Background1} >
            <Container maxWidth="xl" className={classes.Background2} >
                <Typography className={classes.sectionTitle}>
                    How It Works
                </Typography>
                <Container maxWidth="md">
                    <Grid container spacing={0} alignContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card}`}>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.cardNumber}>
                                    1.
                                </Typography>
                               
                                <Typography className={classes.cardBody}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        You Order
                                    </Typography>
                                    Place your orders by calling us, or contacting us on Whatsapp.
                                </Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card}`}>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.cardNumber}>
                                    2.
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        We Pickup
                                    </Typography>
                                    We will arrage or pick-up packages or food from selected merchants.
                                </Typography>
                            </CardContent>
                        </Card>  
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={`${classes.card}`}>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.cardNumber}>
                                    3.
                                </Typography>
                                <Typography className={classes.cardBody}>
                                    <Typography gutterBottom className={classes.cardTitle}>
                                        We Deliver
                                    </Typography>
                                    We deliver them where ever you request in a timely manner.
                                </Typography>
                            </CardContent>
                        </Card>  
                    </Grid>
                </Grid>
                </Container>
            </Container>
            </Container>
        </>
    )
}
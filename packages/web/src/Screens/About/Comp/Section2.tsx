import { Box, Container, Grid, Typography, makeStyles, Theme, createStyles, Card, CardContent, CardMedia } from '@material-ui/core'
import React from 'react'
// import styles from '../CSS/section2.css'

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "5% 0px 5% 0px"
        },
        s2Background: {
            background: "#FFFFFF",
            padding: 0,
        },
        s2Heading: {
            color: "#F7B614",
            fontSize: "40px",
            fontWeight: 700,
            marginLeft: "auto",
            marginTop: "revert"
        },
        s2Span: {
            color: "#000000",
        },
        Typo2: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#3F3F50",
            marginLeft: "auto",
            top: "-54px",
            position: "relative"
        },
        Typo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: "auto",
            color: "#1D2635",
            borderLeft: "3px solid #F7B614",
            paddingLeft: "5%"
        },
        marginTypo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: "auto",
            color: "#1D2635",
            borderLeft: "3px solid #F7B614",
            paddingLeft: "5%",
            marginTop: "5%"
        },
        mainContainer: {
            margin: 0,
        }
    }),
);

export const Section2: React.FC = function Section2() {
    const classes = useStyles();
    return (
     <>
        <Container maxWidth="xl" className={classes.mainContainer}>
            <Grid container direction="row" spacing={2} className={classes.root} alignItems="center">
                <Grid item md={1}></Grid>
                <Grid item xs={12} md={11}>
                    <Typography variant="h2" className={classes.s2Heading}>We Deliver,<span className={classes.s2Span}>You Enjoy.</span></Typography>
                </Grid>
                {/* <Grid item xs={12}>
                    <img className={classes.yellowBar1}></img>
                </Grid> */}
                <Grid item md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <Typography className={classes.Typo2}>Our customers come first. We provide quality delivery and errand services to ease their everyday lives.</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    {/* <img className={classes.yellowBar2}></img> */}
                    <Typography variant="h2" className={classes.marginTypo3}>Ease your everyday life, by allowing us to take care of all your errands and delivery services for you.</Typography>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
            <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                <Grid item xs={12} container spacing={1}>
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia>
                                <img src="Images/Reliability.svg"></img>
                            </CardMedia>
                            <CardContent>
                                <Typography>We are reliable, so you can always count on us.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>  
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia>
                                <img src="Images/Fast Delivery.svg"></img>
                            </CardMedia>
                            <CardContent>
                                <Typography>Where ever you are, we got you covered. Speed is our priority</Typography>
                            </CardContent>
                        </Card>
                    </Grid>      
                    <Grid item xs={6} md={3}>              
                        <Card>
                            <CardMedia>
                                <img src="Images/Diversified.svg"></img>
                            </CardMedia>
                            <CardContent>
                                <Typography>We will take care of all your delivery and errand needs for you,</Typography>
                            </CardContent>
                        </Card>
                    </Grid>      
                    <Grid item xs={6} md={3}>              
                        <Card>
                            <CardMedia>
                                <img src="Images/Quality.svg"></img>
                            </CardMedia>
                            <CardContent>
                                <Typography>We provide quality services, and will never let you down.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>                              
                </Grid>
            </Grid>
        </Container>
     </>
    )
}
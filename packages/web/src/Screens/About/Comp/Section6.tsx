import { useMediaQuery, makeStyles, createStyles,Theme, Container, Grid, Typography } from '@material-ui/core';
import {  } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: "#E5E5E5",
            padding: "7% 0% 7% 0%",
        },
        fonts: {
            fontFamily: "Open Sans",
            paddingLeft: "5%",
        },
        sectionHead: {
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "41px",
            letterSpacing: '0em',
            paddingBottom: "24px"
        },
        secDescription:{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "29px",
            letterSpacing: "0em",
        },
        imageOne:{
            paddingRight: "60px",
        },
        imageOnemd:{
            paddingRight: "0px",
        },
        mainContainer: {
            margin: 0,
            padding: 0,
        }
        
    }),
);

export const Section6: React.FC = function Section6() {
    const classes = useStyles();
    const isMatchtabletforsec6 = useMediaQuery('(max-width:959px)'); 

    return (
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <Grid container spacing={0} className={classes.root}>
                    {isMatchtabletforsec6? (
                        <>
                            <Grid item xs={12} md={6} lg={6} style={{margin: "0% 0% 0% 0%", textAlign: "center"}}>
                                <Typography>
                                    <img className={classes.imageOnemd} src="Images/Group 502.svg" alt="Group 502 4"></img>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={6} style={{borderLeft: "12px solid #3B91B2", padding: "0 0 0 0%", maxWidth: "80%", marginLeft: "auto", marginRight: "auto"}}>
                                <Typography  className={`${classes.fonts} ${classes.sectionHead}`}>
                                    Our Website Is Still En Route
                                </Typography>
                                <Typography paragraph={true} className={`${classes.fonts} ${classes.secDescription}`}>
                                    Our Consumers look forward to quality delivery and errand services to ease their everyday lives, while merchants and drivers get access to greater earning opportunities because of our growing consumer base. In fact, we are proud that we have delivery-partners that got their very first earning opportunities with Urged.
                                </Typography>
                            </Grid>
                        </>
                    ): (
                      <>
                            <Grid item xs={12} md={6} lg={6} style={{margin: "0% 0% 0% 0%", textAlign: "right"}}>
                                <Typography>
                                    <img className={classes.imageOne} src="Images/Group 502.svg" alt="Group 502 5"></img>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={6} style={{borderLeft: "12px solid #3B91B2", padding: "0 0 0 0%"}}>
                                <Typography  className={`${classes.fonts} ${classes.sectionHead}`}>
                                    Our Website Is Still En Route
                                </Typography>
                                <Typography paragraph={true} className={`${classes.fonts} ${classes.secDescription}`}>
                                    Our Consumers look forward to quality delivery and errand services to ease their everyday lives, while merchants and drivers get access to greater earning opportunities because of our growing consumer base. In fact, we are proud that we have delivery-partners that got their very first earning opportunities with Urged.
                                </Typography>
                            </Grid>
                      </>
                    )}
                </Grid>
            </Container>
        </>
    )
};
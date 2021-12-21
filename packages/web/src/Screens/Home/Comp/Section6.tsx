import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, useMediaQuery, Button, useTheme} from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0% 5% 0%",
        },
        fonts: {
            fontFamily: "Open Sans",
            paddingLeft: "5%",
        },
        sectionHead: {
            fontSize: "2.5rem",
            fontWeight: 700,
            paddingBottom: "2%",
            fontFamily: "PT Sans",
            textAlign: "center",
            color: "#454545"
        },
        secDescription:{
            fontSize: "20px",
            fontWeight: 300,
            lineHeight: "29px",
            fontFamily: "Inter",
            textAlign: "center",
            paddingBottom: "5%"
        },
        imageOne:{
            paddingRight: "60px",
        },
        imageOnemd:{
            paddingRight: "0px",
        },
        mainContainer: {
            margin: 0,
            padding: "5% 0 0 0",
        },
        links: {
            textDecoration: "none",
        },
        Btn: {
            width: "171px",
            height: "50px",
            color: "#F7B614",
            border: "1px solid #F7B614",
            fontFamily: "PT Sans",
        },
        text1: {
            color: "#454545",
            fontWeight: 700,
            fontSize: "25px",
            fontFamily: "Inter",
            paddingBottom: "3%",
            textAlign: "center"
        },
        text2: {
            color: "#454545",
            fontWeight: 300,
            fontSize: "16px",
            fontFamily: "Inter",
            paddingBottom: "6%",
            textAlign: "center"
        }
    }),
);

export const Section6: React.FC = function Section6() {
    const classes = useStyles();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Container maxWidth="xl" className={classes.mainContainer}>
                <Typography style={{textAlign: "center"}} className={`${classes.sectionHead}`}>
                    How It Works
                </Typography>
                <Typography paragraph={true} className={`${classes.secDescription}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae cursus et euismod<br />
                    tempor. Adipiscing elementum vestibulum in eget enim donec sed tincidunt.
                </Typography>
                
                    {isMatchMedium?
                        <Grid container spacing={0} className={classes.root}>
                            <Grid md={6}>
                                <Grid container spacing={0}>
                                    <Grid xs={12} style={{padding: "5% 0 0 0%"}}>
                                        <Typography className={classes.text1}>
                                            You Order
                                        </Typography>
                                        <Typography className={classes.text2}>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit. 
                                        </Typography>
                                    </Grid>
                                    <Grid md={12}>
                                        <Typography className={classes.text1}>
                                            We Pickup
                                        </Typography>
                                        <Typography className={classes.text2}>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit. 
                                        </Typography>
                                    </Grid>
                                    <Grid md={12}>
                                        <Typography className={classes.text1}>
                                            We Deliver
                                        </Typography>
                                        <Typography className={classes.text2}>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit. 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid md={6}>
                                <img src="Images/Errand Services.png" alt="" />
                            </Grid>
                        </Grid>
                    :
                        <></>
                    }

                    {isMatch? 
                        <Grid container spacing={0} className={classes.root}>
                            <Grid xs={12} md={6}>
                                <img src="Images/Errand Services.png" width="100%" style={{marginLeft: "auto", marginRight: "auto"}} alt="" />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Grid container spacing={0}>
                                    <Grid xs={12} style={{padding: "5% 0 0 0%"}}>
                                        <Typography className={classes.text1}>
                                            You Order
                                        </Typography>
                                        <Typography className={classes.text2}>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit. 
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Typography className={classes.text1}>
                                            We Pickup
                                        </Typography>
                                        <Typography className={classes.text2}>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit. 
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Typography className={classes.text1}>
                                            We Deliver
                                        </Typography>
                                        <Typography className={classes.text2}>
                                            Lorem ipsum dolor sit amet,<br />
                                            consectetur adipiscing elit. 
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    :
                        <></>
                    }
            </Container>
        </>
    )
}
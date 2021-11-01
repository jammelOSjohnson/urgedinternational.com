import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, useMediaQuery, Button} from '@material-ui/core';
import { Link } from "react-router-dom";

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
            lineHeight: "40.85px",
            letterSpacing: '0em',
            paddingBottom: "24px",
            width: "65%",
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
        },
        links: {
            textDecoration: "none",
        },
        Btn: {
            width: "171px",
            height: "50px",
            color: "#F7B614",
            border: "1px solid #F7B614",
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
                                    <img className={classes.imageOnemd} src="Images/Group 5022.png" alt="Group 5022 1"></img>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={6} style={{borderLeft: "12px solid #F7B614", padding: "0 0 0 0%", maxWidth: "80%", marginLeft: "auto", marginRight: "auto"}}>
                                <Typography  className={`${classes.fonts} ${classes.sectionHead}`}>
                                    We Are Amazing Bundled in Affordable <span style={{color: "#F7B614"}}>RATES</span>
                                </Typography>
                                <Typography paragraph={true} className={`${classes.fonts} ${classes.secDescription}`}>
                                    <Link to="/" className={classes.links}>
                                        <Button variant="outlined" fullWidth={true}
                                            className={classes.Btn} 
                                            type="button">
                                            View Rates
                                        </Button>
                                    </Link>
                                </Typography>
                            </Grid>
                        </>
                    ): (
                      <>
                            <Grid item xs={12} md={6} lg={6} style={{margin: "0% 0% 0% 0%", textAlign: "right"}}>
                                <Typography>
                                    <img className={classes.imageOne} src="Images/Group 5022.png" alt="Group 5022 2"></img>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={3} lg={6} style={{borderLeft: "12px solid #F7B614", padding: "0 0 0 0%"}}>
                                <Typography  className={`${classes.fonts} ${classes.sectionHead}`}>
                                    We Are Amazing Bundled in Affordable <span style={{color: "#F7B614"}}>RATES</span>
                                </Typography>
                                <Typography paragraph={true} className={`${classes.fonts} ${classes.secDescription}`}>
                                <Link to="/" className={classes.links}>
                                        <Button variant="outlined" fullWidth={true}
                                            className={classes.Btn} 
                                            type="button">
                                            View Rates
                                        </Button>
                                    </Link>
                                </Typography>
                            </Grid>
                      </>
                    )}
                </Grid>
            </Container>
        </>
    )
}
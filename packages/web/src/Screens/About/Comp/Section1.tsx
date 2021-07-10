import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme} from '@material-ui/core';
//import icons
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from "@material-ui/icons/Instagram";

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        heroText1: {
            fontSize: '6vh',
            fontWeight: 700,
            paddingTop: "10%",
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
        heroSocialIcons: {
            paddingTop: "10%",
            paddingBottom: "5%"
        },
        heroTextMargin: {
            marginLeft: "auto",
            marginRight: "auto",
        }
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
                        <Typography align="center" className={classes.heroText2}>
                            Each day, we serve multiple <br/>
                            consumers, merchants, riders and <br />
                            drivers on Urged.
                        </Typography>
                    </Grid>
                </Grid>
                <Typography align="center" className={classes.heroTruckIcon}>
                    <img src="Images/yellowtruckIconImage.svg" alt="truck icon"/>
                </Typography>
                <Typography align="center" className={classes.heroSocialIcons}>
                    <Twitter />
                    <Facebook />
                    <Instagram />
                </Typography>
            </Container>
        </>
    )
}
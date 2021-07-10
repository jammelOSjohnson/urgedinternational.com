import React from 'react';
//import CSS
import { Container, Typography, makeStyles, createStyles, Theme, Box } from '@material-ui/core';
import { Twitter, Facebook, Instagram } from '@material-ui/icons';
interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        heroContent: {
            fontSize: '55px',
        },
        heroSubContent: {
            fontSize: '55px',
            color: "#F7B614",
        },
        heroBackground: {
            backgroundImage: "url(Images/AboutUsHeroImage.jpg)",
            padding: 0,
            color: "#FFFFFF",
        },
    }),
);

export const Section1: React.FC = function Section1() {
    const classes = useStyles();
    return (
        <>
            {/*  */}
            <Container maxWidth="xl" className={classes.heroBackground}>
                <Typography className={classes.heroContent} align="center">
                    Enjoy Hassle Free 
                    <Typography className={classes.heroContent}>
                        <span className={classes.heroSubContent}>Urged</span>  Services
                    </Typography>
                </Typography>
                <Typography align="center">
                    Each day, we serve multiple <br/>
                    consumers, merchants, riders and <br />
                    drivers on Urged.
                </Typography>
                <Box component="span">
                    <Twitter />
                    <Facebook />
                    <Instagram />
                </Box>
            </Container>
        </>
    )
}
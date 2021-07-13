import { Box, Container, Grid, Typography, makeStyles, Theme, createStyles } from '@material-ui/core'
import React from 'react'

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            // justifyContent: "center",
            height: "633px",
        },
        s2Background: {
            background: "#FFFFFF",
            padding: 0,
        },
        s2Heading: {
            color: "#F7B614",
            fontSize: "40px",
            fontWeight: 700,
        },
        s2Span: {
            color: "#000000",
        },
        yellowBar1:{
            width: "3px",
            height: "134px",
            background: "#F7B614",
            transform: "rotate(90deg)",
        },
        yellowBar2: {
            height: "101px",
            width: "2px",
            background: '#F7B614',
            transform: "rotate(-180deg)",
        },
        Typo2: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            color: "#3F3F50",
            marginLeft: 155,
        },
        Typo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: 155,
            color: "#1D2635"
        },
        // Button: {
        //         backgroundColor: "#FAFAFA",
        //         border: "1.21951px solid #F7B614",
        //         height: 41,
        //         width: 171,
        //         borderRadius: 36,
        //         color: "#F7B614",
        //     },
    }),
);

export const Section2: React.FC = function Section2() {
    const classes = useStyles();
    return (
     <>
        <Grid container spacing={2} className={classes.root} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h1" className={classes.s2Heading}>We Deliver,<span className={classes.s2Span}>You Enjoy.</span></Typography>
            </Grid>
            <Grid item xs={12}>
                <img className={classes.yellowBar1}></img>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography paragraph={true} className={classes.Typo2}>Our customers come first. We provide quality delivery and errand services to ease their everyday lives.</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <img className={classes.yellowBar2}></img>
                <Typography variant="h2" className={classes.Typo3}>Ease your everyday life, by allowing us to take care of all your errands and delivery services for you.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={6} md={3}>
                    <Typography>We are reliable, so you can always count on us.</Typography>
                    <Typography>Where ever you are, we got you covered. Speed is our priority</Typography>
                    <Typography>We will take care of all your delivery and errand needs for you,</Typography>
                    <Typography>We provide quality services, and will never let you down.</Typography>
                </Grid>            
            </Grid>
        </Grid>
     </>
    )
}
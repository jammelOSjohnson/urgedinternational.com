import { makeStyles, createStyles,Theme, Container, Grid, Typography, Icon } from '@material-ui/core';
import {  } from '@material-ui/core';
import React from 'react'

interface Props {
    
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: "#E5E5E5",
            height: 644,
        },
        fonts: {
            fontFamily: "Open Sans",
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
            letterSpacing: "0em"
        },
        imageOne:{
            paddingRight: "60px",
        },
        rectangle:{
            marginRight: "0"
        },
        
    }),
);

export const Section6: React.FC = function Section6() {
    const classes = useStyles();

    return (
        <>
                <Grid container spacing={3} direction="row" alignContent="center" alignItems="center" className={classes.root}>
                    <Grid item md={3}></Grid>
                    <Grid item xs={12} md={3} direction="row">
                    <Typography>
                                <img className={classes.imageOne} src="Images/Group 502.svg"></img>
                                <img className={classes.rectangle} src="Images/Rectangle 101.svg"></img>
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography className={`${classes.fonts} ${classes.sectionHead}`}>
                            Our Website is en Route
                        </Typography>
                        <Typography paragraph={true} className={`${classes.fonts} ${classes.secDescription}`}>
                            Our Consumers look forward to quality delivery and errand services to ease their everyday lives, while merchants and drivers get access to greater earning opportunities because of our growing consumer base. In fact, we are proud that we have delivery-partners that got their very first earning opportunities with Urged.
                        </Typography>
                    </Grid>
                    <Grid item md={1}></Grid>
                </Grid>
        </>
    )
};
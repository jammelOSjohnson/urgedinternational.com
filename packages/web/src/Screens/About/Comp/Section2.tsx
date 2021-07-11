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
            paddingTop: "8%",
        },
        s2Span: {
            color: "#000000",
        }
        // Typo2: {
        //     textAlign: "center",
        //     color: "#FFFFFF",
        //     fontSize: "48px",
        //     fontWeight: "bold",
        //     paddingBottom: "2.5%",
        // },
        // Typo3: {
        //     textAlign: "center",
        //     color: "#F7B614",
        //     fontSize: "30px",
        //     fontWeight: "bold",
        //     paddingBottom: "2.5%",
        // },
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
        <Container className={classes.root}>
            <Grid xs={12}>
                    <Typography className={classes.s2Heading}>We Deliver,<span className={classes.s2Span}>You Enjoy.</span></Typography>
                    <Typography>Our customers come first. We provide quality delivery and errand services to ease their everyday lives.</Typography>
                    <Typography>Ease your everyday life, by allowing us to take care of all your errands and delivery services for you.</Typography>
                    <Typography>We are reliable, so you can always count on us.</Typography>
                    <Typography>Where ever you are, we got you covered. Speed is our priority</Typography>
                    <Typography>We will take care of all your delivery and errand needs for you,</Typography>
                    <Typography>We provide quality services, and will never let you down.</Typography>
            </Grid>
        </Container>
     </>
    )
}
import React, { useState } from 'react';
//import CSS
import { Container, Typography, makeStyles, createStyles, Theme, Accordion, AccordionSummary, AccordionDetails, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        heroText1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            paddingTop: "5%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroText2: {
            fontSize: '20px',
            fontWeight: 400,
            paddingTop: "2%",
            paddingBottom: "2%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroText3: {
            fontSize: '1.7rem',
            fontWeight: 700,
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroText4: {
            fontSize: '20px',
            fontWeight: 400,
            paddingTop: "2%",
            paddingBottom: "2%",
            textAlign: "center",
            fontFamily: "Inter"
        },
        heroSubText: {
            fontSize: '6vh',
            color: "#F7B614",
        },
        heroBackground: {
            background: "#F9FAFB",
            padding: 0,
        },
        heroBackground2: {
            padding: "0 0 1% 0",
            background: "#F9FAFB"
        },
        heroBackground2Inner: {
            marginTop: "0%",
            padding: "0 0 0% 0",
            background: "#FFFFFF",
            width: "90%",
            borderRadius: "16px" 
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
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: 500,
        },
        accord: {
            width: "70%", 
            marginLeft: "auto", 
            marginRight: "auto",
            borderLeft: 0,
            borderRight: 0,
            background: "#F9FAFB"
        },
        btn: {
            color: "#FFFFFF",
            backgroundColor: "#F7B614",
            borderRadius: "46px"
        },
        links: {
            textDecoration: "none"
        }
    }),
);

export const Section7: React.FC = function Section7() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground2}>
                <Container maxWidth="lg" className={classes.heroBackground2Inner}>
                    <Typography className={classes.heroText3}>
                        Sign up to get started
                    </Typography>
                    <Typography className={classes.heroText4}>
                        Join us today and get your first package delivered <span style={{color: "#F7B614"}}>FREE!</span>
                    </Typography>
                    <a href="/Register" title="Register" className={classes.links}>
                        <Typography style={{textAlign: "center"}}>
                            <Button className={classes.btn}>
                                Get Started
                            </Button>
                        </Typography>
                    </a>
                </Container>
            </Container>
        </>
    )
}
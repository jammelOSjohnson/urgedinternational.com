import React from 'react';
//import CSS
import { Container, Typography, makeStyles, createStyles, Theme, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
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

export const Section7: React.FC = function Section7() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <Typography className={classes.heroText1}>
                    Frequently asked questions
                </Typography>
                <Typography className={classes.heroText2}>
                    Everything you need to know about the product and billing.
                </Typography>
                
            </Container>
        </>
    )
}
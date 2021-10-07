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
            paddingTop: "15%",
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
            backgroundImage: "url(Images/happy-african.png)",
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

export const Section3: React.FC = function Section3() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
            <div style={{height: "669px"}}>
                <Typography variant="h5" style={{paddingLeft: "5%", paddingTop: "10%"}}>
                    Stay Home,
                </Typography>
                <Typography variant="h3" style={{paddingLeft: "5%", paddingTop: "3%"}}>
                    We Got You Covered
                </Typography>
            </div>
                
            </Container>
        </>
    )
}
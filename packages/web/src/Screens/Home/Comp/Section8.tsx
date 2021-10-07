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

export const Section8: React.FC = function Section8() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl">
                <div style={{textAlign: "center"}}>
                    <Typography variant="h5" style={{color: "#1D2635", marginTop: "5%"}}>
                        Become a Member <span style={{color: "#F7B614"}}>Today</span>
                    </Typography>
                    <img src="Images/PartnershipForm.png" style={{width: "90%", marginTop: "3%", marginBottom: "5%"}} alt="google icon"/>
                </div>
            </Container>
        </>
    )
}
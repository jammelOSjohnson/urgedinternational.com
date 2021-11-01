import React from 'react';
//import CSS
import { Container, Typography, makeStyles, createStyles, Theme} from '@material-ui/core';


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
            backgroundImage: "url(Images/HomeSection7.png)",
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

export const Section7: React.FC = function Section7() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <div style={{textAlign: "center"}}>
                    <img src="Images/Testimonypic.png" style={{width: "90px", height: "90px", marginTop: "5%", marginBottom: "5%"}} alt="google icon"/>
                    <Typography variant="body1" style={{width: "30%", marginLeft: "auto", marginRight: "auto", marginBottom: "3%"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat vulputate amet blandit sed vitae ipsum. Est feugiat arcu dui est purus amet quis. Neque imperdiet vitae sed laoreet diam.
                    </Typography>
                    <Typography variant="body1" style={{width: "30%", marginLeft: "auto", marginRight: "auto", paddingBottom: "5%", color: "#F7B614"}}>
                        John Doe
                    </Typography>
                </div>
            </Container>
        </>
    )
}
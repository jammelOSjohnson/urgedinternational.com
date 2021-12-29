import React from 'react';
//import CSS
import { Container, makeStyles, createStyles, Theme, Typography, Grid, useMediaQuery, useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        cardGrid3: {
            padding: "5% 0 10% 0",
            color: "#1D2635",
        },
        excitedGirl: {
            zIndex: -1,
            width: "320px",
            position: "relative",
            bottom: "-115px",
        },
        text1: {
            fontWeight: 600,
            fontSize: "2.5rem",
            fontFamily: "Inter",
            textAlign: "center",
            paddingBottom: "2%"
        },
        text2: {
            fontWeight: 300,
            fontSize: "1.5rem",
            fontFamily: "Inter",
            textAlign: "center",
            paddingBottom: "2%"
        }
    }),
);

export const Section4: React.FC = function Section4() {
    const classes = useStyles();
    const theme = useTheme();
    
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    const isMatch = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Container maxWidth="xl" className={classes.cardGrid3}>
                <Typography>
                    <Typography className={classes.text1}>And many more...</Typography>
                </Typography>
                <Typography>
                    <Typography className={classes.text2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vitae cursus et<br /> euismod tempor. Adipiscing elementum vestibulum in eget
                         enim donec<br /> sed tincidunt.
                    </Typography>
                </Typography>
                <Grid container spacing={0}>
                    {isMatchMedium?
                        <Grid item xs={12} md={6} alignItems="center" alignContent="center">
                            <Typography style={{textAlign: "center"}}>
                                <img src="Images/Samsung Galaxy A50.png" alt="urged phone" />
                            </Typography>
                        </Grid>
                    :
                        <></>
                    }
                    
                    {isMatch?
                        <Grid item xs={12} md={6}>
                            <Typography style={{textAlign: "center"}}>
                                <img src="Images/Logos.png" alt="restaurants" />
                            </Typography>
                        </Grid>
                    :
                        <Grid item xs={12} md={6}>
                            <img src="Images/Logos.png" width="100%" alt="restaurants" />
                        </Grid>
                    }
                    
                </Grid>
            </Container>
        </>
    )
}
import React from 'react';
//import CSS
import { Container, Button, Typography, makeStyles, createStyles, Theme, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        Text1: {
            fontWeight: 500,
            paddingTop: "3%",
            paddingBottom: "3%",
            fontFamily: "Inter",
            color: "#667085",
            textAlign: "center"
        },
        Text2: {
            paddingTop: "3%",
            color: "#F7B614",
            fontWeight: "bold",
            fontFamily: "PT Sans",
        },
        Text3: {
            paddingTop: "3%",
            fontWeight: "bold",
            maxWidth: "620px",
            paddingBottom: "3%",
            fontFamily: "Open Sans",
        },
        heroBackground: {
            backgroundImage: "url(Images/happy-african.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: 0,
            color: "#FFFFFF",
        },
        innerContainer: {
            background: "#F9FAFB",
            paddingBottom: "3%",
        },
        btn: {
            borderRadius: "50px",
            fontFamily: "PT Sans",
        }
    }),
);

export const Section3: React.FC = function Section3() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="xl" className={classes.heroBackground}>
                <div className={classes.innerContainer}>
                   <Typography>
                       <Typography className={classes.Text1}>
                            Our services are entensible to over 100+ companies
                       </Typography>
                   </Typography>
                   <Grid container  spacing={0}>
                        <Grid item style={{color: "black", marginLeft: "auto", marginRight: "auto"}}>
                                Image1
                        </Grid>
                        <Grid item style={{color: "black", marginLeft: "auto", marginRight: "auto"}}>
                                Image2
                        </Grid>
                        <Grid item style={{color: "black", marginLeft: "auto", marginRight: "auto"}}>
                                Image3
                        </Grid>
                        <Grid item style={{color: "black", marginLeft: "auto", marginRight: "auto"}}>
                                Image4    
                        </Grid>
                        <Grid item style={{color: "black", marginLeft: "auto", marginRight: "auto"}}>
                                Image5  
                        </Grid>
                   </Grid>
                </div>
            </Container>
        </>
    )
}
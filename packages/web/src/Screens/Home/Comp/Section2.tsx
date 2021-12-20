import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Card, CardMedia, CardContent, Button, useMediaQuery, useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0%"
        },
        s2Background: {
            background: "#FFFFFF",
            padding: 0,
        },
        s2Heading: {
            color: "#1D2635",
            fontSize: "55px",
            fontWeight: 600,
            marginTop: "10%",
        },
        s2HeadingMobile: {
            color: "#1D2635",
            fontSize: "2.5rem",
            fontWeight: 600,
            marginTop: "5%",
        },
        s2Span: {
            color: "#000000",
        },
        Typo2: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "150%",
            color: "#667085",
            top: "15px",
            position: "relative",
            paddingBottom: "5%",
            textAlign: "center"
        },
        Typo2Mobile: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "20px",
            lineHeight: "150%",
            color: "#667085",
            top: "15px",
            position: "relative",
            paddingBottom: "5%"
        },
        btn: {
            width: "80%",
            marginBottom: "3%",
            height: "70px",
            justifyContent: "flex-start",
            boxShadow: "-1px 3px 8px rgba(126, 126, 126, 0.14)",
            border: 0,
        },
        btnMobile: {
            width: "80%",
            marginBottom: "3%",
            height: "70px",
            justifyContent: "flex-start",
            textAlign: "center",
            border: 0,
            boxShadow: "-1px 3px 8px rgba(126, 126, 126, 0.14)"
        },
        Typo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: "auto",
            color: "#1D2635",
            borderLeft: "3px solid #F7B614",
            paddingLeft: "5%",
        },
        marginTypo3: {
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "25px",
            lineHeight: "150%",
            marginRight: "auto",
            color: "#1D2635",
            borderLeft: "3px solid #F7B614",
            paddingLeft: "5%",
            marginTop: "20%",
            marginBottom: "5%"
        },
        mainContainer: {
            margin: 0,
            padding: 0,
            //overflowY: "hidden"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "center"
        },
        cardImage: {
            textAlign: "center"
        },
        card: {
            background: "transparent",
            boxShadow: "none"
        },
    }),
);

export const Section2: React.FC = function Section2() {
    const classes = useStyles();
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            {isMatchMedium?
                <Container maxWidth="xl" className={classes.mainContainer}>
                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="flex-start" justifyContent="flex-start">
                        <Grid item xs={12} md={9}>
                            <Typography style={{textAlign: "center"}}>
                                <Typography variant="h2" className={classes.s2Heading}>
                                    No more long line
                                    <br />waiting headaches
                                </Typography>
                            </Typography>
                            <Typography style={{textAlign: "center"}}>
                                <Typography className={classes.Typo2}>
                                    Ease your everyday life, by allowing
                                    <br />us to take care of all your
                                    <br />errands and delivery services for you.
                                    <br />
                                    <br />
                                </Typography>
                            </Typography>
                            <Typography style={{textAlign: "center"}}>
                                <Button 
                                    variant="contained" color="primary"
                                    style={{borderRadius: "56px"}}
                                    endIcon={ <img src="Images/GetStartedIcon.png" style={{width: "50%"}} alt="google icon"/>}  
                                >
                                    Our Services
                                </Button>
                                <br />
                                <br />
                                <br />
                                <br />
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button 
                                variant="outlined" color="default"
                                startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                className={classes.btn}
                                style={{marginTop: "10%"}}
                            >
                                Food Delivery
                            </Button>
                            <Button 
                                variant="outlined" color="default"
                                startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                className={classes.btn}
                            >
                                Package pick-up &amp; Drop-off
                            </Button>
                            <Button 
                                variant="outlined" color="default"
                                startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                className={classes.btn}
                            >
                                Errand solution
                            </Button>
                            <Button 
                                variant="outlined" color="default"
                                startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                className={classes.btn}
                            >
                                Online Grocery Shopping
                            </Button>
                            
                        </Grid>
                    </Grid>
                </Container>
            :
                <></>

            }

            {isMatch?
                <Container maxWidth="xl" className={classes.mainContainer}>
                    <Grid container direction="row" spacing={0} className={classes.root} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={9}>
                            <Typography style={{textAlign:"center"}}>
                                <Typography variant="h2" className={classes.s2HeadingMobile}>
                                    No more long line
                                    <br/> waiting headaches
                                </Typography>
                            </Typography>
                            <br />
                            <Typography style={{textAlign:"center"}}>
                                <Button 
                                    variant="outlined" color="default"
                                    startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                    className={classes.btnMobile}
                                >
                                    Food Delivery
                                </Button>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Button 
                                    variant="outlined" color="default"
                                    startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                    className={classes.btnMobile}
                                >
                                    Package pick-up &amp; Drop-off
                                </Button>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Button 
                                    variant="outlined" color="default"
                                    startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                    className={classes.btnMobile}
                                >
                                    Errand solution
                                </Button>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Button 
                                    variant="outlined" color="default"
                                    startIcon={ <img src="Images/YellowRectangle.png" style={{width: "50%"}} alt="google icon"/>}
                                    className={classes.btnMobile}
                                >
                                    Online Grocery Shopping
                                </Button>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Button 
                                    variant="contained" color="primary"
                                    style={{borderRadius: "56px"}}
                                    endIcon={ <img src="Images/GetStartedIcon.png" style={{width: "50%"}} alt="google icon"/>}  
                                >
                                    Our Services
                                </Button>
                            </Typography>
                            <Typography style={{textAlign:"center"}}>
                                <Typography className={classes.Typo2Mobile}>
                                    Ease your everyday life, by allowing
                                    <br />us to take care of all your errands and delivery services for you.
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            :
                <></>

            }
            
        </>
    )
}
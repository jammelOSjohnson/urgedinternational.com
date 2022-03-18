import { Container, Grid, makeStyles, createStyles, Theme, Typography, CardContent, Card } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
//Import Components
import { Sidebar } from './Comp/Sidebar';
import { HeaderLeft } from './Comp/HeaderLeft';
import { HeaderRight } from './Comp/HeaderRight';
import { useAppData } from '../../Context/AppDataContext';



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)",
            height: "100vh"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
          card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: "20px",
            paddingTop: "10px"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            padding: 0,
            paddingTop: "30px"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#000",
            width: "70%"
        },
        paragraph: {
            width: "70%",
            fontWeight: "normal",
            fontSize: "16px"
        },
        paragraphHeadings: {
            fontWeight: "bold"
        }
    }),
);

export const CargoAndFreight: React.FC = function CargoAndFreight() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { currentUser, userInfo } = value;
    var history = useHistory();

    if(currentUser === undefined){
        history.push("/Dashboard")
    }

    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" xs={12} spacing={0}>
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom className={classes.cardTitle3}>
                                        Shop online then experience safe, convenient &amp; reliable shipping from USA to Jamaica for both personal &amp; commercial purpose. 
                                        <br /><br />We convey by Air and Sea.
                                        </Typography>
                                        <hr />
                                        <Grid container direction="row" xs={12} spacing={0}>
                                            <Grid item xs={12} sm={4}>
                                                <Typography>
                                                    Uship Air Freight Address
                                                </Typography>
                                                <Typography >
                                                    Name:&nbsp; 
                                                    <span style={{color: "#FF5E14"}}>{userInfo.fullName}</span>
                                                </Typography>
                                                <Typography>
                                                    Address 1&nbsp;
                                                    <span>3750 W OAKLAND PARK BLVD</span> 
                                                </Typography>
                                                <Typography>
                                                    Address 2:&nbsp;
                                                    <span>LOC25 US
                                                        <span style={{color: "#FF5E14", textDecoration: "underline"}}>
                                                            MAILBOX NUMBER
                                                        </span>
                                                    </span>
                                                </Typography>
                                                <Typography>
                                                    City:&nbsp;
                                                    <span>Lauderdale Lakes</span> 
                                                </Typography>
                                                <Typography>
                                                    State:&nbsp;
                                                    <span>Florida</span>&nbsp;ZipCode:&nbsp;
                                                    <span>33311</span>
                                                </Typography>
                                                <Typography style={{color: "#FF5E14"}}>
                                                    NB: ADDRESS LINE 2 “LOC25 US__”<br /> 
                                                    MUST BE ADDED AT ALL GIVING TIMES UNLESS PACKAGES WILL BE MISPLACED. 
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Typography>
                                                    UShip Sea Shipping Address
                                                </Typography>
                                                <Typography >
                                                    Name:&nbsp; 
                                                    <span style={{color: "#FF5E14"}}>{userInfo.fullName}</span>
                                                </Typography>
                                                <Typography>
                                                    Address 1&nbsp;
                                                    <span>3489 N.W 19th street</span> 
                                                </Typography>
                                                <Typography>
                                                    Address 2:&nbsp;
                                                    <span>Urged</span>
                                                </Typography>
                                                <Typography>
                                                    City:&nbsp;
                                                    <span>Lauderdale Lakes</span> 
                                                </Typography>
                                                <Typography>
                                                    State:&nbsp;
                                                    <span>Florida</span>&nbsp;ZipCode:&nbsp;
                                                    <span>33311</span>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <hr />
                                        <br />
                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                            How it Works :
                                        </Typography>
                                        <br />
                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                            1. <span className={classes.paragraph}>
                                                Shop at your favorite stores online and send the order to your new US shipping address. Also have friends, business partners or family send packages to your US shipping address.
                                            </span>
                                        </Typography>
                                        <br />
                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                            2. <span className={classes.paragraph}>
                                                We receive your order at our US warehouse and notify you.
                                            </span>
                                        </Typography>
                                        <br />
                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                            3. <span className={classes.paragraph}>
                                                We will send a notification when your package is in Jamaica and ready for delivery.
                                            </span>
                                        </Typography>
                                        <br />
                                        <hr />
                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                            ISLAND WIDE DELIVERY:
                                        </Typography>
                                        <Typography>
                                            When your package arrives, we provide free delivery to your home or office in May Pen and island wide delivery for an affordable fee.
                                        </Typography>
                                        <hr />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
        </>
    );
}

import { Container, Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components

interface Props {
    
}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        gridRoot: {
            padding: "0px",
            width: "100%",
            marginLeft: "0px",
            marginRight: "0px"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        card: {
            display: "flex",
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            paddingLeft: "20px",
            paddingTop: "10px",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.11)",
            borderRadius: "18px",
        },
        cardHeading: {
            fontWeight: "bold",
            fontFamily: "PT Sans"
        },
        cardContent: {
          flexGrow: 1,
          paddingTop: 0
        },
    }),
);

export const OrderFullDetails: React.FC = () => {
    const classes = useStyles();



    return (
        <>
                <Container maxWidth="xl"  className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={8}>
                                <Card style={{marginBottom: "12px"}} className={classes.card}>
                                    <CardMedia >
                                        {/* eslint-disable-next-line */}
                                        <img src="Images/order_placeholder.png" alt="ordered"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography className={classes.cardHeading}>
                                           Details
                                        </Typography>
                                        <Typography>
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                        </Typography><br/>
                                        <Grid container direction="row" spacing={1}>
                                            <Grid item xs={4}>
                                                Order Id
                                                <Typography>
                                                    hdshesdhkfjkhj
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                Order Date
                                                <Typography>
                                                    hdshesdhkfjkhj
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                Status
                                                <Typography>
                                                    Picked up
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <Grid container direction="row" spacing={1}>
                                            <Grid item xs={4}>
                                                Location
                                                <Typography>
                                                    Kingston, Jamaica
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                Cost
                                                <Typography>
                                                    $3,955.00
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                Assigned To
                                                <Typography>
                                                <img src="Images/small_rider_placeholder.png" alt="ordered"></img> Jacob Jones
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{marginBottom: "12px", display: "block", textAlign: "center"}} className={classes.card}>
                                    <CardMedia >
                                        {/* eslint-disable-next-line */}
                                        <img src="Images/rider_placeholder.png" alt="ordered"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <br />
                                        <Typography className={classes.cardHeading}>
                                            Jane Cooper
                                        </Typography>
                                        <br />
                                        <Typography>
                                           Jane@example.com
                                        </Typography>
                                        <br />
                                        <Typography>
                                           + 1 876 888 8888
                                        </Typography>
                                        <br />
                                        <Typography>
                                           Kingston
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
        </>
    );
}

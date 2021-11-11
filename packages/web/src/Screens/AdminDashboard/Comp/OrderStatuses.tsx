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
        card1: {
            display: "flex",
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            paddingLeft: "20px",
            paddingTop: "10px",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.11)",
            borderRadius: "18px",
            borderBottom: "4px solid #FF5E14"
        },
        card2: {
            display: "flex",
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            paddingLeft: "20px",
            paddingTop: "10px",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.11)",
            borderRadius: "18px",
            borderBottom: "4px solid #13ADD1"
        },
        card3: {
            display: "flex",
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            paddingLeft: "20px",
            paddingTop: "10px",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.11)",
            borderRadius: "18px",
            borderBottom: "4px solid #F7B614"
        },
        card4: {
            display: "flex",
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            paddingLeft: "20px",
            paddingTop: "10px",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.11)",
            borderRadius: "18px",
            borderBottom: "4px solid #72C123"
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

export const OrderStatuses: React.FC = () => {
    const classes = useStyles();



    return (
        <>
                <Container maxWidth="xl"  className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={3}>
                                <Card style={{marginBottom: "12px"}} className={classes.card1}>
                                    <CardMedia >
                                        {/* eslint-disable-next-line */}
                                        <img src="Images/ordered_status.png" alt="ordered"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography className={classes.cardHeading}>
                                            Ordered
                                        </Typography>
                                        <Typography>
                                            Selections
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card style={{marginBottom: "12px"}} className={classes.card2}>
                                    <CardMedia >
                                        {/* eslint-disable-next-line */}
                                        <img src="Images/pickedup_status.png" alt="ordered"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography className={classes.cardHeading}>
                                            Picked Up
                                        </Typography>
                                        <Typography>
                                            Selections
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card style={{marginBottom: "12px"}} className={classes.card3}>
                                    <CardMedia >
                                        {/* eslint-disable-next-line */}
                                        <img src="Images/intransit_status.png" alt="ordered"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography className={classes.cardHeading}>
                                            In Transit
                                        </Typography>
                                        <Typography>
                                            Selections
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={3}>
                                <Card style={{marginBottom: "12px"}} className={classes.card4}>
                                    <CardMedia >
                                        {/* eslint-disable-next-line */}
                                        <img src="Images/delivered_status.png" alt="ordered"></img>
                                    </CardMedia>
                                    <CardContent className={classes.cardContent}>
                                        <Typography className={classes.cardHeading}>
                                            Delivered
                                        </Typography>
                                        <Typography>
                                            Selections
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

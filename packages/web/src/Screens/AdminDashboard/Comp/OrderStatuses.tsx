import { useAppData } from '../../../Context/AppDataContext';
import { Container, Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
//Import Components

// interface Props {
    
// }

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

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
        cardDisabled: {
            display: "flex",
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            paddingLeft: "20px",
            paddingTop: "10px",
            boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.11)",
            borderRadius: "18px",
            borderBottom: "4px solid #BEBEBE"
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
        links: {
            textDecoration: "none"
        }
    }),
);

export const OrderStatuses: React.FC = () => {
    const classes = useStyles();
    var history = useHistory();
    var { value }  = useAppData();
    var { orders, changeOrderStatus } = value;
    console.log(history.location.state)
    const orderIndex = history.location.state !== undefined? parseInt(history.location.state.from) : history.push("/Login");
    if(orders.lengh === 0 ){
        history.push("/AdminOrders");
    }
    const [status, setStatus] = useState(orders.lengh > 0 ?orders[orderIndex].OrderStatus: "");

    const handleStatus = async (status) => {
        // setStatus(status);
        var payload = value;
        payload.orders[orderIndex].OrderStatus = status;

        await changeOrderStatus(payload);
    }

    

    useEffect(() => {
        setStatus(orders[orderIndex].OrderStatus);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orders.length > 0 ? orders[orderIndex].OrderStatus: null])

    if(orders.length !== 0 && orderIndex !== undefined){
        return status === "Ordered" && status !== "Picked Up"
               && status !== "In Transit" && status !== "Delivered"  ?
            <>
                    <Container maxWidth="xl"  className={classes.main}>
                        <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                            <Grid container direction="row" spacing={1}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                        className={classes.links} 
                                        onClick={(e) => {e.preventDefault(); handleStatus("Ordered")}}>
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
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Picked Up")}}>
                                        <Card style={{marginBottom: "12px"}} className={classes.cardDisabled}>
                                            <CardMedia >
                                                {/* eslint-disable-next-line */}
                                                <img src="Images/pickedup_status_disabled.png" alt="pickedup"></img>
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
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("In Transit")}}>
                                        <Card style={{marginBottom: "12px"}} className={classes.cardDisabled}>
                                            <CardMedia >
                                                {/* eslint-disable-next-line */}
                                                <img src="Images/intransit_status_disabled.png" alt="intransit"></img>
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
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Delivered")}}>
                                        <Card style={{marginBottom: "12px"}} className={classes.cardDisabled}>
                                            <CardMedia >
                                                {/* eslint-disable-next-line */}
                                                <img src="Images/delivered_status_disabled.png" alt="delivered"></img>
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
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
            </>
    : status === "Picked Up"?
            <>
                    <Container maxWidth="xl"  className={classes.main}>
                        <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                            <Grid container direction="row" spacing={1}>
                                
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Ordered")}}>
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
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Picked Up")}}>
                                        <Card style={{marginBottom: "12px"}} className={classes.card2}>
                                            <CardMedia >
                                                {/* eslint-disable-next-line */}
                                                <img src="Images/pickedup_status.png" alt="pickedup"></img>
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
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("In Transit")}}>
                                        <Card style={{marginBottom: "12px"}} className={classes.cardDisabled}>
                                            <CardMedia >
                                                {/* eslint-disable-next-line */}
                                                <img src="Images/intransit_status_disabled.png" alt="intransit"></img>
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
                                    </a>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Delivered")}}>
                                        <Card style={{marginBottom: "12px"}} className={classes.cardDisabled}>
                                            <CardMedia >
                                                {/* eslint-disable-next-line */}
                                                <img src="Images/delivered_status_disabled.png" alt="delivered"></img>
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
                                    </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
            </>
    : status === "In Transit"?
        <>
                <Container maxWidth="xl"  className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1}>

                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Ordered")}}>
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
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Picked Up")}}>
                                    <Card style={{marginBottom: "12px"}} className={classes.card2}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/pickedup_status.png" alt="pickedup"></img>
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
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("In Transit")}}>
                                    <Card style={{marginBottom: "12px"}} className={classes.card3}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/intransit_status.png" alt="intransit"></img>
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
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Delivered")}}>
                                    <Card style={{marginBottom: "12px"}} className={classes.cardDisabled}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/delivered_status_disabled.png" alt="delivered"></img>
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
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
        </>
        : status === "Delivered"?
        <>
                <Container maxWidth="xl"  className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1}>

                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Ordered")}}>
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
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Picked Up")}}>
                                    <Card style={{marginBottom: "12px"}} className={classes.card2}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/pickedup_status.png" alt="pickedup"></img>
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
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("In Transit")}}>
                                    <Card style={{marginBottom: "12px"}} className={classes.card3}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/intransit_status.png" alt="intransit"></img>
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
                                </a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <a href="javascript()"
                                            className={classes.links} 
                                            onClick={(e) => {e.preventDefault(); handleStatus("Delivered")}}>
                                    <Card style={{marginBottom: "12px"}} className={classes.card4}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/delivered_status.png" alt="delivered"></img>
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
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
        </>
    :
        <></>
    }else{
        return <></>
    }
}

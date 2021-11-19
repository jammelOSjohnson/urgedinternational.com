import { useAppData } from '../../../Context/AppDataContext';
import { Button, Container, Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
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
        Button: {
            backgroundColor: "#13ADD1",
            border: "1.21951px solid #13ADD1",
            height: "41px",
            width: "113px",
            borderRadius: 0,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FFFFFF",
            textTransform: "none"
        },
    }),
);

export const OrderFullDetails: React.FC = () => {
    const classes = useStyles();
    var history = useHistory();
    var { value }  = useAppData();
    var { orders } = value;
    const orderIndex = parseInt(history.location.state.from);
    
    //console.log();
    if(orders.length !== 0 && orderIndex !== undefined){
        const now = new Date(parseInt(orders[orderIndex].OrderDate, 10));
        const estTime = moment.tz(now, "America/Jamaica").format();
        var region = orders[orderIndex].DeliveryAddress.split(',');
        return (
            <>
                    <Container maxWidth="xl"  className={classes.main}>
                        <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                            <Grid container direction="row" spacing={1}>
                                <Grid item xs={8}>
                                    <Card style={{marginBottom: "12px"}} className={classes.card}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img style={{maxWidth: "244.26px"}} src={orders[orderIndex].OrderItems[0].imageName} alt="ordered"></img>
                                            <Grid container direction="row" spacing={1} style={{paddingTop: "7px"}}>
                                                {orders[orderIndex].OrderItems.map((item, index) => (
                                                    index !== 0?
                                                        <Grid item xs={4}>
                                                            <img style={{maxWidth: "73.42px"}} src={item.imageName} alt="ordered"></img>
                                                        </Grid>
                                                        :
                                                        <></>
                                                ))}
                                                <Grid item xs={12}>
                                                    <form>
                                                    <Button type="button" className={classes.Button}>
                                                        <Typography className={`${classes.btnfonts}`}>
                                                            Update Order
                                                        </Typography>
                                                    </Button>
                                                    </form>
                                                </Grid>
                                            </Grid>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Typography className={classes.cardHeading}>
                                            Details
                                            </Typography>
                                            <Typography>
                                            <Grid container direction="row" spacing={1}>
                                                {orders[orderIndex].OrderItems.map((item, index) => (
                                                        <Grid item xs={12}>
                                                            {`
                                                                ${item.itemName}: \n
                                                                ${item.chickenFlavour1 === "Select Flavour"?'':item.chickenFlavour1} 
                                                                ${item.chickenFlavour2 === "Select Flavour"?'':item.chickenFlavour2}
                                                                ${item.drink === "Select Drink"?'':item.drink}
                                                                ${item.otherIntructions}
                                                             `}
                                                        </Grid>
                                                ))}
                                            </Grid>
                                            </Typography><br/>
                                            <Grid container direction="row" spacing={1}>
                                                <Grid item xs={4}>
                                                    Order Id
                                                    <Typography>
                                                        {orders[orderIndex]._id}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    Order Date
                                                    <Typography>
                                                    {estTime}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    Status
                                                    <Typography>
                                                    {orders[orderIndex].OrderStatus}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container direction="row" spacing={1}>
                                                <Grid item xs={4}>
                                                    Location
                                                    <Typography>
                                                        {orders[orderIndex].DeliveryAddress}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    Cost
                                                    <Typography>
                                                    {`$${ parseFloat(orders[orderIndex].OrderTotal).toFixed(2)}`}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    Assigned To
                                                    <Typography>
                                                    <img src="Images/small_rider_placeholder.png" alt="ordered"></img> {orders[orderIndex].Rider}
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
                                            + {orders[orderIndex].AdditionalInfo}
                                            </Typography>
                                            <br />
                                            <Typography>
                                            {region[1]}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
            </>
        );
    }else{
        return history.push("/AdminOrders")
    }
}

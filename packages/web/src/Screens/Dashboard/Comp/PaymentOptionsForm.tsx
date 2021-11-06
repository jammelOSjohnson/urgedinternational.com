import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, Grid, Paper, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {

        },
        formHeading: {
            fontSize: "25px",
            fontWeight: 400,
            lineHeight: "21px",
            color: "#1D2635",
            fontFamily: "Roboto",
        },
        paper: {
            borderRadius: "33px"
        },
        divider: {
            height: "3px"
        },
        form: {
            marginLeft: "5%"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "left",
            position: "relative"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
        OrderResult1: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        OrderResult2: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        button: {
            margin: theme.spacing(1),
            color: "#FFFFFF",
            backgroundColor: "#FF5E14",
            borderRadius: "22px"
        },
    }),
);

export const PaymentOptionsForm: React.FC = function PaymentOptionsForm() {
    const classes = useStyles();

      var { value }  = useAppData();
      var { orders } = value;

      var TotalOrders = orders.length;
      var OrdersInProcess = 0;

    
      
    return (
        <>
             {/* <Card className={classes.card}>
                <CardMedia className={classes.cardImage}>
                    <img src="Images/MediumSpaceShip.png" alt="MediumSpaceShip"></img>
                    <Typography variant="h2" className={classes.OrderResult1}>{TotalOrders}</Typography>
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom className={classes.cardTitle}>
                        Total Orders
                    </Typography>
                </CardContent>
            </Card> */}
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container direction="row" spacing={2} alignItems="center"> 
                        <Grid item xs={12}>         
                            <form className={classes.form}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography>Payment Options</Typography>
                                    <Divider variant="middle" className={classes.divider}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Please select payment method from the list below.</FormLabel>
                                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                            <FormControlLabel
                                            value="Visa"
                                            control={<Radio color="primary" />}
                                            label="Start"
                                            labelPlacement="start"
                                            />
                                            
                                            <FormControlLabel
                                            value="MasterCard"
                                            control={<Radio color="primary" />}
                                            label="Start"
                                            labelPlacement="start"
                                            />
                                            
                                            <FormControlLabel
                                            value="Cash on Delivery"
                                            control={<Radio color="primary" />}
                                            label="Start"
                                            labelPlacement="start"
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container item xs={12}>
                                <FormLabel component="legend">Delivery Address</FormLabel>
                                    <Divider variant="middle" className={classes.divider}/>
                                    <Grid item xs={12}>
                                        <TextField id="street" label="Street" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="town" label="Town" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="parish" label="Parish" variant="outlined" />
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </form>
                        </Grid>                        
                            <Button variant="contained" size="large" className={classes.button}>
                                Checkout
                            </Button>
                    </Grid>
                </Paper>
            </div>      
        </>
    )
}
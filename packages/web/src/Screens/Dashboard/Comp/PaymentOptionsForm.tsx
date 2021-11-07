import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, Grid, Paper, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

interface State {
    DeliveryAddress: string;
    PaymentMethod: string;
    AdditionalInfo: string;
}

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
            borderRadius: "22px",
            width: "95%"
        },
        alert: {
            marginBottom: "5%"
        }
    }),
);

export const PaymentOptionsForm: React.FC = function PaymentOptionsForm() {
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
        DeliveryAddress: '',
        PaymentMethod: 'Cash on Delivery',
        AdditionalInfo: '',
    });

    var { value }  = useAppData();
    var { cartItems, checkoutOrder } = value;
    var history = useHistory();
    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');

    const handleSubmit = async () => {
        try{
            setError('');
            setSuccess('');
            await checkoutOrder(value, cartItems, values).then(() => {
                history.push("/OrderCompleted");
            });
        }catch(e: any) { 
            //console.log(e.message)
            let path = e.message
            let result = path.split("Path")
            setError(result[1]);
        }
    }
      
    return (
        <>
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container direction="row" spacing={2} alignItems="center"> 
                        <Grid item xs={12}>         
                            <form className={classes.form}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h6">Payment Options</Typography>
                                    <Divider variant="middle" className={classes.divider}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Please select payment method from the list below.</FormLabel>
                                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                            <FormControlLabel
                                            value="Visa"
                                            control={<Radio color="primary" />}
                                            label=""
                                            labelPlacement="start"
                                            style={{marginLeft: 0}}
                                            disabled
                                            />
                                            
                                            <img src="Images/visa-logo.png" width="79.14px" height="26px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                            
                                            <FormControlLabel
                                            value="MasterCard"
                                            control={<Radio color="primary" />}
                                            label=""
                                            labelPlacement="start"
                                            disabled
                                            />

                                            <img src="Images/mastercard-logo.png" width="42px" height="32.86px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                            
                                            <FormControlLabel
                                            value="Cash on Delivery"
                                            control={<Radio color="primary" />}
                                            label=""
                                            labelPlacement="start"
                                            />

                                            <img src="Images/cashOnDelivery-logo.png" width="66px" height="33px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="h6">Delivery Address</Typography>
                                        <Divider variant="middle" className={classes.divider}/>
                                        <Typography >Please enter delivery address below.</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="street" label="Street" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="town" label="Town" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="parish" label="Parish" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                        {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                        <Button variant="contained" size="large" className={classes.button} onClick={handleSubmit}>
                                            Checkout
                                        </Button> 
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                        </Grid>     
                    </Grid>
                </Paper>
            </div>      
        </>
    )
}
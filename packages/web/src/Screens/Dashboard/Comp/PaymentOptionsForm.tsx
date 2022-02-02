import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, Grid, Paper, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import addressPI from '../../../Apis/addressPI';

interface State {
    Street: string;
    Town: string;
    ContactNum: string;
    PaymentMethod: string;
    Parish: string;
    lat: any;
    long: any;
}

interface Fee {
    Cost: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            borderRadius: "33px",
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "0.1px dotted",
                marginBottom: "3%",
                borderRadius: "12px"
            },
            "& .MuiSelect-select:$focus": {
                backgroundColor: "inherit",
                color: "#9B9B9B"
            },
            "& .MuiFormLabel-root": {
                fontWeight: 700,
                fontSize: "1.2rem"
            },
            "& .MuiInputLabel-root.Mui-focused":{
                color: "#9B9B9B"
            }
        },
        formHeading: {
            fontSize: "1.5rem",
            fontWeight: "normal",
            lineHeight: "21px",
            color: "#4A4A4A",
            fontFamily: "PT Sans",
            paddingTop: "2%",
            paddingBottom: "2%"
        },
        formSubheading: {
            fontSize: "14px",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            color: "#4A4A4A",
            paddingTop: "5%",
            paddingBottom: "5%",
            fontWeight: "normal"
        },
        paper: {
            borderRadius: "33px"
        },
        divider: {
            height: "3px"
        },
        form: {
            marginLeft: "5%",
            marginRight: "5%",
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
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        },
        fees: {
            fontSize: "14px",
            fontFamily: "PT Sans",
            fontStyle: "normal",
            color: "#4A4A4A",
            fontWeight: 600
        }
    }),
);

export const PaymentOptionsForm: React.FC = function PaymentOptionsForm() {
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
        Street: '',
        Town: '',
        ContactNum: '',
        PaymentMethod: "Cash on Delivery",
        Parish: 'Clarendon',
        lat: null,
        long: null
    });

    //const [isgeoAllowed, setIsGeoAllowed] = useState(false);

    var { value }  = useAppData();
    var { cartItems, checkoutOrder, restaurants, selectedRestaurant, generalLocation, latitude, longitude } = value;
    var history = useHistory();
    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    var [deliveryFee, setdeliveryFee] = useState<Fee>({Cost: "0.00"});
    var [cartItemsSum, setcartItemsSum] = useState<Fee>({Cost: "0.00"});
    var [serviceFee, setserviceFee] = useState<Fee>({Cost: "0.00"});
    var [GCT, setGCT] = useState<Fee>({Cost: "0.00"});
    var [Total, setTotal] = useState<Fee>({Cost: "0.00"});

    const handleSubmit = async () => {
        try{
            setError('');
            setSuccess('');
            values.Street === '' || values.ContactNum === undefined?
                setError('Please enter Street Address')
            :
            values.ContactNum === '' || values.Street === undefined?
                setError('Please enter Contact number')
            :
            await checkoutOrder(value, cartItems, values, deliveryFee, GCT, serviceFee, cartItemsSum, Total).then(() => {
                setValues({
                    Street: '',
                    Town: 'Select Town',
                    ContactNum: '',
                    PaymentMethod: "Cash on Delivery",
                    Parish: 'Clarendon',
                    lat: null,
                    long: null
                });
                history.push("/OrderCompleted");
            });
        }catch(e: any) { 
            //console.log(e.message)
            let path = e.message
            let result = path.split("Path")
            setError(result[1]);
        }
    }

    const handleChange = (event) => {
        //console.log(event.target.name);
        //console.log(event.target.value);
        setValues({...values,[event.target.name]:event.target.value});
    };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(prop);
        //console.log(event.target.value);
        setValues({ ...values, [prop]: event.target.value });
    };

    const getLocation = () => {
        try{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
              } else {
                //alert("Geolocation is not supported by this browser.");
            }
            var location = "";

            // AddGeneralLocation(value, )
        }catch(err){

        }
    }

    const getCoordinates = (position) => {
        // console.log(position);
        setValues({...values, lat: position.coords.latitude, long: position.coords.longitude});
    }

    const reverseGeoCodeCoordinates = () => {
        try{
            addressPI.get(`/json?latlng=${values.lat},${values.long}&key=${process.env.REACT_APP_GEO_API2}`).then((response) => {
                if(response.data !== null){
                    if(response.data.results !== undefined){
                        let resArr = response.data.results;
                        let addressArr = "";
                        resArr.map((item,index) => {
                            if(item.types[0] === "route"){
                                addressArr = item.formatted_address.split(',')
                            }
                        })
                        // resArr[0].formatted_address.split(',');
                        setValues({...values, Street: addressArr[0], Town: addressArr[1]});
                    }
                }
            }).catch((err) => {
    
            });
        }catch(err){

        }
        
    }

    const handleLocationError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
            default:
                break;    
        }
    }

    useEffect(() =>{

        if(values.lat === null && values.long === null){
            getLocation();
        }else{
            reverseGeoCodeCoordinates();
        }

        let delFee = "500";

        //Calc Delivery Fee
        if(delFee !== deliveryFee.Cost && delFee !== "0.00" && delFee !== undefined){
            let newFee:Fee = {
                Cost: delFee
            }
            setdeliveryFee(newFee);
        }

        //Calc cart total
        let cartTotal = 0.00;
        let sidesTotal = 0;

        cartItems.map((item1, index)=>{
            cartTotal = cartTotal + (item1.itemCost * item1.quantity);
            if(item1.side !== "Select Side" && item1.side !== "" && item1.restaurantName === "Kentucky Fried Chicken" && item1.itemCategory !== "Sides"){ //Add || for the other restaurants and add side to the receipt
                let sidePrice = 0
                restaurants[selectedRestaurant].MenuItems.map((item2, index) => {
                    console.log("item name is : " + item2.ItemName + " and item side is " + item1.side);
                    if(item2.ItemName === item1.side){
                        sidePrice = sidePrice + item2.ItemCost
                    }
                })
                sidesTotal =sidesTotal + (sidePrice * item1.quantity);
            }
            cartTotal = cartTotal + sidesTotal; 
        });

        let newcartTotal:Fee = {
            Cost: cartTotal.toString()
        }

        setcartItemsSum(newcartTotal);

        //Calc gct
        let gct = process.env.REACT_APP_GCT?.toString()
        if(gct !== undefined){
            var fetchGCT:number = Number(gct);
            let finalgct = cartTotal * fetchGCT

            let newGCT:Fee = {
                Cost: finalgct.toString()
            }
            setGCT(newGCT);
        }

        //Calc service Fee
        let serviceCharge = process.env.REACT_APP_ServiceFee?.toString()
        if(serviceCharge !== undefined){
            var fetchserviceCharge:number = Number(serviceCharge);
            let finalserviceCharge = cartTotal * fetchserviceCharge

            let newserviceCharge:Fee = {
                Cost: finalserviceCharge.toString()
            }
            setserviceFee(newserviceCharge);
        }

        //Calc grand total
        if(serviceCharge !== undefined && gct !== undefined && cartTotal !== undefined && delFee !== undefined){
            var fetchserviceCharge:number = Number(serviceCharge);
            var fetchGCT:number = Number(gct);
            var fetchDelFee = Number(delFee)

            let finalTotal = cartTotal + fetchserviceCharge + fetchGCT + fetchDelFee

            let newTotal:Fee = {
                Cost: finalTotal.toString()
            }
            setTotal(newTotal);
        }
    },[deliveryFee.Cost,  cartItems, value, values.lat, values.long])
    // generalLocation, values.Town
      
    return (
        <>
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container direction="row" spacing={2} alignItems="center" className={classes.root}> 
                        <Grid item xs={12}>         
                            <form className={classes.form}>
                            <Grid container direction="row" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography className={classes.formHeading}>Payment Options</Typography>
                                    <Divider variant="middle" className={classes.divider}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" style={{width: "100%"}}>
                                        <FormLabel component="legend"><Typography className={classes.formSubheading}>Please select payment method from the list below.</Typography></FormLabel>
                                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                            <Grid container direction="row">
                                                <Grid item xs={12} lg={4}>
                                                    <FormControlLabel
                                                    value="Visa"
                                                    control={<Radio color="primary" />}
                                                    label=""
                                                    labelPlacement="start"
                                                    style={{marginLeft: 0}}
                                                    disabled
                                                    />
                                                    <img src="Images/visa-logo.png" width="79.14px" height="26px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                                </Grid>
                                                <Grid item xs={12} lg={4}>
                                                    <FormControlLabel
                                                    value="MasterCard"
                                                    control={<Radio color="primary" />}
                                                    label=""
                                                    labelPlacement="start"
                                                    disabled
                                                    className="nomarginMobile"
                                                    />
                                                    <img src="Images/mastercard-logo.png" width="42px" height="32.86px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                                </Grid>
                                                <Grid item xs={12} lg={4}>
                                                    <FormControlLabel
                                                    value="Cash on Delivery"
                                                    control={<Radio color="primary" />}
                                                    label=""
                                                    labelPlacement="start"
                                                    checked
                                                    className="nomarginMobile"
                                                    />
                                                    <img src="Images/cashOnDelivery-logo.png" width="66px" height="33px" style={{marginTop: "1%", marginLeft: "2%"}} alt="visa" />
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography className={classes.formHeading}>Delivery Address</Typography>
                                        <Divider variant="middle" className={classes.divider}/>
                                        
                                    </Grid>
                                    {
                                        values.lat && values.long ?
                                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${values.lat},${values.long}&zoom=14&size=600x300&sensor=false&markers=color:orange%7C${values.lat},${values.long}&key=${process.env.REACT_APP_GEO_API}`} style={{width: "100%"}} alt='' />
                                        :
                                        <></>
                                    }
                                    <Grid item xs={12}>
                                        <Typography className={classes.formSubheading}>Please enter delivery address below.</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField placeholder="eg. 123 Silver Close" id="street" label="Enter Street" variant="outlined" value={values.Street} onChange={handleChange2('Street')} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField placeholder="Mineral Heights" id="town" label="Enter Town" variant="outlined" value={values.Town} onChange={handleChange2('Town')} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* <TextField id="parish" style={{border: "none", borderColor: "none"}} label="Parish" variant="outlined" value={values.Parish} disabled  fullWidth/> */}
                                        <input type="text" id="parish" style={{border: "0.1px dotted", borderColor: "#888888", borderRadius: "12px", padding: "18.5px 14px", width: "100%", marginBottom: "3%"}} value={values.Parish} disabled />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="contact" label="Enter Contact #" variant="outlined" value={values.ContactNum} onChange={handleChange2('ContactNum')} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={9}>
                                                <Typography style={{fontFamily: "Inter", fontSize: "14px"}}><span className={classes.fees}>Cart Items:</span> </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography><span>{`$ ${ parseFloat(cartItemsSum.Cost).toFixed(2)}`}</span></Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Typography style={{fontFamily: "Inter", fontSize: "14px"}}><span className={classes.fees}>Delivery Fee:</span> </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography><span>{`$ ${ parseFloat(deliveryFee.Cost).toFixed(2)}`}</span></Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Typography style={{fontFamily: "Inter", fontSize: "14px"}}><span className={classes.fees}>Processing Fee:</span> </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography><span>{`$ ${ parseFloat(serviceFee.Cost).toFixed(2)}`}</span></Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Typography style={{fontFamily: "Inter", fontSize: "14px"}}><span className={classes.fees}>GCT:</span> </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography><span>{`$ ${ parseFloat(GCT.Cost).toFixed(2)}`}</span></Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Typography style={{fontFamily: "Inter", fontSize: "14px"}}><span className={classes.fees}>Total:</span> </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography><span style={{color: "#FF5E14", fontWeight: 600}}>{`$ ${ parseFloat(Total.Cost).toFixed(2)}`}</span></Typography>
                                            </Grid>      
                                        </Grid>
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
            <style>
                {
                    `
                    @media only screen and (max-width: 1279px) {
                        .nomarginMobile {
                            margin-left: 0px;
                        }
                    }
                    `
                }
            </style>      
        </>
    )
}
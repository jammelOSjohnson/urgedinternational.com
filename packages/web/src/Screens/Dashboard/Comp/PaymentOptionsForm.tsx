import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, Grid, Paper, Divider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

interface State {
    Street: string;
    Town: string;
    ContactNum: string;
    PaymentMethod: string;
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
    }),
);

export const PaymentOptionsForm: React.FC = function PaymentOptionsForm() {
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
        Street: '',
        Town: 'Select Town',
        ContactNum: '',
        PaymentMethod: "Cash on Delivery"
    });

    var { value }  = useAppData();
    var { cartItems, checkoutOrder, generalLocation } = value;
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
                    PaymentMethod: "Cash on Delivery"
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
        console.log(event.target.name);
        console.log(event.target.value);
        setValues({...values,[event.target.name]:event.target.value});
    };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(prop);
        console.log(event.target.value);
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() =>{
        if(generalLocation !== "" && generalLocation !== undefined){
            if(generalLocation !== values.Town && values.Town === 'Select Town'){
                setValues({...values, Town: generalLocation});
            }
        }

        let delFee = values.Town === "May Pen Hospital" ?
            process.env.REACT_APP_FEE_MayPenHospital?.toString()
        :
        values.Town === "May Pen" ?
            process.env.REACT_APP_FEE_MayPen?.toString()
        :
        values.Town === "Bushy park" ?
            process.env.REACT_APP_FEE_Bushypark?.toString()
        :
        values.Town === "Bucknor" ?
            process.env.REACT_APP_FEE_Bucknor?.toString()
        :
        values.Town === "Clarendon park" ?
            process.env.REACT_APP_FEE_Clarendonpark?.toString()
        :
        values.Town === "Curatoe Hil" ?
            process.env.REACT_APP_FEE_CuratoeHil?.toString()
        :
        values.Town === "Denbigh" ?
            process.env.REACT_APP_FEE_Denbigh?.toString()
        :
        values.Town === "Four paths" ?
            process.env.REACT_APP_FEE_Fourpaths?.toString()
        :
        values.Town === "Foga Road" ?
            process.env.REACT_APP_FEE_FogaRoad?.toString()
        :
        values.Town === "Glenmuir" ?
            process.env.REACT_APP_FEE_Glenmuir?.toString()
        :
        values.Town === "Halse Hall" ?
            process.env.REACT_APP_FEE_HalseHall?.toString()
        :
        values.Town === "Hartwell Gardens" ?
            process.env.REACT_APP_FEE_HartwellGardens?.toString()
        :
        values.Town === "Hayes corn piece" ?
            process.env.REACT_APP_FEE_Hayescornpiece?.toString()
        :
        values.Town === "Hazard" ?
            process.env.REACT_APP_FEE_Hazard?.toString()
        :
        values.Town === "Inglewood" ?
            process.env.REACT_APP_FEE_Inglewood?.toString()
        :
        values.Town === "Juno Crescent" ?
            process.env.REACT_APP_FEE_JunoCrescent?.toString()
        :  
        values.Town === "Midland Glades" ?
            process.env.REACT_APP_FEE_MidlandGlades?.toString()
        :
        values.Town === "Muirhead Avenue" ?
            process.env.REACT_APP_FEE_MuirheadAvenue?.toString()
        :
        values.Town === "Mineral Heights" ?
            process.env.REACT_APP_FEE_MineralHeights?.toString()
        :
        values.Town === "Osborne Store" ?
            process.env.REACT_APP_FEE_OsborneStore?.toString()
        :
        values.Town === "Paisley" ?
            process.env.REACT_APP_FEE_Paisley?.toString()
        :
        values.Town === "Palmers Cross" ?
            process.env.REACT_APP_FEE_PalmersCross?.toString()
        :
        values.Town === "Race Track" ?
            process.env.REACT_APP_FEE_RaceTrack?.toString()
        :
        values.Town === "Sandy Bay" ?
            process.env.REACT_APP_FEE_SandyBay?.toString()
        :
        values.Town === "Swansea" ?
            process.env.REACT_APP_FEE_Swansea?.toString()
        :
        values.Town === "Toll gate" ?
            process.env.REACT_APP_FEE_Tollgate?.toString()
        :
        values.Town === "Trenton Road" ?
            process.env.REACT_APP_FEE_TrentonRoad?.toString()
        :
        values.Town === "Treadlight" ?
            process.env.REACT_APP_FEE_Treadlight?.toString()
        :
        values.Town === "Twin Palm Estate" ?
            process.env.REACT_APP_FEE_TwinPalmEstate?.toString()
        :
        values.Town === "Vere" ?
            process.env.REACT_APP_FEE_Vere?.toString()
        :
        "0.00";

        //Calc Delivery Fee
        if(delFee !== deliveryFee.Cost && delFee !== "0.00" && delFee !== undefined){
            let newFee:Fee = {
                Cost: delFee
            }
            setdeliveryFee(newFee);
        }

        //Calc cart total
        let cartTotal = 0.00;
        cartItems.map((item, index)=>(
            cartTotal = cartTotal + item.itemCost
        ));

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
    },[deliveryFee.Cost, generalLocation, values.Town])
      
    return (
        <>
            <div>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container direction="row" spacing={2} alignItems="center" className={classes.root}> 
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
                                            checked
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
                                        <TextField id="street" label="Street" variant="outlined" value={values.Street} onChange={handleChange2('Street')} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                            <InputLabel id="demo-simple-select-outlined-label">Town</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={values.Town}
                                                onChange={handleChange}
                                                label="Town"
                                                name="Town"
                                                className={classes.root}
                                            >
                                                <MenuItem value={"Select Town"}>Select Town</MenuItem>
                                                <MenuItem value={"May Pen Hospital"}>May Pen Hospital</MenuItem>
                                                <MenuItem value={"May Pen"}>May Pen</MenuItem>
                                                <MenuItem value={"Bushy park"}>Bushy park</MenuItem>
                                                <MenuItem value={"Bucknor"}>Bucknor</MenuItem>
                                                <MenuItem value={"Clarendon park"}>Clarendon park</MenuItem>
                                                <MenuItem value={"Curatoe Hil"}>Curatoe Hil</MenuItem>
                                                <MenuItem value={"Denbigh"}>Denbigh</MenuItem>
                                                <MenuItem value={"Four paths"}>Four paths</MenuItem>
                                                <MenuItem value={"Foga Road"}>Foga Road</MenuItem>
                                                <MenuItem value={"Glenmuir"}>Glenmuir</MenuItem>
                                                <MenuItem value={"Halse Hall"}>Halse Hall</MenuItem>
                                                <MenuItem value={"Hartwell Gardens"}>Hartwell Gardens</MenuItem>
                                                <MenuItem value={"Hayes corn piece"}>Hayes corn piece</MenuItem>
                                                <MenuItem value={"Hazard"}>Hazard</MenuItem>
                                                <MenuItem value={"Inglewood"}>Inglewood</MenuItem>
                                                <MenuItem value={"Juno Crescent"}>Juno Crescent</MenuItem>
                                                <MenuItem value={"Midland Glades"}>Midland Glades</MenuItem>
                                                <MenuItem value={"Muirhead Avenue"}>Muirhead Avenue</MenuItem>
                                                <MenuItem value={"Mineral Heights"}>Mineral Heights</MenuItem>
                                                <MenuItem value={"Osborne Store"}>Osborne Store</MenuItem>
                                                <MenuItem value={"Paisley"}>Paisley</MenuItem>
                                                <MenuItem value={"Palmers Cross"}>Palmers Cross</MenuItem>
                                                <MenuItem value={"Race Track"}>Race Track</MenuItem>
                                                <MenuItem value={"Sandy Bay"}>Sandy Bay</MenuItem>
                                                <MenuItem value={"Swansea"}>Swansea</MenuItem>
                                                <MenuItem value={"Toll gate"}>Toll gate</MenuItem>
                                                <MenuItem value={"Trenton Road"}>Trenton Road</MenuItem>
                                                <MenuItem value={"Treadlight"}>Treadlight</MenuItem>
                                                <MenuItem value={"Twin Palm Estate"}>Twin Palm Estate</MenuItem>
                                                <MenuItem value={"Vere"}>Vere</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    {/* <Grid item xs={12}>
                                        <TextField id="parish" label="Parish" variant="outlined" fullWidth/>
                                    </Grid> */}
                                    <Grid item xs={12}>
                                        <TextField id="contact" label="Contact #" variant="outlined" onChange={handleChange2('ContactNum')} fullWidth/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography><b>Cart Items:</b> {`$ ${ parseFloat(cartItemsSum.Cost).toFixed(2)}`}</Typography>
                                        <Typography><b>Delivery Fee:</b> {`$ ${ parseFloat(deliveryFee.Cost).toFixed(2)}`}</Typography>
                                        <Typography><b>Service Fee:</b> {`$ ${ parseFloat(serviceFee.Cost).toFixed(2)}`}</Typography>
                                        <Typography><b>GCT:</b> {`$ ${ parseFloat(GCT.Cost).toFixed(2)}`}</Typography>
                                        <Typography><b>Total:</b> {`$ ${ parseFloat(Total.Cost).toFixed(2)}`}</Typography>
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
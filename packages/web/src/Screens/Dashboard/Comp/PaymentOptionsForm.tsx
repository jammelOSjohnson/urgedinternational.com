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
            await checkoutOrder(value, cartItems, values).then(() => {
                setValues({
                    Street: '',
                    Town: 'Select Town',
                    ContactNum: '',
                    PaymentMethod: "Cash on Delivery"
                });
                history.push("/OrderHistory");
            });
        }catch(e: any) { 
            //console.log(e.message)
            let path = e.message
            let result = path.split("Path")
            setError(result[1]);
        }
    }

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    useEffect(() =>{
        if(generalLocation !== "" && generalLocation !== undefined){
            if(generalLocation !== values.Town){
                setValues({...values, Town: generalLocation});
            }
        }

        let delFee = generalLocation === "May Pen Hospital" ?
            process.env.REACT_APP_FEE_MayPenHospital?.toString()
        :
        generalLocation === "May Pen" ?
            process.env.REACT_APP_FEE_MayPen?.toString()
        :
        generalLocation === "Bushy park" ?
            process.env.REACT_APP_FEE_Bushypark?.toString()
        :
        generalLocation === "Bucknor" ?
            process.env.REACT_APP_FEE_Bucknor?.toString()
        :
        generalLocation === "Clarendon park" ?
            process.env.REACT_APP_FEE_Clarendonpark?.toString()
        :
        generalLocation === "Curatoe Hil" ?
            process.env.REACT_APP_FEE_CuratoeHil?.toString()
        :
        generalLocation === "Denbigh" ?
            process.env.REACT_APP_FEE_Denbigh?.toString()
        :
        generalLocation === "Four paths" ?
            process.env.REACT_APP_FEE_Fourpaths?.toString()
        :
        generalLocation === "Foga Road" ?
            process.env.REACT_APP_FEE_FogaRoad?.toString()
        :
        generalLocation === "Glenmuir" ?
            process.env.REACT_APP_FEE_Glenmuir?.toString()
        :
        generalLocation === "Halse Hall" ?
            process.env.REACT_APP_FEE_HalseHall?.toString()
        :
        generalLocation === "Hartwell Gardens" ?
            process.env.REACT_APP_FEE_HartwellGardens?.toString()
        :
        generalLocation === "Hayes corn piece" ?
            process.env.REACT_APP_FEE_Hayescornpiece?.toString()
        :
        generalLocation === "Hazard" ?
            process.env.REACT_APP_FEE_Hazard?.toString()
        :
        generalLocation === "Inglewood" ?
            process.env.REACT_APP_FEE_Inglewood?.toString()
        :
        generalLocation === "Juno Crescent" ?
            process.env.REACT_APP_FEE_JunoCrescent?.toString()
        :  
        generalLocation === "Midland Glades" ?
            process.env.REACT_APP_FEE_MidlandGlades?.toString()
        :
        generalLocation === "Muirhead Avenue" ?
            process.env.REACT_APP_FEE_MuirheadAvenue?.toString()
        :
        generalLocation === "Mineral Heights" ?
            process.env.REACT_APP_FEE_MineralHeights?.toString()
        :
        generalLocation === "Osborne Store" ?
            process.env.REACT_APP_FEE_OsborneStore?.toString()
        :
        generalLocation === "Paisley" ?
            process.env.REACT_APP_FEE_Paisley?.toString()
        :
        generalLocation === "Palmers Cross" ?
            process.env.REACT_APP_FEE_PalmersCross?.toString()
        :
        generalLocation === "Race Track" ?
            process.env.REACT_APP_FEE_RaceTrack?.toString()
        :
        generalLocation === "Sandy Bay" ?
            process.env.REACT_APP_FEE_SandyBay?.toString()
        :
        generalLocation === "Swansea" ?
            process.env.REACT_APP_FEE_Swansea?.toString()
        :
        generalLocation === "Toll gate" ?
            process.env.REACT_APP_FEE_Tollgate?.toString()
        :
        generalLocation === "Trenton Road" ?
            process.env.REACT_APP_FEE_TrentonRoad?.toString()
        :
        generalLocation === "Treadlight" ?
            process.env.REACT_APP_FEE_Treadlight?.toString()
        :
        generalLocation === "Twin Palm Estate" ?
            process.env.REACT_APP_FEE_TwinPalmEstate?.toString()
        :
        generalLocation === "Vere" ?
            process.env.REACT_APP_FEE_Vere?.toString()
        :
        "0.00";

        if(delFee !== deliveryFee.Cost && delFee !== "0.00" && delFee !== undefined){
            let newFee:Fee = {
                Cost: delFee
            }
            setdeliveryFee(newFee);
        }

        // if(serviceFee === "0.00"){
        //     let sum:number = 0.00
        //     cartItems.map((item, index)=> (
        //         sum = sum + item.itemCost
        //     ))
        //     let sFee:string|undefined = process.env.REACT_APP_ServiceFee?.toString()
        //     let fsfee:number = parseFloat(sFee).toFixed(2)
        //     let calcServiceFee:number = sum * fsfee;
        // }
    },[deliveryFee.Cost, generalLocation, values])
      
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
                                        {/* <Typography>Cart Items: $100</Typography> */}
                                        <Typography>Delivery Fee: {`$ ${ parseFloat(deliveryFee.Cost).toFixed(2)}`}</Typography>
                                        {/* <Typography>Service Fee: $100</Typography>
                                        <Typography>GCT: $100</Typography>
                                        <Typography>Total: $100</Typography> */}
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
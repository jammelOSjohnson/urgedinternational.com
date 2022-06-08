import { useAppData } from '../../../Context/AppDataContext';
import { Button, Container, Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, FormControl, Select, MenuItem, Snackbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
//Import Components

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            borderRadius: "33px",
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "none",
                marginBottom: "0%",
                width: "70%"
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
            },
            "& .MuiOutlinedInput-input":{
                padding: "0px 14px 0px 0px"
            }
        },
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
            fontWeight: 700,
            fontFamily: "PT Sans",
            fontSize: "1.5rem"
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
        formControl: {
            margin: theme.spacing(1),
            minWidth: 60,
            marginLeft: "0px"
        },
        boldSubtitle: {
            fontWeight: 700
        }
    }),
);

export const OrderFullDetails: React.FC = () => {
    const classes = useStyles();
    var history = useHistory();
    var { value }  = useAppData();
    var { orders, riders, fetchRiders, UpdateOrder } = value;
    const orderIndex = parseInt(history.location.state.from);
    const [rider, setRider] = useState("");
    const [selectedRider, setSelectedRider] = useState();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    

    const handleChange = (event) => {
        // //console.log(event.target.name);
        // //console.log(event.target.value);
        if(event.target.value !== "Assigned To"){
            setSelectedRider(event.target.value);
            setRider(riders[event.target.value].FirstName);
        }
    };
    
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }

      setOpen(false);
    };

    const handleClose2 = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
  
        setOpen2(false);
      };

    const handleSubmit = async(finalselectedRider, orderIndex) => {
        try{
            setOpen(false);
            setOpen2(false);
            //console.log("trying to see id");
            //console.log(finalselectedRider);
            //console.log(riders[finalselectedRider]);
            if(finalselectedRider !== undefined){
                orders[orderIndex].Rider = riders[finalselectedRider]._id;
                await UpdateOrder(value, orders[orderIndex]).then((res) => {
                    if(res){
                        setOpen(true);
                        setTimeout(()=> {
                            setSelectedRider(undefined);
                            history.push("/DeliveryOrders");
                        }, 5000)
                    }
                })
            }else if(orderIndex !== undefined){
                orders[orderIndex].Rider = orders[orderIndex].Rider._id;
                await UpdateOrder(value, orders[orderIndex]).then((res) => {
                    if(res){
                        setOpen(true);
                        setTimeout(()=> {
                            history.push("/DeliveryOrders");
                        }, 5000)
                    }
                })
            }
            
            
        }catch(err){
            //console.log(err);
            setOpen2(true);
        }
    }

    useEffect(() => {
        try{
            if(rider === "" && orders.length > 0 ) setRider(orders[orderIndex].Rider.FirstName);
            
            if(riders.length === 0){
                fetchRiders(value);
            }
        }catch(err){

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [riders])
    
    ////console.log();
    if(orders.length !== 0 && orderIndex !== undefined){
        const now = new Date(parseInt(orders[orderIndex].OrderDate, 10));
        const estTime = moment.tz(now, "America/Jamaica").format("YYYY-MM-DD h:mm a");
        //var region = orders[orderIndex].DeliveryAddress.split(',');
        var personalInfo = orders[orderIndex].AdditionalInfo.split(' ');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        //var email = '';
        var contactnum = '';
        var fullname = '';

        ////console.log(personalInfo);
        if(personalInfo !== undefined && personalInfo !== null){
            if(personalInfo.length === 4){
                fullname = personalInfo[2]; 
                //+ " " + personalInfo[3];
                //email = personalInfo[1];
                contactnum = personalInfo[0];
            }else if(personalInfo.length === 3){
                fullname = personalInfo[1];
                //+ " " + personalInfo[2];
                //email = personalInfo[0];
            }else{
                //email = personalInfo[0];
            }
        }
        return (
            <>
                    <Container maxWidth="xl"  className={classes.main}>
                        <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                            <Grid container direction="row" spacing={1}>
                                <Grid item xs={12} md={8}>
                                    <Card style={{marginBottom: "12px"}} className={clsx(classes.card, "mobile-display")}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img className={"main-image"} src={orders[orderIndex].OrderItems[0].imageName} alt="ordered"></img>
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
                                                { orders[orderIndex].OrderStatus !== "Not Assigned" && orders[orderIndex].OrderStatus !== "Cancelled"?
                                                    <form>
                                                    <Button type="button" className={clsx(classes.Button, "update-order")} onClick={(e) => {
                                                        selectedRider !== undefined?
                                                            handleSubmit(selectedRider, orderIndex)
                                                        :
                                                            handleSubmit(selectedRider,orderIndex)
                                                        }}>
                                                        <Typography className={`${classes.btnfonts}`}>
                                                            Update Order
                                                        </Typography>
                                                    </Button>
                                                    </form>
                                                    :
                                                    <></>
                                                }
                                                </Grid>
                                            </Grid>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <Typography className={classes.cardHeading}>
                                                Order Details
                                            </Typography>
                                            <Typography>
                                            <Grid container direction="row" spacing={1}>
                                                <Grid item xs={12} md={2}>
                                                    <Typography >
                                                        Restaurant:
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={10}>
                                                    <Typography>
                                                        {orders[orderIndex].Restaurant.FirstName}
                                                    </Typography>
                                                </Grid>
                                                {orders[orderIndex].OrderItems.map((item, index) => (
                                                    <>
                                                        <Grid item xs={12} md={6} key={index}>
                                                            <Typography>
                                                                Order Item {index + 1}:
                                                            </Typography>
                                                            <Typography>
                                                                {`
                                                                    ${item.quantity + ' x ' + item.itemName}
                                                                `}
                                                                <br />
                                                                {`
                                                                    ${item.chickenFlavour1 === "Select Flavour"?'': "Flavours: " + item.chickenFlavour1} 
                                                                    ${item.chickenFlavour2 === "Select Flavour"?'':item.chickenFlavour2}
                                                                `}
                                                                <br />
                                                                {`
                                                                    ${item.drink === "Select Drink"?'':"Drink: " + item.drink}
                                                                `}
                                                                <br />
                                                                {`
                                                                    ${"Side: "}${item.side !== undefined && item.side !== null? item.side : ""}
                                                                `}
                                                                <br />
                                                                {`
                                                                    ${"Instructions: " + item.otherIntructions}
                                                                `}
                                                            </Typography>
                                                        </Grid>
                                                    </>
                                                ))}
                                            </Grid>
                                            </Typography><br/>
                                            <Grid container direction="row" spacing={1}>
                                                <Grid item xs={12} md={4}>
                                                    <Typography className={classes.boldSubtitle}>
                                                        Order ID
                                                    </Typography>
                                                    <Typography>
                                                        {orders[orderIndex]._id}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Typography className={classes.boldSubtitle}>
                                                        Order Date
                                                    </Typography>
                                                    <Typography>
                                                    <img src={"Images/order-details-calendar.png"} alt="calendar" /> 
                                                    &nbsp;<span style={{verticalAlign: "middle"}}>{estTime}</span>
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Typography className={classes.boldSubtitle}>
                                                        Status
                                                    </Typography>
                                                    <Typography>
                                                    {orders[orderIndex].OrderStatus === "Not Assigned"
                                                        ? 
                                                            <b style={{color: "#f50057"}}>REJECTED</b>
                                                        :
                                                        orders[orderIndex].OrderStatus
                                                    }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container direction="row" spacing={1}>
                                                <Grid item xs={12} md={4}>
                                                    <Typography className={classes.boldSubtitle}>
                                                        Pick-Up From
                                                    </Typography>
                                                    <Typography>
                                                        {orders[orderIndex].DeliveryAddress}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <Typography className={classes.boldSubtitle}>
                                                        Order Total
                                                    </Typography>
                                                    <Typography>
                                                    {`$${ parseFloat(orders[orderIndex].OrderTotal).toFixed(2)}`}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <FormControl variant="outlined" className={clsx(classes.formControl, classes.root)} fullWidth>
                                                        {/* <InputLabel id="demo-simple-select-outlined-label">Town</InputLabel> */}
                                                        <Select
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined"
                                                            value="Assigned To"
                                                            onChange={handleChange}
                                                            // label="Town"
                                                            name="rider"
                                                            className={classes.root}
                                                            disabled={true}
                                                        >
                                                            <MenuItem value={"Assigned To"} className={classes.boldSubtitle}>Assigned To</MenuItem>
                                                            {
                                                                riders.map((item, index) => (
                                                                    <MenuItem key={index} value={index}>{item.FirstName}</MenuItem>
                                                                ))
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                    <Typography>
                                                    <img src="Images/small_rider_placeholder.png" alt="ordered"></img> {rider}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Card style={{marginBottom: "12px", display: "block", textAlign: "center"}} className={clsx(classes.card, "user-info")}>
                                        <CardMedia >
                                            {/* eslint-disable-next-line */}
                                            <img src="Images/rider_placeholder.png" alt="ordered"></img>
                                        </CardMedia>
                                        <CardContent className={classes.cardContent}>
                                            <br />
                                            <Typography className={classes.cardHeading}>
                                                Deliver To:
                                            </Typography>
                                            <br />
                                            <Typography>
                                                {fullname}
                                            </Typography>
                                            {/* <br />
                                            <Typography>
                                                {email}
                                            </Typography> */}
                                            <br />
                                            <Typography>
                                            + {contactnum}
                                            </Typography>
                                            <br />
                                            <Typography>
                                            {orders[orderIndex].DeliveryAddress}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Order Updated Successfully.
                        </Alert>
                    </Snackbar>
                    <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                        <Alert onClose={handleClose2} severity="error">
                            Unable to update order at this time.
                        </Alert>
                    </Snackbar>
                    <style>
                        {`
                            .main-image{
                                max-width: 244.26px
                            }

                            @media only screen and (max-width: 480px) {
                                .main-image{
                                    max-width: 100%;
                                }

                                .update-order {
                                    width: 100%;
                                    margin-bottom: 5px;
                                }

                                .mobile-display{
                                    display: block;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                }

                                .user-info{
                                    padding-left: 0px;
                                }
                            }
                        `}
                    </style>
            </>
        );
    }else{
        return history.push("/DeliveryOrders")
    }
}

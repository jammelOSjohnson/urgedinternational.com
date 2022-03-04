import { useAppData } from '../../../Context/AppDataContext';
import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardHeader, Avatar, CardMedia, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
//Import Components
//import { ItemRating } from '../../../Components/ItemRating';
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';



// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

// Phone Number to test
//const phoneNumber = " (876)-888-8888"

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "2% 0% 5% 0%",
            // borderRadius: "22px"
        },
        category: {
            fontWeight: "bold"
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
            height: "185px"
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
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto"
        },
        avatar: {
            width: "33px",
            height: "33px",
            backgroundColor: "#FFFFFF",
            margin: "20% 0% 0% -40%"
          },
        kfcImage: {
            width: "33px",
            height: "33px",
            margin: "0% 0% 14% 8%",
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "50%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        Button: {
            backgroundColor: "#FF5E14",
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        menuImages: {
            borderRadius: "10px"
        },
        link: {
            textDecoration: "none"
        },
        statusDot: {
                height: "10px",
                width: "10px",
                backgroundColor: "#22F810" /*Active*/ ,
                /*backgroundColor: "#F86363", In-Active*/
                borderRadius: "50%",
                display: "inline-block"
        }
    }),
);

export const OrgDetails: React.FC = function OrgDetails(props) {
    const classes = useStyles();
    
    var { value }  = useAppData();
    var { fetchRestaurants, restaurants, viewMenuItems } = value;
    
    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        
    }, [restaurants])

    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
    var history = useHistory();

    var handleSelectedRestaurant = async function(index){
        if(index !== undefined || index !== null){
            //console.log("Index is");
            //console.log(index);
            var payload = value;
            payload.selectedRestaurant = index;
            await viewMenuItems(payload).then(() => {
                history.push("/Menu")
            })
        } 
    }
    if (restaurants.length !== 0){  
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                    {/* Please select from the list of reataurants listed below to see their menu. */}
                </Typography>
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    <Card>
                        <CardContent>
                        <form>
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12} sm={12} >
                                <TextField
                                    id="outlined-multiline-static1"
                                    label="Delivery Address"
                                    multiline
                                    rows={4}
                                    defaultValue={values.DeliveryAddress}
                                    onChange={handleChange2('DeliveryAddress')}
                                    variant="outlined"
                                    placeholder="Enter Address Here"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                    <InputLabel id="demo-simple-select-outlined-label">Payment Method</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={values.PaymentMethod}
                                        onChange={handleChange}
                                        label="Payment Method"
                                        name="PaymentMethod"
                                        className={classes.root}
                                    >
                                        {/* <MenuItem value={"Select Method"}>Select Method</MenuItem> */}
                                        {/* <MenuItem value={"Credit, Visa Debit Or Master Card"}>Credit, Visa Debit Or Master Card</MenuItem> */}
                                        <MenuItem value={"Cash on Delivery"}>Cash on Delivery</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Additionl Info"
                                    multiline
                                    rows={4}
                                    defaultValue={values.AdditionalInfo}
                                    onChange={handleChange2('AdditionalInfo')}
                                    variant="outlined"
                                    placeholder="Enter Additional Info Here"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} >
                                {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} type="button" onClick={handleSubmit}>
                                    Complete Order 
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <DashboardFooter />
                            </Grid>
                        </Grid>
                    </form>
                        </CardContent>
                    </Card>
                </Grid>
            </>
        )
    }else {
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                            Loading...
                </Typography>
            </>
        )
    }
}

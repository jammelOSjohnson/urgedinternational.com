import { useAppData } from "../../../Context/AppDataContext";
import { GeoMap } from "./GeoMap";
import Moment from "moment";
import {
  makeStyles,
  createStyles,
  Typography,
  Theme,
  Grid,
  Paper,
  Divider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@material-ui/core";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import MapContainer from "../MapContainer";
import CheckGps from "./CheckGps";

interface State {
  Street: string;
  Town: string;
  ContactNum: string;
  PaymentMethod: string;
  Parish: string;
  lat: any;
  long: any;
}

interface Payment {
  authenticateTransaction: boolean;
  chargetotal: string;
  checkoutoption: string;
  currency: string;
  hash_algorithm: string;
  hashExtended: string;
  paymentMethod: string;
  responseFailURL: string;
  responseSuccessURL: string;
  sharedsecret: string;
  storename: string;
  timezone: string;
  transactionNotificationURL: string;
  txndatetime: string;
  txntype: string;
}

interface Fee {
  Cost: string;
}

interface checkoutCalc {
  deliveryFee: Fee;
  cartItemsSum: Fee;
  serviceFee: Fee;
  GCT: Fee;
  Total: Fee;
}

interface NoGps {
  open2: boolean;
  errorMessage: string;
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
        borderRadius: "12px",
      },
      "& .MuiSelect-select:$focus": {
        backgroundColor: "inherit",
        color: "#9B9B9B",
      },
      "& .MuiFormLabel-root": {
        fontWeight: 700,
        fontSize: "1.2rem",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#9B9B9B",
      },
    },
    formHeading: {
      fontSize: "1.5rem",
      fontWeight: "normal",
      lineHeight: "21px",
      color: "#4A4A4A",
      fontFamily: "PT Sans",
      paddingTop: "2%",
      paddingBottom: "2%",
    },
    formSubheading: {
      fontSize: "14px",
      fontFamily: "Open Sans",
      fontStyle: "normal",
      color: "#4A4A4A",
      paddingTop: "5%",
      paddingBottom: "5%",
      fontWeight: "normal",
    },
    paper: {
      borderRadius: "33px",
    },
    divider: {
      height: "3px",
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
      position: "relative",
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
      fontWeight: "bold",
    },
    OrderResult2: {
      position: "absolute",
      top: "23%",
      right: "9%",
      color: "#13ADD1",
      fontFamily: "PT Sans",
      fontWeight: "bold",
    },
    button: {
      margin: theme.spacing(1),
      color: "#FFFFFF",
      backgroundColor: "#FF5E14",
      borderRadius: "22px",
      width: "95%",
    },
    paymentbutton: {
      margin: theme.spacing(1),
      color: "#FFFFFF",
      backgroundColor: "#FF5E14",
      borderRadius: "22px",
      width: "95%",
      display: "none",
      "& .MuiButtonBase-root": {
        display: "none",
      },
    },
    alert: {
      marginBottom: "5%",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginLeft: "0px",
    },
    fees: {
      fontSize: "14px",
      fontFamily: "PT Sans",
      fontStyle: "normal",
      color: "#4A4A4A",
      fontWeight: 600,
    },
  })
);

export const PaymentOptionsForm: React.FC = function PaymentOptionsForm() {
  const classes = useStyles();

  const [values, setValues] = React.useState<State>({
    Street: "",
    Town: "",
    ContactNum: "",
    PaymentMethod: "Cash on Delivery",
    Parish: "Clarendon",
    lat: null,
    long: null,
  });

  const [checkoutVals, setCheckoutVals] = React.useState<checkoutCalc>({
    deliveryFee: { Cost: "0.00" },
    cartItemsSum: { Cost: "0.00" },
    serviceFee: { Cost: "0.00" },
    GCT: { Cost: "0.00" },
    Total: { Cost: "0.00" },
  });

  const [payment, setPayment] = React.useState<Payment>({
    authenticateTransaction:
      process.env.REACT_APP_authenticateTransaction === "true" ? true : false,
    chargetotal: "",
    checkoutoption:
      process.env.REACT_APP_checkoutoption !== undefined
        ? process.env.REACT_APP_checkoutoption
        : "",
    currency:
      process.env.REACT_APP_currency_code !== undefined
        ? process.env.REACT_APP_currency_code
        : "",
    hash_algorithm:
      process.env.REACT_APP_hash_algorithm !== undefined
        ? process.env.REACT_APP_hash_algorithm
        : "",
    hashExtended: "",
    paymentMethod: "",
    responseFailURL: "https://urgedservices.com/ShoppingCart",
    responseSuccessURL: "https://urgedservices.com/ShoppingCart",
    sharedsecret:
      process.env.REACT_APP_SECRET !== undefined
        ? process.env.REACT_APP_SECRET
        : "",
    storename:
      process.env.REACT_APP_StoreID !== undefined
        ? process.env.REACT_APP_StoreID
        : "",
    timezone:
      process.env.REACT_APP_timezone !== undefined
        ? process.env.REACT_APP_timezone
        : "",
    transactionNotificationURL: "https://urgedservices.com/ShoppingCart",
    txndatetime: Moment().format("YYYY:MM:DD-HH:mm:ss").toString(),
    txntype:
      process.env.REACT_APP_txntype !== undefined
        ? process.env.REACT_APP_txntype
        : "",
  });

  const [gpsCheck, setgpsCheck] = React.useState<NoGps>({
    open2: false,
    errorMessage: "Please turn on GPS to use Urged Food Delivery.",
  });

  //const [isgeoAllowed, setIsGeoAllowed] = useState(false);

  var { value } = useAppData();
  var {
    cartItems,
    checkoutOrder,
    restaurants,
    selectedRestaurant,
    userInfo,
    createPaymentHash,
  } = value;
  var history = useHistory();
  var [error, setError] = useState("");
  var [success, setSuccess] = useState("");
  var [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (values.Street === "") {
        setError("Please enter Street Address");
        setLoading(false);
      } else if (values.ContactNum.length < 7) {
        setError("Please enter Contact number");
        setLoading(false);
      } else {
        await checkoutOrder(
          value,
          cartItems,
          values,
          checkoutVals.deliveryFee,
          checkoutVals.GCT,
          checkoutVals.serviceFee,
          checkoutVals.cartItemsSum,
          checkoutVals.Total,
          restaurants[selectedRestaurant]._id
        ).then((res) => {
          if (res === null || res === undefined) {
            setValues({
              Street: "",
              Town: "Select Town",
              ContactNum: "",
              PaymentMethod: "Cash on Delivery",
              Parish: "Clarendon",
              lat: null,
              long: null,
            });
            setLoading(false);
            setCheckoutVals({
              deliveryFee: { Cost: "0.00" },
              cartItemsSum: { Cost: "0.00" },
              serviceFee: { Cost: "0.00" },
              GCT: { Cost: "0.00" },
              Total: { Cost: "0.00" },
            });
            history.push("/OrderCompleted");
          } else if (res === "no rider") {
            setError(
              "We are unable to take your order at this time. Please try again in a few minutes."
            );
            setLoading(false);
          }
        });
      }
    } catch (e: any) {
      //console.log(e.message)
      let path = e.message;
      //console.log(path)
      let result = path.split("Path");
      //console.log(result)
      if (result.length > 1) {
        setError(result[1]);
      } else {
        setError("Unable to process your order at this time.");
        //setError(result[0]); //DEBUG ON DEV
      }

      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event.target.name);
    console.log((event.target as HTMLInputElement).name);
    console.log((event.target as HTMLInputElement).value);
    console.log(event.target.value);
    setPayment({
      ...payment,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
    console.log(payment);
  };

  const handleChange2 =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      //console.log(prop);
      //console.log(event.target.value);
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleChange3 =
    (prop: keyof Payment) => (event: React.ChangeEvent<HTMLInputElement>) => {
      //console.log(prop);
      //console.log(event.target.value);
      setPayment({ ...payment, [prop]: event.target.value });
    };

  const hash = () => {
    setError("");
    console.log("about to start");
    const button = document.getElementById("makePayment");
    payment.paymentMethod === ""
      ? setError("Please select payment method.")
      : createPaymentHash(payment).then(function (hashResult) {
          console.log(hashResult.hash);
          setPayment({
            ...payment,
            hashExtended:
              hashResult != null && hashResult !== undefined
                ? hashResult.hash
                : "",
          });
          console.log("about to send payment data");
          button?.click();
        });
    //return hashHex;
  };

  useEffect(() => {
    //Calc Delivery Fee
    let delFee = "";
    if (cartItems.length !== 0) {
      if (
        cartItems[0].restaurantName === "Fyahside" ||
        cartItems[0].restaurantName === "Murray’s Fish & Jerk Hut"
      ) {
        delFee = "800";
      } else {
        delFee = "500";
      }
    }

    //Calc cart total
    let cartTotal = 0.0;
    let sidesTotal = 0;

    cartItems.map((item1, index) => {
      cartTotal = cartTotal + item1.itemCost * item1.quantity;
      if (
        item1.side !== "Select Side" &&
        item1.side !== "" &&
        item1.restaurantName !== "Homar's ROTI & Grill" &&
        item1.restaurantName !== "Popeyes" &&
        item1.restaurantName !== "Elle B Catering And Events" &&
        item1.restaurantName !== "H & T Restaurant" &&
        item1.itemCategory !== "Sides"
      ) {
        //Add || for the other restaurants and add side to the receipt
        let sidePrice = 0;
        restaurants[selectedRestaurant].MenuItems.map((item2, index) => {
          //console.log("item name is : " + item2.ItemName + " and item side is " + item1.side);
          if (item2.ItemName === item1.side) {
            sidePrice = sidePrice + item2.ItemCost;
          }
        });
        sidesTotal = sidesTotal + sidePrice * item1.quantity;
      }
      cartTotal = cartTotal + sidesTotal;
    });

    //Calc gct
    let gct = process.env.REACT_APP_GCT?.toString();
    let finalgct = 0;
    if (gct !== undefined) {
      var fetchGCT: number = Number(gct);
      //console.log(cartTotal)
      var fetchdelFee: number = Number(delFee);
      finalgct = fetchdelFee * fetchGCT;
      //console.log(finalgct);
    }

    //Calc service Fee
    let serviceCharge = process.env.REACT_APP_ServiceFee?.toString();
    let finalserviceCharge = 0;
    if (serviceCharge !== undefined) {
      var fetchserviceCharge: number = Number(serviceCharge);
      finalserviceCharge = cartTotal * fetchserviceCharge;
    }

    //Calc grand total
    //console.log("Calc grand total");
    let finalTotal = 0;
    if (
      serviceCharge !== undefined &&
      gct !== undefined &&
      cartTotal !== undefined &&
      delFee !== undefined
    ) {
      var fetchserviceCharge = finalserviceCharge;
      var fetchDelFee = Number(delFee);

      //console.log(finalgct);
      //console.log(fetchserviceCharge);

      finalTotal = cartTotal + fetchserviceCharge + finalgct + fetchDelFee;
    }

    let newFee: Fee = {
      Cost: delFee,
    };
    //setdeliveryFee(newFee);

    let newcartTotal: Fee = {
      Cost: cartTotal.toString(),
    };

    //setcartItemsSum(newcartTotal);

    let newGCT: Fee = {
      Cost: finalgct.toString(),
    };
    //setGCT(newGCT);

    let newserviceCharge: Fee = {
      Cost: finalserviceCharge.toString(),
    };
    //setserviceFee(newserviceCharge);

    let newTotal: Fee = {
      Cost: finalTotal.toString(),
    };
    //setTotal(newTotal);

    setCheckoutVals({
      deliveryFee: newFee,
      cartItemsSum: newcartTotal,
      GCT: newGCT,
      serviceFee: newserviceCharge,
      Total: newTotal,
    });

    setPayment({ ...payment, chargetotal: finalTotal.toString() });
    if (userInfo.addressLine1 !== "" && userInfo.city !== "") {
      setValues({
        ...values,
        Street: userInfo.addressLine1,
        Town: userInfo.city,
        ContactNum: userInfo.contactNumber,
      });
    }
  }, [cartItems, value]);
  // generalLocation, values.Town

  return (
    <>
      <div>
        <Paper elevation={3} className={classes.paper}>
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="center"
            className={classes.root}
          >
            <Grid item xs={12}>
              <form className={classes.form}>
                <Grid container direction="row" alignItems="center">
                  <Grid item xs={12}>
                    <Typography className={classes.formHeading}>
                      Payment Options
                    </Typography>
                    <Divider variant="middle" className={classes.divider} />
                    {gpsCheck.open2 && (
                      <Typography
                        variant="h5"
                        style={{
                          backgroundColor: "#ff0000",
                          color: "#FFF",
                          fontWeight: "bolder",
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        {gpsCheck.errorMessage}
                      </Typography>
                    )}
                    {/* <MapContainer setLoading={setLoading} setgpsCheck={setgpsCheck} gpsCheck={gpsCheck} /> */}
                    <CheckGps setLoading={setLoading} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" style={{ width: "100%" }}>
                      <FormLabel component="legend">
                        <Typography className={classes.formSubheading}>
                          Please select payment method from the list below.
                        </Typography>
                      </FormLabel>
                      <RadioGroup
                        row
                        id="paymentMethod"
                        aria-label="paymentMethod"
                        name="paymentMethod"
                        defaultValue="top"
                        value={payment.paymentMethod}
                        onChange={handleChange}
                        aria-required={true}
                      >
                        <Grid container direction="row">
                          <Grid item xs={12} lg={4}>
                            <FormControlLabel
                              value="V"
                              control={<Radio color="primary" />}
                              label="Visa"
                              labelPlacement="start"
                              style={{ marginLeft: 0 }}
                            />
                            <img
                              src="Images/visa-logo.png"
                              width="79.14px"
                              height="26px"
                              style={{ marginTop: "1%", marginLeft: "2%" }}
                              alt="visa"
                            />
                          </Grid>
                          <Grid item xs={12} lg={4}>
                            <FormControlLabel
                              value="M"
                              control={<Radio color="primary" />}
                              label="Master"
                              labelPlacement="start"
                              className="nomarginMobile"
                            />
                            <img
                              src="Images/mastercard-logo.png"
                              width="42px"
                              height="32.86px"
                              style={{ marginTop: "1%", marginLeft: "2%" }}
                              alt="mastercard"
                            />
                          </Grid>
                          <Grid item xs={12} lg={4}>
                            <FormControlLabel
                              value="Cash on Delivery"
                              control={<Radio color="primary" />}
                              label="Cash"
                              labelPlacement="start"
                              className="nomarginMobile"
                            />
                            <img
                              src="Images/cashOnDelivery-logo.png"
                              width="66px"
                              height="33px"
                              style={{ marginTop: "1%", marginLeft: "2%" }}
                              alt="cash"
                            />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    style={{
                      display:
                        payment.paymentMethod !== "Cash on Delivery"
                          ? "flex"
                          : "none",
                    }}
                  >
                    <Grid item xs={12}>
                      <Divider variant="middle" className={classes.divider} />
                      <form
                        method="POST"
                        action={process.env.REACT_APP_payment_url}
                      >
                        {/* <Grid item xs={5}>
                          <input
                            type="hidden"
                            name="authenticateTransaction"
                            value={
                              payment.authenticateTransaction ? "true" : "false"
                            }
                            onChange={handleChange3("authenticateTransaction")}
                          />
                        </Grid> */}
                        <Grid item xs={5}>
                          <input
                            type="hidden"
                            name="chargetotal"
                            value={payment.chargetotal}
                            onChange={handleChange3("chargetotal")}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="checkoutoption"
                            value={payment.checkoutoption}
                            onChange={handleChange3("checkoutoption")}
                            type="hidden"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="currency"
                            value={payment.currency}
                            onChange={handleChange3("currency")}
                            type="hidden"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="hash_algorithm"
                            value={payment.hash_algorithm}
                            onChange={handleChange3("hash_algorithm")}
                            type="hidden"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="hashExtended"
                            value={payment.hashExtended}
                            onChange={handleChange3("hashExtended")}
                            type="hidden"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="paymentMethod"
                            value={payment.paymentMethod}
                            onChange={handleChange3("paymentMethod")}
                            type="hidden"
                          />
                        </Grid>
                        {/* <Grid item xs={5}>
                          <input
                            name="responseFailURL"
                            value={payment.responseFailURL}
                            onChange={handleChange3("responseFailURL")}
                            type="hidden"
                          />
                        </Grid> */}
                        {/* <Grid item xs={5}>
                          <input
                            name="responseSuccessURL"
                            value={payment.responseSuccessURL}
                            onChange={handleChange3("responseSuccessURL")}
                            type="hidden"
                          />
                        </Grid> */}
                        {/* <Grid item xs={5}>
                          <input
                            name="sharedsecret"
                            value={payment.sharedsecret}
                            onChange={handleChange3("sharedsecret")}
                            type="hidden"
                          />
                        </Grid> */}
                        <Grid item xs={5}>
                          <input
                            name="storename"
                            value={payment.storename}
                            onChange={handleChange3("storename")}
                            type="hidden"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="timezone"
                            value={payment.timezone}
                            onChange={handleChange3("timezone")}
                            type="hidden"
                          />
                        </Grid>
                        {/* <Grid item xs={5}>
                          <input
                            name="transactionNotificationURL"
                            value={payment.transactionNotificationURL}
                            onChange={handleChange3(
                              "transactionNotificationURL"
                            )}
                            type="hidden"
                          />
                        </Grid> */}
                        <Grid item xs={5}>
                          <input
                            name="txndatetime"
                            value={payment.txndatetime}
                            onChange={handleChange3("txndatetime")}
                            type="hidden"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <input
                            name="txntype"
                            value={payment.txntype}
                            onChange={handleChange3("txntype")}
                            type="hidden"
                          />
                        </Grid>
                        <div style={{ display: "none" }}>
                          <Button
                            id="makePayment"
                            type="submit"
                            variant="contained"
                            size="large"
                            className={classes.paymentbutton}
                            disabled={loading}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography className={classes.formHeading}>
                        Delivery Address
                      </Typography>
                      <Divider variant="middle" className={classes.divider} />
                    </Grid>
                    {userInfo.addressLine1 == "" && userInfo.city == "" ? (
                      <GeoMap setValues={setValues} values={values} />
                    ) : (
                      <></>
                    )}

                    <Grid item xs={12}>
                      <Typography className={classes.formSubheading}>
                        Please enter delivery address below.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="eg. 123 Silver Close"
                        id="street"
                        label="Enter Street"
                        variant="outlined"
                        value={values.Street}
                        onChange={handleChange2("Street")}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Mineral Heights"
                        id="town"
                        label="Enter Town"
                        variant="outlined"
                        value={values.Town}
                        onChange={handleChange2("Town")}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {/* <TextField id="parish" style={{border: "none", borderColor: "none"}} label="Parish" variant="outlined" value={values.Parish} disabled  fullWidth/> */}
                      <input
                        type="text"
                        id="parish"
                        style={{
                          border: "0.1px dotted",
                          borderColor: "#888888",
                          borderRadius: "12px",
                          padding: "18.5px 14px",
                          width: "100%",
                          marginBottom: "3%",
                        }}
                        value={values.Parish}
                        disabled
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="contact"
                        label="Enter Contact #"
                        variant="outlined"
                        value={values.ContactNum}
                        onChange={handleChange2("ContactNum")}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={9}>
                          <Typography
                            style={{ fontFamily: "Inter", fontSize: "14px" }}
                          >
                            <span className={classes.fees}>Cart Items:</span>{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>
                            <span>{`$ ${parseFloat(
                              checkoutVals.cartItemsSum.Cost
                            ).toFixed(2)}`}</span>
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography
                            style={{ fontFamily: "Inter", fontSize: "14px" }}
                          >
                            <span className={classes.fees}>Delivery Fee:</span>{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>
                            <span>{`$ ${parseFloat(
                              checkoutVals.deliveryFee.Cost
                            ).toFixed(2)}`}</span>
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography
                            style={{ fontFamily: "Inter", fontSize: "14px" }}
                          >
                            <span className={classes.fees}>
                              Processing Fee:
                            </span>{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>
                            <span>{`$ ${parseFloat(
                              checkoutVals.serviceFee.Cost
                            ).toFixed(2)}`}</span>
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography
                            style={{ fontFamily: "Inter", fontSize: "14px" }}
                          >
                            <span className={classes.fees}>GCT:</span>{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>
                            <span>{`$ ${parseFloat(
                              checkoutVals.GCT.Cost
                            ).toFixed(2)}`}</span>
                          </Typography>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography
                            style={{ fontFamily: "Inter", fontSize: "14px" }}
                          >
                            <span className={classes.fees}>Total:</span>{" "}
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography>
                            <span
                              style={{ color: "#FF5E14", fontWeight: 600 }}
                            >{`$ ${parseFloat(checkoutVals.Total.Cost).toFixed(
                              2
                            )}`}</span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      {error && (
                        <Alert
                          variant="filled"
                          severity="error"
                          className={classes.alert}
                        >
                          {error}
                        </Alert>
                      )}
                      {success && (
                        <Alert
                          variant="filled"
                          severity="success"
                          className={classes.alert}
                        >
                          {success}
                        </Alert>
                      )}
                      <Button
                        type="button"
                        variant="contained"
                        size="large"
                        className={classes.button}
                        onClick={hash}
                        disabled={loading}
                      >
                        {!loading ? "Checkout" : <></>}
                        {loading && (
                          <Box sx={{ textAlign: "center" }}>
                            <CircularProgress />
                          </Box>
                        )}
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
        {`
                    @media only screen and (max-width: 1279px) {
                        .nomarginMobile {
                            margin-left: 0px;
                        }
                    }
                    `}
      </style>
    </>
  );
};

export default PaymentOptionsForm;

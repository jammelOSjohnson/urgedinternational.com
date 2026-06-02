import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAppData } from "../../Context/AppDataContext";
import { Spinner } from "../../Components/spinner";
import { Container, Grid, Theme, Typography, Alert, Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { ShoppingCartItems } from "./Comp/ShoppingCartItems";
import DashboardFooter from "./Comp/DashboardFooter";
import { HeaderRight } from "./Comp/HeaderRight";
import { LiveChatWidget } from "@livechat/widget-react";
const HeaderLeft = React.lazy(() => import("./Comp/HeaderLeft"));
const Sidebar = React.lazy(() => import("./Comp/Sidebar"));

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

interface checkoutCalc {
  deliveryFee: Fee;
  cartItemsSum: Fee;
  serviceFee: Fee;
  GCT: Fee;
  Total: Fee;
}

interface PaymentSession {
  value?: Record<string, unknown>;
  cartItems?: unknown[];
  values?: State;
  checkoutVals?: checkoutCalc;
  restaurants?: unknown[];
  selectedRestaurant?: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridRoot: {
      padding: "0px",
    },
    main: {
      padding: 0,
      backgroundImage: "url(Images/FoodPortalBackground.png)",
      height: "100vh",
    },
  }),
);

export const PaymentProcessScreen: React.FC = function PaymentProcessScreen() {
  const { id } = useParams<{ id: string }>();
  const classes = useStyles();
  const [billingID, setBillingID] = useState<string | undefined>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const submitStarted = useRef(false);
  const { value } = useAppData();
  const {
    cartItems,
    checkoutOrder,
    restaurants,
    selectedRestaurant,
    reinitstate,
    fetchOrderByBillingInfo,
    completeCheckoutWithExistingOrder,
  } = value;
  const history = useHistory();

  const [values, setValues] = useState<State>({
    Street: "",
    Town: "",
    ContactNum: "",
    PaymentMethod: "Cash on Delivery",
    Parish: "Clarendon",
    lat: null,
    long: null,
  });

  const [checkoutVals, setCheckoutVals] = useState<checkoutCalc>({
    deliveryFee: { Cost: "0.00" },
    cartItemsSum: { Cost: "0.00" },
    serviceFee: { Cost: "0.00" },
    GCT: { Cost: "0.00" },
    Total: { Cost: "0.00" },
  });

  const [restoredCartItems, setRestoredCartItems] = useState<unknown[]>([]);
  const [restoredRestaurantIndex, setRestoredRestaurantIndex] = useState(0);

  useEffect(() => {
    if (id === "Fail") {
      setBillingID("Fail");
      return;
    }

    if (id) {
      setBillingID(id);
    }

    const retrievedObject = localStorage.getItem("paymentObject");
    if (!retrievedObject) {
      setError(
        "Your checkout session was not found. Payment was received — please contact support with your billing reference.",
      );
      setSessionReady(true);
      return;
    }

    try {
      const finalRetObj = JSON.parse(retrievedObject) as PaymentSession;
      if (!finalRetObj?.values || !finalRetObj?.checkoutVals) {
        throw new Error("Invalid payment session");
      }

      setValues(finalRetObj.values);
      setCheckoutVals(finalRetObj.checkoutVals);
      setRestoredCartItems(
        Array.isArray(finalRetObj.cartItems) ? finalRetObj.cartItems : [],
      );
      setRestoredRestaurantIndex(
        typeof finalRetObj.selectedRestaurant === "number"
          ? finalRetObj.selectedRestaurant
          : 0,
      );

      const basePayload = finalRetObj.value ?? {};
      reinitstate({
        ...basePayload,
        cartItems: finalRetObj.cartItems ?? basePayload.cartItems ?? [],
        restaurants:
          finalRetObj.restaurants ?? basePayload.restaurants ?? [],
        selectedRestaurant:
          finalRetObj.selectedRestaurant ?? basePayload.selectedRestaurant,
      });
      setSessionReady(true);
    } catch (parseError) {
      console.error("Failed to restore payment session", parseError);
      setError(
        "Unable to restore your order details after payment. Please contact support.",
      );
      setSessionReady(true);
    }
  }, [id, reinitstate]);

  const activeCartItems =
    cartItems.length > 0 ? cartItems : restoredCartItems;
  const activeRestaurantIndex =
    restaurants.length > 0 ? selectedRestaurant : restoredRestaurantIndex;

  const handleSubmit = useCallback(async () => {
    if (submitStarted.current) {
      return;
    }
    submitStarted.current = true;

    try {
      setLoading(true);
      setError("");

      if (!billingID || billingID === "Fail") {
        setError("Payment was not approved.");
        setLoading(false);
        submitStarted.current = false;
        return;
      }

      if (values.Street === "") {
        setError("Please enter Street Address");
        setLoading(false);
        submitStarted.current = false;
        return;
      }
      if (values.ContactNum.length < 7) {
        setError("Please enter Contact number");
        setLoading(false);
        submitStarted.current = false;
        return;
      }

      if (activeCartItems.length === 0) {
        setError(
          `Your cart could not be restored. Payment reference: ${billingID}. Please contact support.`,
        );
        setLoading(false);
        submitStarted.current = false;
        return;
      }

      const restaurantList = restaurants;
      const restaurant = restaurantList[activeRestaurantIndex];
      if (!restaurant?._id) {
        setError(
          `Restaurant information is missing. Payment reference: ${billingID}. Please contact support.`,
        );
        setLoading(false);
        submitStarted.current = false;
        return;
      }

      const existingOrder = await fetchOrderByBillingInfo(billingID);
      let result;
      if (existingOrder) {
        result = await completeCheckoutWithExistingOrder(
          value,
          values,
          existingOrder,
        );
      } else {
        result = await checkoutOrder(
          value,
          activeCartItems,
          values,
          checkoutVals.deliveryFee,
          checkoutVals.GCT,
          checkoutVals.serviceFee,
          checkoutVals.cartItemsSum,
          checkoutVals.Total,
          restaurant._id,
          billingID,
        );
      }

      if (result?.ok) {
        localStorage.removeItem("paymentObject");
        history.push("/OrderCompleted");
        return;
      }

      const billingHint = result?.billingId ?? billingID;
      console.error("Post-payment checkout failed", {
        billingId: billingHint,
        reason: result?.reason,
      });
      setError(
        result?.reason ??
          `We received your payment but could not finalize the order. Reference: ${billingHint}. Please contact support.`,
      );
      setLoading(false);
      submitStarted.current = false;
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Unknown error";
      console.error("Post-payment checkout error", { billingID, message });
      setError(
        `Unable to process your order. Payment reference: ${billingID}. Please contact support.`,
      );
      setLoading(false);
      submitStarted.current = false;
    }
  }, [
    activeCartItems,
    activeRestaurantIndex,
    billingID,
    checkoutOrder,
    checkoutVals,
    completeCheckoutWithExistingOrder,
    fetchOrderByBillingInfo,
    history,
    restaurants,
    value,
    values,
  ]);

  useEffect(() => {
    if (
      !sessionReady ||
      !billingID ||
      billingID === "Fail" ||
      error !== "" ||
      loading
    ) {
      return;
    }

    if (
      values.Street !== "" &&
      values.ContactNum.length >= 7 &&
      (restaurants.length > 0 || restoredCartItems.length > 0)
    ) {
      void handleSubmit();
    }
  }, [
    sessionReady,
    billingID,
    values.Street,
    values.ContactNum,
    restaurants.length,
    restoredCartItems.length,
    error,
    loading,
    handleSubmit,
  ]);

  if (billingID === "Fail") {
    return (
      <>
        <Sidebar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              spacing={0}
              className={classes.gridRoot}
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.main}
              >
                <Grid item xs={8} style={{ marginBottom: "1%", marginTop: "1%" }}>
                  <HeaderLeft />
                </Grid>
                <Grid item xs={4} style={{ marginBottom: "1%", marginTop: "1%" }}>
                  <HeaderRight />
                </Grid>
                <Grid item xs={12}>
                  <ShoppingCartItems Fail={true} />
                </Grid>
                <Grid item xs={12}>
                  <DashboardFooter />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Sidebar>
        {import.meta.env.MODE !== "development" ? (
          <LiveChatWidget
            license={
              import.meta.env.REACT_APP_LIVECHAT_LICENSE !== undefined
                ? import.meta.env.REACT_APP_LIVECHAT_LICENSE
                : ""
            }
          />
        ) : null}
      </>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, maxWidth: 720, margin: "0 auto" }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        {billingID && billingID !== "Fail" ? (
          <Typography variant="body2" color="text.secondary">
            Payment reference: {billingID}
          </Typography>
        ) : null}
      </Box>
    );
  }

  if (loading) {
    return <Spinner />;
  }

  return <Spinner />;
};

export default PaymentProcessScreen;

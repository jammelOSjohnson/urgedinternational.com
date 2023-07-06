import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useAppData } from "../../Context/AppDataContext";
import { Spinner } from "../../Components/spinner";

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

export const PaymentProcessScreen: React.FC = function PaymentProcessScreen() {
  let { id } = useParams();
  const [paymentObject, setPaymentObject] = useState();
  const [billingID, setBillingID] = useState();
  var [error, setError] = useState("");
  var [success, setSuccess] = useState("");
  var [loading, setLoading] = useState(false);
  const { value } = useAppData();
  const {
    cartItems,
    checkoutOrder,
    restaurants,
    selectedRestaurant,
    userInfo,
    createPaymentHash,
    reinitstate,
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

  //console.log(id);
  useEffect(() => {
    const retrievedObject = localStorage.getItem("paymentObject");

    console.log(
      "retrievedObject: ",
      retrievedObject !== null ? JSON.parse(retrievedObject) : "none"
    );
    const finalRetObj =
      retrievedObject !== null ? JSON.parse(retrievedObject) : null;
    setValues(finalRetObj.values);
    setCheckoutVals(finalRetObj.checkoutVals);

    if (restaurants.length === 0) {
      reinitstate(finalRetObj.value);
    }

    console.log(billingID);
    if (
      (billingID === null || billingID === undefined) &&
      id !== null &&
      id !== undefined
    ) {
      console.log(id);
      setBillingID(id);
    }

    if (
      restaurants.length > 0 &&
      billingID !== null &&
      billingID !== undefined
    ) {
      handleSubmit();
    }
  }, [paymentObject, billingID]);

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
          restaurants[selectedRestaurant]._id,
          billingID
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
      console.log(e.message);
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

  return <Spinner />;
};

export default PaymentProcessScreen;

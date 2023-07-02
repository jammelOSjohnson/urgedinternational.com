import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../Components/spinner";

export const PaymentProcessScreen: React.FC = function PaymentProcessScreen() {
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    const retrievedObject = localStorage.getItem("paymentObject");

    console.log(
      "retrievedObject: ",
      retrievedObject !== null ? JSON.parse(retrievedObject) : "none"
    );
  });
  return <Spinner />;
};

export default PaymentProcessScreen;

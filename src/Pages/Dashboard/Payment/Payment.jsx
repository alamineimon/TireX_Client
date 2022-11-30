import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import "./Payment";

const stripePromise = loadStripe(
  "pk_test_51M6QZ6IlSJrakpLcejt8uaFqeGHJhiESRp8lr0jTDGosknsdgyYUAeU5oJpVo4OTYO3jD7DFhaJGE6Lx8huHoUVX00FadybHQK"
);
console.log(loadStripe);
const Payment = () => {
  const booking = useLoaderData();


  return (
    <div className="w-96 mt-7">
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;

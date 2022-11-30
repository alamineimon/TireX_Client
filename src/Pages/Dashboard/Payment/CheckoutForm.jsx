import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const CheckoutForm = ({ booking }) => {
    const { sellingPrice, product_name, email, _id } = booking;
    // const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");


useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      body: JSON.stringify({ sellingPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
        console.log(data.clientSecret);
      });
  }, [sellingPrice]);



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);


    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: product_name,
            email: email,
          },
        },
      });


    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database

      const payment = {
        price: sellingPrice,
        paymentIntent: paymentIntent.id,
        email,
        bookingId: _id,
      };

      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("Congrats..!! Your payment completed");
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
    //   console.log('paymentIntent' , paymentIntent);
  };
  return (
    <div className="mx-auto">
      <form onSubmit={handleSubmit}>
        <h3 className="text-base mb-4">
          Payment for <span className="text-xl">{booking.product_name}</span>
        </h3>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <div className="block w-96 bg-white shadow-lg p-8 rounded-xl">
            <button
              type="submit"
              disabled={!stripe || !clientSecret}
              className="rounded-xl bg-indigo-600 mt-8 block text-center text-white px-4 py-2 text-sm w-full"
            >
              Pay now {booking.sellingPrice}
            </button>
          </div>
        </div>
      </form>
      <p className="text-red-400">{cardError}</p>
      {success && (
        <div>
          <p className="text-blue-500">{success}</p>
          <p>
            Your transactionID:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
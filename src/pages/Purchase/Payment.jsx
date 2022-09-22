import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3iK7LV5ePzXyiL0tZWNCfXmNRNBFKaQVfmK8yKlBODaYo1tHwydDpBWTnyuZMr7cpuSkFSyQNSVpu37rYmT7SM00gQKDTc5y"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://historic-cuyahoga-valley-56137.herokuapp.com/get-orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-24">
      <div className="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">Hello,{} </p>
          <h2 className="card-title">Please Pay for {order?.part} </h2>

          <p>Please pay: ${order?.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

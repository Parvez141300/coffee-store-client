import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { details, name, photo, price, quantity, supplier, taste } =
    useLoaderData();

  return (
    <div className=" my-12 space-y-20">
        <Link to={'/'} className="btn"> Back To Home</Link>
      <div className="flex justify-center items-center gap-5 bg-black/20 py-12 rounded-xl">
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="text-left">
          <h3>Name: {name}</h3>
          <h4>Quantity: {quantity}</h4>
          <h4>Supplier: {supplier}</h4>
          <h4>Taste: {taste}</h4>
          <h4>Details: {details}</h4>
          <h4>Price: {price}</h4>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

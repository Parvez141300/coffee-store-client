import React from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { details, name, photo, price, quantity, supplier, taste, _id } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // update coffee in db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("After update", data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="space-y-5 my-12">
      <Link to={"/"} className="btn">
        {" "}
        Back To Home
      </Link>
      <h2>Update Existing Coffee Details</h2>
      <p>
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleUpdateCoffee} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              required
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Quantity</label>
            <input
              required
              type="number"
              name="quantity"
              defaultValue={quantity}
              className="input w-full"
              placeholder="Quantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Supplier</label>
            <input
              required
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="Supplier Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              required
              type="text"
              name="taste"
              defaultValue={taste}
              className="input w-full"
              placeholder="Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              required
              type="number"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="Price Per Cup"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              required
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">Photo URL</label>
          <input
            required
            type="text"
            name="photo"
            defaultValue={photo}
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;

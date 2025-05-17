import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { photo, name, price, quantity, _id } = coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter(cof => cof._id !== _id);
              setCoffees(remainingCoffees)
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center gap-5 rounded-lg border-2 p-4">
      <figure>
        <img className="w-10/12 h-32 object-cover" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col text-start">
          <h2 className="">Name: {name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="join join-vertical gap-2">
          <Link to={`/coffee/${_id}`} className="btn join-item">
            <FaEye />
          </Link>
          <Link to={`/updatecoffee/${_id}`} className="btn join-item">
            <MdEdit />
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

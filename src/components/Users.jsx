import React, { use, useState } from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Users = () => {
  const { removeUser } = use(AuthContext);
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  console.log(users);

  const handleDelete = (id) => {
    console.log("deleted", id);

    // delete user
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after user delete", data);
        if (data.deletedCount) {
          const remainingUsers = users.filter((u) => u._id !== id);
          setUsers(remainingUsers);
          
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Users Have been Deleted",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Users: {initialUsers.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <button className="btn btn-sm">
                    <FaEye></FaEye>
                  </button>
                  <button className="btn btn-sm">
                    <FaPen></FaPen>
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

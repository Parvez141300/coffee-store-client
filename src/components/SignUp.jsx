import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);

        const userProfile = {
            email,
            ...restFormData,
            creationTime: result?.user?.metadata?.creationTime,
            lastSignInTime: result?.user?.metadata?.lastSignInTime
        }

        // save profile in database
        fetch("https://coffee-store-server-ten-iota.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after profile save", data);
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your was created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen my-12">
      <div className="">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-ful shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                className="input"
                placeholder="Address"
              />
              <label className="label">Phone</label>
              <input
                type="number"
                name="phone"
                className="input"
                placeholder="Phone Number"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

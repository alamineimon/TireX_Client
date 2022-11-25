import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = (props) => {
  const { signInWithGoogle, createUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [signupError, setSignupError] = useState("");
  const [data, setData] = useState("");
     const location = useLocation();
     const navigate = useNavigate();

     const from = location.state?.from?.pathname || "/";
  

   
    //  https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-alamineimon.git
  const handleRegister = (data) => {
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully.");
        const userInfo = {
          displayName: data.name,

        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.type);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignupError(error.message);
      });
  };

  const saveUser = (name, email, type) => {
    const user = { name, email, type };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user ", data);
        navigate("/");
        // setCreateUserEmail(email);
      });
  };

  // const handleRegister = (data) => {
  //   const image = data.image[0];
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   const url = `https://api.imgbb.com/1/upload?key=8ab0829af0fdf06d333782b540e01bbb`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imagData) => {
  //       if (imagData.success) {
  //         const user = {
  //           name: data.name,
  //           email: data.email,
  //           role: data.role,
  //           image: imagData.data.display_url,
  //         };
  //         //save doctor info to database
  //         fetch(`http://localhost:5000/users`, {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //             // authorization: `bearer ${localStorage.getItem(
  //             //   "accessToken"
  //             // )}`,
  //           },
  //           body: JSON.stringify(user),
  //         })
  //           .then((res) => res.json())
  //           .then((result) => {
  //             console.log(result);
  //             toast.success(`User created successfully`);
  //           });
  //       }
  //     });
  // };

  // const handleRegister = (data) => {
  //       createUser(data.email, data.password)
  //         .then((result) => {
  //           const user = result.user;
  //           console.log(user);
  //           toast("User created successfully");
  //           const userInfo = {
  //             displayName: data.name,
  //           };
  //           updateUserProfile(userInfo)
  //             .then(() => {
  //               navigate('/');
  //             })
  //             .catch((err) => console.log(err));
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  // };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="h-[600px] flex flex-col justify-center items-center">
      <div className="w-96 p-8">
        <h2 className="text-4xl text-center">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name Address is required",
              })}
              className="input input-bordered w-full "
            />
            {/* {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )} */}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full "
            />
            {/* {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )} */}
          </div>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              {...register("type")}
              className="select select-bordered w-full max-w-xs">
              <option value='seller'>Seller</option>
              <option value='user'>User</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecter or more",
                },
              })}
              className="input input-bordered w-full"
            />
            {/* {errors.password && (
              <p className="text-red-400">{errors.password?.message}</p>
            )} */}
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>
          </div>
          <input
            className="btn  w-full hover:text-gray-100 bg-blue-600 border-none text-white"
            value="Register"
            type="submit"
          />
          {/* {loginError && <p>{loginError}</p>} */}
        </form>
        <p className="text-m pt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline hover:bg-blue-600 hover:border-white w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;

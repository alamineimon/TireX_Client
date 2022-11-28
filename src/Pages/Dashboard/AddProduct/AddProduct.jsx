import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=8ab0829af0fdf06d333782b540e01bbb`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const product = {
            sellerName: data.sellerName,
            categoryName: data.categoryName,
            describe: data.describe,
            email: data.email,
            img: imgData.data.display_url,
            location: data.location,
            mobile: data.mobile,
            originalPrice: data.originalPrice,
            sellingPrice: data.sellingPrice,
            purchaseYear: data.purchaseYear,
            usedYear: data.usedYear,
            name: data.name,
            condition: data.condition,
          };

          console.log(product);

          // save the product to the mongodb
          fetch("http://localhost:5000/myservices", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: bearer ${localStorage.getItem('accessToken')}
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Product added successfully");
              navigate("/dashboard/myproducts");
            });
        }
      });
  };

  return (
    <div className="w-11/12 p-4 mb-16 ">
      <h3 className="text-4xl mb-8 font-bold text-center">Add a Product</h3>
      {/* form here  */}
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className=" flex w-full">
          {/* seller name  */}
          <div className="form-control w-1/2  mr-5 ">
            <label className="label">
              {" "}
              <span className="label-text"> Seller Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              readOnly
              type="text"
              {...register("sellerName", {
                required: "SellerName is Required",
              })}
              className="input input-bordered  "
            />
            {errors.sellerName && (
              <p className="text-red-500">{errors.seller_name.message}</p>
            )}
          </div>
          {/* product name  */}
          <div className="form-control w-1/2   ">
            <label className="label">
              {" "}
              <span className="label-text">Product name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered  "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="flex w-full">
          {/* seller email  */}
          <div className="form-control w-1/2 mr-5">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              {...register("email", {
                required: true,
              })}
              className="input input-bordered  "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* seller  mobile number  */}
          <div className="form-control w-1/2  ">
            <label className="label">
              {" "}
              <span className="label-text">Mobile</span>
            </label>
            <input
              type="number"
              {...register("mobile", {
                required: true,
              })}
              className="input input-bordered  "
            />
            {errors.mobile && (
              <p className="text-red-500">{errors.mobile.message}</p>
            )}
          </div>
        </div>
        <div className="lg:flex sm:block w-full">
          {/* seller  location  */}
          <div className="form-control lg:w-2/6 sm:w-full  ">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered  "
            />
            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>
          {/* product category  */}
          <div className="form-control lg:w-2/6 sm:w-full lg:mx-5 ">
            <label className="label">
              {" "}
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("categoryName")}
              className="select input-bordered  "
            >
              <option>kawasaki</option>
              <option>ktm</option>
              <option>yamaha</option>
            </select>
          </div>
          {/* product condition  */}
          <div className="form-control lg:w-2/6 sm:w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Product condition</span>
            </label>
            <select
              {...register("condition")}
              className="select input-bordered  "
            >
              <option>Excellent</option>
              <option>Good</option>
            </select>
          </div>
        </div>
        <div className="flex w-full ">
          {/* selling price */}
          <div className="form-control w-1/2 mr-5 ">
            <label className="label">
              {" "}
              <span className="label-text">Selling Price</span>
            </label>
            <input
              type="number"
              {...register("sellingPrice", {
                required: true,
              })}
              className="input input-bordered "
            />
            {errors.sellingPrice && (
              <p className="text-red-500">{errors.sellingPrice.message}</p>
            )}
          </div>
          {/* original price */}
          <div className="form-control w-1/2 ">
            <label className="label">
              {" "}
              <span className="label-text">Original price</span>
            </label>
            <input
              type="number"
              {...register("originalPrice", {
                required: true,
              })}
              className="input input-bordered  "
            />
            {errors.originalPrice && (
              <p className="text-red-500">{errors.originalPrice.message}</p>
            )}
          </div>
        </div>
        <div className="flex w-full">
          {/* purshure year */}
          <div className="form-control w-1/2 mr-5">
            <label className="label">
              {" "}
              <span className="label-text">Purchase year</span>
            </label>
            <input
              type="number"
              {...register("purchaseYear", {
                required: true,
              })}
              className="input input-bordered "
            />
            {errors.purchaseYear && (
              <p className="text-red-500">{errors.purchaseYear.message}</p>
            )}
          </div>
          {/* used Year */}
          <div className="form-control w-1/2 ">
            <label className="label">
              {" "}
              <span className="label-text">Used year</span>
            </label>
            <input
              type="number"
              {...register("usedYear", {
                required: true,
              })}
              className="input input-bordered  "
            />
            {errors.usedYear && (
              <p className="text-red-500">{errors.usedYear.message}</p>
            )}
          </div>
        </div>
        {/* product img  */}
        <div className="form-control w-full  ">
          <label className="label">
            {" "}
            <span className="label-text">Product Photo</span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Product photo is Required",
            })}
            className="input border-solid border-1 py-2 h-16 border-gray-300"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        {/* product details  */}
        <div className="w-full">
          <label className="label">
            {" "}
            <span className="label-text">Product Details</span>
          </label>
          <textarea
            {...register("describe", {
              required: "Product describe is Required",
            })}
            className="textarea textarea-bordered w-full"
            placeholder="Please explain your product describe"
          ></textarea>
        </div>
        <input
          className="btn w-full mt-6 hover:text-gray-100 bg-green-500 hover:bg-blue-600 border-none text-white"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
    const {user}= useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



const handleAddProduct = data =>{
    const image = data.img[0]
    const formData = new FormData();
    formData.append('image', image);
    const url =`https://api.imgbb.com/1/upload?key=8ab0829af0fdf06d333782b540e01bbb`

    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {

      if(imgData.success){


        const product = {
          sellerName: data.sellerName,
          categoryName: data.categoryName,
          describe: data.describe,
          seller_email:data.email,
          img: imgData.data.display_url,
          location: data.location,
          mobile: data.mobile ,
          originalPrice: data.originalPrice,
          sellingPrice: data.sellingPrice,
          purchaseYear: data.purchaseYear,
          usedYear: data.usedYear,
          name: data.name,
          condition: data.condition
        }

        console.log(product);

        // save the product to the mongodb 
        fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        // authorization: bearer ${localStorage.getItem('accessToken')}
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success("Product added successfully")
                    
                })



      }
    })


}

  return (
    <div className="">
      <h3 className="text-3xl font-bold text-center">Add a Product</h3>
      {/* form here  */}
      <div className="lg:flex justify-center mt-5 ">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          {/* seller name  */}
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              readOnly
              type="text"
              {...register("sellerName", {
                required: "SellerName is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.sellerName && (
              <p className="text-red-500">{errors.seller_name.message}</p>
            )}
          </div>

          {/* product name  */}

          <div className="form-control w-full max-w-xs ">
            <label className="label">
              {" "}
              <span className="label-text">Product name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* seller email  */}
          <div className="form-control w-full max-w-xs">
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
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* seller  mobile number  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Mobile</span>
            </label>
            <input
              type="number"
              {...register("mobile", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.mobile && (
              <p className="text-red-500">{errors.mobile.message}</p>
            )}
          </div>

          {/* seller  location  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>

          {/* product category  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("categoryName")}
              className="select input-bordered w-full max-w-xs"
            >
              <option>kawasaki</option>
              <option>ktm</option>
              <option>yamaha</option>
            </select>
          </div>

          {/* product condition  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Product condition</span>
            </label>
            <select
              {...register("condition")}
              className="select input-bordered w-full max-w-xs"
            >
              <option>Excellent</option>
              <option>Good</option>
            </select>
          </div>

          <div className="flex ">
            <div>
              <div className="form-control w-1/2 ">
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
            </div>
            <div>
              {/* original price  */}
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
          </div>

          {/* product purchase year and used year  */}
          <div className="flex ">
            <div>
              <div className="form-control w-1/2 ">
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
            </div>
            <div>
              {/* original price  */}
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
          </div>

          {/* product img  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Product Photo</span>
            </label>
            <input
              type="file"
              {...register("img", {
                required: "Product photo is Required",
              })}
              className="input  w-full max-w-xs"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>

          {/* product details  */}
          <label className="label">
            {" "}
            <span className="label-text">Product Details</span>
          </label>
          <textarea
            {...register("describe", {
              required: "Product describe is Required",
            })}
            className="textarea textarea-bordered w-3/4"
            placeholder="Please explain your product describe"
          ></textarea>
          <input
            className="btn  w-full hover:text-gray-100 bg-green-500 hover:bg-blue-600 border-none text-white"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
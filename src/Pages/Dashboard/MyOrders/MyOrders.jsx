import { async } from "@firebase/util";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import ConfirmationModal from "../../Modal/ConfirmationModal/ConfirmationModal";

const MyOrders = (props) => {
  const { user } = useContext(AuthContext);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [],refetch, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const closeModal = () => {
    setDeleteProduct(null);
  };

  // const handleDelete = product =>{
  //   fetch(`http://localhost:5000/bookings/${product._id}`,{
  //       method: 'DELETE',
  //       headers: {

  //       }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //       if(data.deletedCount > 0){
  //           refetch()
  //           toast.success(`${product?.name} order deleted successfully`)
  //       }
  //   })

  // }

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h1 className="text-3xl text-left mb-4">My Order</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Mobile</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking?.name}</td>
                <td>{booking?.mobile}</td>
                <td>{booking?.product_name}</td>
                <td>{booking?.price}</td>
                <td>{booking.location}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link>
                      <button className="btn border-none hover:bg-green-500 bg-blue-500 btn-sm text-white">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-green-600">Paid</span>
                  )}
                </td>
                <td>
                  <label
                    onClick={() => setDeleteProduct(booking)}
                    htmlFor="confirmation-modal"
                    className="btn border-none bg-red-500 btn-sm text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <ConfirmationModal
          successAction={handleDelete}
          modalData={deleteProduct}
          closeModal={closeModal}
          title={`Are you sure you wanna delete? `}
          message={`If you delete ${deleteProduct.name}.  It cann't be undone`}
        />
      )}
    </div>
  );
};

export default MyOrders;

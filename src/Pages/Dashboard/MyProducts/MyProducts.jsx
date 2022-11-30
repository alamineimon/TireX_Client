import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";

const MyProducts = (props) => {
  const { user } = useContext(AuthContext);
  const url = `https://server-nine-plum.vercel.app/myservices?email=${user?.email}`;
  const { data: myservices = [], isLoading } = useQuery({
    queryKey: ["myservices", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Category Name</th>
            <th>Seller Name</th>
            <th>Mobile</th>
            <th>Price</th>
            <th>Location</th>
            <th>Edite</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myservices.map((myservice, i) => (
            <tr key={myservice._id}>
              <th>{i + 1}</th>
              <td>{myservice?.name}</td>
              <td>{myservice?.sellerName}</td>
              <td>{myservice?.mobile}</td>
              <td>$ {myservice?.sellingPrice}</td>
              <td>{myservice.location}</td>
              <td>Edite</td>

              <td>
                {myservice.price && !myservice.paid && (
                  <Link to={`/dashboard/payment/${myservice._id}`}>
                    <button className="btn border-none hover:bg-green-500 bg-blue-500 btn-sm text-white">
                      Pay
                    </button>
                  </Link>
                )}
                {myservice.price && myservice.paid && (
                  <span className="text-green-600">Paid</span>
                )}
              </td>
              <td>
                <label
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
  );
};

export default MyProducts;

import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../context/AuthProvider';


const MyProducts = (props) => {
     const { user } = useContext(AuthContext);
     const url = `http://localhost:5000/myservices?email=${user?.email}`;
     const {
       data: myservices = [],
       isLoading,
     } = useQuery({
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
       //  <div>
       //    <h1 className="text-3xl text-left mb-4">My Order</h1>
       //    <div className="overflow-x-auto w-full">
       //      <table className="table w-full">
       //        <thead>
       //          <tr>
       //            <th>
       //              <label>
       //                <input type="checkbox" className="checkbox" />
       //              </label>
       //            </th>
       //            <th>Product Name</th>
       //            <th>Category</th>
       //            <th>Mobile</th>
       //            <th>Delete</th>
       //            <th></th>
       //          </tr>
       //        </thead>
       //        <tbody>
       //          <tr>
       //            <th>
       //              <label>
       //                <input type="checkbox" className="checkbox" />
       //              </label>
       //            </th>
       //            <td>
       //              <div className="flex items-center space-x-3">
       //                <div className="avatar">
       //                  <div className="mask mask-squircle w-12 h-12">
       //                    <img
       //                      src={myservices.img}
       //                      alt="Avatar Tailwind CSS Component"
       //                    />
       //                  </div>
       //                </div>
       //                <div>
       //                  <div className="font-bold">{myservices.sellerName}</div>
       //                  <div className="text-sm opacity-50">
       //                    Price: {myservices.price}
       //                  </div>
       //                </div>
       //              </div>
       //            </td>
       //            <td>
       //              fgbvzxcb
       //              <br />
       //              <span className={"badge badge-ghost badge-sm"}>
       //                {myservices.length}
       //              </span>
       //            </td>
       //            <td>No: vgxzfcvbzxcv</td>
       //            <th>
       //              <button className="btn btn-error btn-xs">DELETE</button>
       //            </th>
       //          </tr>
       //        </tbody>
       //      </table>
       //    </div>

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
}

export default MyProducts;
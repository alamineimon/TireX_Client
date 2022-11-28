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

    //  const closeModal = () => {
    //    setDeleteProduct(null);
    //  };

    //  const handleDelete = (product) => {
    //    fetch(`http://localhost:5000/bookings/${product._id}`, {
    //      method: "DELETE",
    //      headers: {},
    //    })
    //      .then((res) => res.json())
    //      .then((data) => {
    //        if (data.deletedCount > 0) {
    //          refetch();
    //          toast.success(`${product?.name} order deleted successfully`);
    //        }
    //      });
    //  };

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
                 <th>Seller Name</th>
                 <th>Mobile</th>
                 <th>Product Name</th>
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
                   <td>{myservice?.sellerName}</td>
                   <td>{myservice?.mobile}</td>
                   <td>{myservice?.name}</td>
                   <td>$ {myservice?.sellingPrice}</td>
                   <td>{myservice.location}</td>
                   <td>Edite</td>

                   {/* <td>
                     {myservice.price && !myservice.paid && (
                       <Link>
                         <button className="btn border-none hover:bg-green-500 bg-blue-500 btn-sm text-white">
                           Pay
                         </button>
                       </Link>
                     )}
                     {myservice.price && myservice.paid && (
                       <span className="text-green-600">Paid</span>
                     )}
                   </td> */}
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
         {/* {deleteProduct && (
           <ConfirmationModal
             successAction={handleDelete}
             modalData={deleteProduct}
             closeModal={closeModal}
             title={`Are you sure you wanna delete? `}
             message={`If you delete ${deleteProduct.name}.  It cann't be undone`}
           />
         )} */}
       </div>
     );
}

export default MyProducts;
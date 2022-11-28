import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import ConfirmationModal from '../../Modal/ConfirmationModal/ConfirmationModal';

const ManageUser = (props) => {
  const [deleteProduct, setDeleteProduct] = useState(null);

    const url = `http://localhost:5000/users`;
    const { data: users = [],refetch, isLoading } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });


    const handleMakeAdmin = (id) => {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT"})
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
              toast("Make admin successful");
              refetch()
          }
        });
  };
  const handleManageBuyerSeller = (_id)=>{
    fetch(`http://localhost:5000/users/${_id}`, {
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            refetch()
            toast.success("Your  order deleted successfully")
        }
    })
  }
  const closeModal = () => {
    setDeleteProduct(null);
  };

    if (isLoading) {
        return <Spinner></Spinner>
    }



    
    return (
      <div>
        <h1 className="text-3xl text-left mb-4">Manage User</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>User Type</th>
                <th>Make Admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.type}</td>
                  <td>
                    {user?.type !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn border-none hover:bg-blue-500  bg-green-500 btn-sm text-white"
                      >
                        Make
                      </button>
                    )}
                  </td>
                  <td>
                    {user?.type !== "admin" && (
                      <label
                        onClick={() => setDeleteProduct(user)}
                        htmlFor="confirmation-modal"
                        className="btn border-none hover:bg-red-500 bg-red-400 btn-sm text-white"
                      >
                        Delete
                      </label>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* {deleteProduct && (
          <ConfirmationModal
            successAction={handleManageBuyerSeller}
            modalData={deleteProduct}
            closeModal={closeModal}
            title={`Sure you wanna Delete? `}
            message={`It's gone forever`}
          />
        )} */}
      </div>
    );
}

export default ManageUser;
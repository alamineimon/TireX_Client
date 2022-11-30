import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import Spinner from "../../../components/Spinner/Spinner";
import BookingModal from "../../Modal/BookingModal/BokkingModal";
import Service from "./Service";

const AllServices = () => {
  const [bikeInfo, setBikeInfo] = useState(null);

  const {
    data: services = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://server-nine-plum.vercel.app/services");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="lg:flex my-2 sm:block">
      {/* menu item */}
      <div className="lg:bg-gray-300 sm:w-full lg:w-1/6 py-4 sm:my-4 lg:mr-2">
        <h1 className="text-3xl text-blod">Categories</h1>
        <hr className="my-4" />
        <ul className="text-left mx-auro">
          <Link to="/ktmbike">
            <li className="hover:bg-green-600 hover:w-full text-center hover:text-white p-2">
              KTM
            </li>
          </Link>
          <Link to="/yamahabike">
            <li className="hover:bg-green-600 hover:w-full text-center hover:text-white p-2">
              YAMAHA
            </li>
          </Link>
          <Link to="/kawashakibike">
            <li className="hover:bg-green-600 hover:w-full text-center hover:text-white p-2">
              KHAWASHAKI
            </li>
          </Link>
        </ul>
      </div>
      {/* card items */}
      <div className="lg:flex my-2 lg:w-5/6 sm:block">
        <div className="grid md:grid-cols-1 gap-5 mx-auto lg:grid-cols-3">
          {services.map((service) => (
            <Service
              key={service._id}
              service={service}
              setBikeInfo={setBikeInfo}
            ></Service>
          ))}
        </div>
        {bikeInfo && (
          <BookingModal bikeinfo={bikeInfo} refetch={refetch}></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AllServices;

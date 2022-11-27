import React, { useState } from "react";
import { useQuery } from "react-query";
import SmallSpinner from "../../../../components/Spinner/SmallSpinner";
import Spinner from "../../../../components/Spinner/Spinner";
import BookingModal from "../../../Modal/BookingModal/BokkingModal";
import BikeCard from "./BikeCard";

const KtmBike = (props) => {
  const [bikeInfo, setBikeInfo] = useState(null);

  const {
    data: ktmBike = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["ktmBike"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/ktm`);
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <div className="lg:flex my-2 lg:w-full sm:block">
      <div className="grid md:grid-cols-1 gap-5 mx-auto lg:grid-cols-3">
        {ktmBike.map((bike) => (
          <BikeCard
            key={bike._id}
            bike={bike}
            setBikeInfo={setBikeInfo}
          ></BikeCard>
        ))}
      </div>
      {<BookingModal bikeinfo={bikeInfo} refetch={refetch}></BookingModal>}
    </div>
  );
};

export default KtmBike;

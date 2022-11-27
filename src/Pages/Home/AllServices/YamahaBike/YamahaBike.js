import React, { useState } from "react";
import { useQuery } from "react-query";
import SmallSpinner from "../../../../components/Spinner/SmallSpinner";
import Spinner from "../../../../components/Spinner/Spinner";
import BookingModal from "../../../Modal/BookingModal/BokkingModal";
import YBikeCard from "./YBikeCard";

function YamahaBike(props) {
  const [bikeInfo, setBikeInfo] = useState(null);

  const {
    data: yamahaBike = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["yamahaBike"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/yamaha`);
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
        {yamahaBike.map((bike) => (
          <YBikeCard
            key={bike._id}
            bike={bike}
            setBikeInfo={setBikeInfo}
          ></YBikeCard>
        ))}
      </div>
      {<BookingModal bikeinfo={bikeInfo}></BookingModal>}
    </div>
  );
}

export default YamahaBike;

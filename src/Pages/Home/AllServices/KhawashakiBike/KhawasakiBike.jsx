import React, { useState } from "react";
import { useQuery } from "react-query";
import SmallSpinner from "../../../../components/Spinner/SmallSpinner";
import Spinner from "../../../../components/Spinner/Spinner";
import BookingModal from "../../../Modal/BookingModal/BokkingModal";
import KBikeCard from "./KBikeCard";

const KhawasakiBike = (props) => {
  const [bikeInfo, setBikeInfo] = useState(null);

  const {
    data: kawasakiBike = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["kawasakiBike"],
    queryFn: async () => {
      const res = await fetch(`https://server-nine-plum.vercel.app/kawasaki`);
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="lg:flex my-2 lg:w-full sm:block">
      <div className="grid md:grid-cols-1 gap-5 mx-auto lg:grid-cols-3">
        {kawasakiBike.map((bike) => (
          <KBikeCard
            key={bike._id}
            bike={bike}
            setBikeInfo={setBikeInfo}
          ></KBikeCard>
        ))}
      </div>
      {<BookingModal bikeinfo={bikeInfo} refetch={refetch}></BookingModal>}
    </div>
  );
};

export default KhawasakiBike;

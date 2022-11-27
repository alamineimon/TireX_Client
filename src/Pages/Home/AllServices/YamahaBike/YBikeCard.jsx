import React from 'react';

const YBikeCard = ({ bike }) => {
  const {
    describe,
    img,
    usedYear,
    purchaseYear,
    condition,
    sellingPrice,
    categoryName,
    originalPrice,
    name,
    sellerName,
    mobile,
  } = bike;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="h-[200px]" alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">
          {name}{" "}
          <span className="text-xs bg-green-600 rounded p-1 text-white">
            {categoryName}
          </span>
        </h2>
        <p className="text-lg text-bold">
          Seller: {sellerName}
          <span className=" ml-1 bg-blue-600 rounded p-1 text-white">
            {mobile}
          </span>
        </p>
        <p>{describe}</p>
        <p>Conditon: {condition}</p>
        <p>
          Price: {sellingPrice}{" "}
          <span className=" ml-1 bg-pink-600 rounded p-1 text-white">
            Original: {originalPrice}
          </span>
        </p>
        <div className="flex text-bold">
          <p>PurchaseYear:{purchaseYear}</p>
          <p> UsedYear: {usedYear}</p>
        </div>
        <div className="card-actions justify-end">
          <label
            htmlFor="bookingModal"
            className="btn hover:text-gray-100 px-8 rounded py-3 text-bold hover:bg-green-600 bg-blue-800 text-white"
          >
            Buy Now
          </label>
        </div>
      </div>
    </div>
  );
};
export default YBikeCard;
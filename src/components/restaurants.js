// import React, { useContext } from "react";
import { IMG_URL } from "../utils/mockdata";
// import UserContex from "../utils/UserContex";

export const Restaurants = (props) => {
  const { resdata } = props;
  const { name, avgRating, cloudinaryImageId, sla, cuisines } = resdata?.info;
  // const { loggedINuser } = useContext(UserContex);

  return (
    <div className="Restarunts-contain w-70  bg-gray-100 m-[17px] p-2 rounded-lg hover:bg-gray-200">
      <div className="image-card w-[200px]">
        <img
          alt="img"
          className="w-[200px] h-[150px] rounded-lg mb-1"
          src={IMG_URL + cloudinaryImageId}
        />
        <h2 className="font-bold py-2">{name}</h2>
        <h4>{cuisines.join(" ")}</h4>
        <h4>{avgRating} rating</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        {/* <h4>{loggedINuser}</h4> */}
      </div>
    </div>
  );
};

export const Promotedlaybel = (Restaurants) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black m-3 px-2 text-white rounded-md font-medium">
          Open
        </label>
        <Restaurants {...props} />
      </>
    );
  };
};
export default Restaurants;

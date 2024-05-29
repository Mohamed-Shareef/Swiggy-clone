import React from "react";
import { IMG_URL } from "../mockdata";

export const Restaurants = (props) => {
  const { resdata } = props;
  const { name, avgRating, cloudinaryImageId, sla, cuisines } = resdata?.info;
  return (
    <div className="Restarunts-contain">
      <div className="image-card">
        <img src={IMG_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h4>{cuisines.join(" ")}</h4>
        <h4>{avgRating} rating</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default Restaurants;

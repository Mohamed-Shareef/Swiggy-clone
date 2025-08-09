// import React, { useEffect, useState, useCallback } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Header_IMG } from "../utils/mockdata";

import useRestaruantMenu from "../useRestaruantMenu";
import { useState } from "react";
import RestaurentCategorys from "./Rescatogery";

const Restaurantmenu = () => {
  // const [resInfo, setResmenu] = useState(null);
  const [showIndex, setshowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaruantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // const itemCards =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //     ?.itemCards || [];

  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(category);

  return (
    <div className="text-center">
      <h1 className="m-2 font-bold text-xl">{name}</h1>
      <div className="mx-auto w-[200px]">
        <img
          alt="CloudnaryID"
          className="w-full object-contain"
          src={Header_IMG + cloudinaryImageId}
        />
      </div>

      <p className="mt-3">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menus</h2>
      <h1>
        {category.map((cat, index) => (
          // console.log(cat)
          <RestaurentCategorys
            key={cat?.card?.card?.title}
            data={cat?.card?.card}
            showItem={index === showIndex}
            setshowIndex={() =>
              setshowIndex(index === showIndex ? false : index)
            }
          />
        ))}
      </h1>
      {/* <h1>Recommended</h1>
      <ul>
        {itemCards.map((res) => (
          <h3
            key={res.card.info.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid black",
              padding: "10px",
            }}
          >
            {res.card.info.name} - Rs.{res.card.info.price / 100}
            <img
              style={{
                width: "150px",
              }}
              src={Menu_IMG + res.card.info.imageId}
              alt={res.card.info.name}
            />
          </h3>
        ))}
      </ul> */}
    </div>
  );
};

export default Restaurantmenu;

import React, { useEffect, useState, useCallback } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { Header_IMG, MENU_API, Menu_IMG } from "../mockdata";
import "./restaurantmenu.css";

const Restaurantmenu = () => {
  const [resInfo, setResmenu] = useState(null);
  const { resId } = useParams();
  console.log(resInfo);
  const fetchMenu = useCallback(async () => {
    try {
      const response = await fetch(
        `${MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      setResmenu(json.data);
    } catch (error) {
      console.error("Fetching menu failed: ", error);
    }
  }, [resId]);

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];
  console.log(itemCards);
  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <img
        style={{
          width: "200px",
        }}
        src={Header_IMG + cloudinaryImageId}
      />

      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menus</h2>
      <h1>Recommended</h1>
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
      </ul>
    </div>
  );
};

export default Restaurantmenu;

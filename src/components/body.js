import React, { useEffect, useState } from "react";
import "./body.css";
import Restaurants from "./restaurants";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const [resname, setresname] = useState([]);

  const [filterRes, serFilterres] = useState([]);

  const [searchBox, setSearchBox] = useState("");

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.92020&lng=79.13060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsons = await data.json();
    setresname(
      jsons?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    serFilterres(
      jsons.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return resname.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-contain">
        <div className="searchBox">
          <input
            type="text"
            value={searchBox}
            onChange={(e) => {
              setSearchBox(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filts = resname.filter((res) =>
                res?.info.cuisines
                  .join("")
                  .toLowerCase()
                  .includes(searchBox.toLowerCase())
              );
              serFilterres(filts);
            }}
          >
            search
          </button>
        </div>
        <div className="search-bar">
          <button
            onClick={() => {
              const fillters = resname.filter(
                (res) => res.info.avgRating > 4.3
              );
              serFilterres(fillters);
            }}
          >
            search top resturants
          </button>
        </div>
      </div>
      <div className="imagecard-container">
        {filterRes.map((res) => (
          <Link
            className="linkchange"
            key={res.info.id}
            to={"/restaurents/" + res.info.id || res.card.info.id}
          >
            <Restaurants resdata={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

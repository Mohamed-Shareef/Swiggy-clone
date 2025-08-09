import React, { useEffect, useState } from "react";

import Restaurants, { Promotedlaybel } from "./Restaurants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN_API } from "../utils/mockdata";
import useOnlineStatus from "../utils/useOnlinestatus";
import useResnamemain from "../utils/resnamemain";
import { useImagecard } from "../utils/resnamemain";
import ImageCard from "./Imagecard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  // const [resname, setresname] = useState([]);

  const [filterRes, setFilterres] = useState([]);

  const [searchBox, setSearchBox] = useState("");

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(MAIN_API);
    const jsons = await data.json();
    // setresname(
    //   jsons?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setFilterres(
      jsons.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const resname = useResnamemain();
  const filterImg = useImagecard();

  const RestaurantsCards = Promotedlaybel(Restaurants);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Sorry internet connection is lost</h1>;
  return resname.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container  p-4 w-9/12 m-auto ">
      <h1 className="font-Gilroy font-extrabold text-xl mt-2">
        What's on your mind?
      </h1>
      <div className="w-5/4 m-auto shadow">
        <div className="mt-6">
          <Slider {...settings}>
            {filterImg.map((el) => (
              <ImageCard key={el.id} Data={el} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="search-contain flex items-center justify-between mt-20">
        <div className="searchBox  ">
          <input
            type="text"
            className="m-2 w-[300px] border outline-none border-solid rounded-sm border-black px-2 py-2"
            value={searchBox}
            onChange={(e) => {
              setSearchBox(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-orange-600 m-4 rounded-sm hover:text-white transition-all translate-x-2 capitalize"
            onClick={() => {
              const filts = resname.filter((res) =>
                res?.info.cuisines
                  .join("")
                  .toLowerCase()
                  .includes(searchBox.toLowerCase())
              );
              setFilterres(filts);
            }}
          >
            search
          </button>
        </div>
        <div className="search-bar">
          <button
            className="px-4 py-2 bg-orange-600 rounded-sm hover:text-white capitalize transition-all translate-x-2"
            onClick={() => {
              const fillters = resname.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilterres(fillters);
            }}
          >
            search top resturants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-5 ">
        {filterRes.map((res) => (
          <Link
            className="linkchange"
            key={res.info.id}
            to={"/restaurents/" + res.info.id || res.card.info.id}
          >
            {res.info.isOpen ? (
              <RestaurantsCards resdata={res} />
            ) : (
              <Restaurants resdata={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

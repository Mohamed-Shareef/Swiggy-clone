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
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} !flex items-center justify-center absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black p-2 rounded-full shadow-lg hover:bg-black-200`}
    style={{ ...style, display: "flex", backgroundColor: "black" }} // force visible
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </div>
);

export const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} !flex items-center justify-center absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black p-2 rounded-full shadow-lg hover:bg-black-200`}
    style={{ ...style, display: "flex" }} // force visible
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </div>
);

export const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="body-container p-4 w-full sm:w-9/12 m-auto">
      <h1 className="font-Gilroy font-extrabold text-xl mt-2">
        What's on your mind?
      </h1>

      <div className="w-full m-auto shadow relative">
        <div className="mt-6">
          <Slider {...settings}>
            {filterImg.map((el) => (
              <ImageCard key={el.id} Data={el} />
            ))}
          </Slider>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-contain flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-20">
        <div className="searchBox flex items-center gap-2">
          <input
            type="text"
            className="border outline-none border-solid rounded-sm border-black px-2 py-2 w-[300px] max-w-full"
            value={searchBox}
            onChange={(e) => setSearchBox(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-orange-600 rounded-sm hover:text-white transition-all capitalize"
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
            className="px-4 py-2 bg-orange-600 rounded-sm hover:text-white capitalize transition-all"
            onClick={() => {
              const fillters = resname.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilterres(fillters);
            }}
          >
            search top restaurants
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {filterRes.map((res) => (
          <Link
            className="linkchange"
            key={res.info.id}
            to={"/restaurents/" + res.info.id}
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

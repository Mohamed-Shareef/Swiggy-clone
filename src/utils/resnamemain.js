import { useState, useEffect } from "react";
import { MAIN_API } from "../utils/mockdata";

const useResnamemain = () => {
  const [resname, setresname] = useState([]);

  useEffect(() => {
    fetchin();
  }, []);

  const fetchin = async () => {
    const data = await fetch(MAIN_API);
    const jsons = await data.json();

    setresname(
      jsons?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // setFilterres(
    //   jsons.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  return resname;
};

export default useResnamemain;

export const useImagecard = () => {
  useEffect(() => {
    fetching();
  }, []);
  const [filterImg, setFilterimg] = useState([]);

  const fetching = async () => {
    const data = await fetch(MAIN_API);
    const jsons = await data.json();
    setFilterimg(jsons?.data.cards[0].card?.card.imageGridCards.info);
  };
  return filterImg;
};

// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategorys = ({ data, showItem, setshowIndex }) => {
  const { title, itemCards } = data;

  const handleclick = () => {
    setshowIndex(showItem);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-bold text-m">
            {title}({itemCards.length})
          </span>
          <span>🔻</span>
        </div>

        {showItem && <ItemList Item={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategorys;

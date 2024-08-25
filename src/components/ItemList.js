import { useState } from "react";
import { Menu_IMG } from "../utils/mockdata";

const ItemList = ({ Item }) => {
  const [Addcard, setAddcard] = useState(false);

  const handleAddcart = () => {
    setAddcard(Addcard);
  };

  return (
    <div>
      {Item.map((val) => (
        <div
          className="border-gray-200 border-b-2 p-6 m-2 text-left "
          key={val.card.info.id}
        >
          <div className="flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-xl ">{val.card.info.name}</span>
                <span className="text-m"> - ₹{val.card.info.price / 100}</span>
              </div>
              <p className="text-xs ">{val.card.info.description}</p>
            </div>

            <div className="w-3/12  p-4 relative">
              <img alt="imageID CDN" src={Menu_IMG + val.card.info.imageId} />
              <div className="absolute">
                <button
                  onClick={() => handleAddcart()}
                  className=" bg-black text-white mx-7  py-1 px-3 rounded-lg shadow-lg "
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

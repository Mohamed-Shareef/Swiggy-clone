// import { useState } from "react";

import { Menu_IMG } from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import UserContex from "../utils/UserContex";

const ItemList = ({ Item }) => {
  // const [Addcard, setAddcard] = useState(false);

  // const handleAddcart = () => {
  //   setAddcard(Addcard);
  // };

  const dispatch = useDispatch(); // it is hook

  const handleclicks = (Item) => {
    // let data = Number(userName + 1);
    // setuserName(data);
    dispatch(addItem(Item));
    toast.success("Item added to cart!", { autoClose: 1500 });
  };

  // const { userName, setuserName } = useContext(UserContex);

  return (
    <div>
      {Item.map((val) => (
        <div
          className="border-gray-200 border-b-2 p-6 m-2 text-left "
          key={val.card.info.id}
        >
          <div className="flex justify-between">
            <div className="w-full sm:w-9/12">
              <div className="py-2">
                <span className="text-xl  text-orange-600">
                  {val.card.info.name}
                </span>
                <span className="text-m"> - ₹{val.card.info.price / 100}</span>
              </div>
              <p className="text-m ">{val.card.info.description}</p>
            </div>

            <div className="w-3/12 p-4 flex flex-col items-center">
              <img
                alt="imageID CDN"
                src={Menu_IMG + val.card.info.imageId}
                className="w-[120px] h-[120px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleclicks(val)}
                className="bg-black text-white mt-2 py-1 px-4 rounded-lg shadow-lg hover:bg-gray-800"
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}

      <ToastContainer position="top-right" hideProgressBar={false} />
    </div>
  );
};

export default ItemList;

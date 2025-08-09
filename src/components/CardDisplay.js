// import { useState } from "react";
import { Menu_IMG } from "../utils/mockdata";
import { useDispatch } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDisplay = ({ Item }) => {
  const dispatch = useDispatch();

  const handleclear = () => {
    dispatch(clearItem());
    toast.success("Cart cleared!", { autoClose: 1500 });
  };

  const handleremove = () => {
    dispatch(removeItem());
    toast.success("Item removed from cart!", { autoClose: 1500 });
  };

  return (
    <>
      <div>
        {Item.map((val) => (
          <div
            className="border-gray-200 border-b-2 p-6 m-2 text-left"
            key={val.card.info.id}
          >
            <div className="flex flex-col sm:flex-row justify-between">
              {/* Text Section */}
              <div className="w-full sm:w-9/12">
                <div className="py-2">
                  <span className="text-xl text-orange-600">
                    {val.card.info.name}
                  </span>
                  <span className="text-m">
                    {" "}
                    - ₹{val.card.info.price / 100}
                  </span>
                </div>
                <p className="text-m">{val.card.info.description}</p>
              </div>

              {/* Image + Buttons */}
              <div className="w-full sm:w-3/12 p-4 flex flex-col items-center">
                <img
                  alt="imageID CDN"
                  src={Menu_IMG + val.card.info.imageId}
                  className="w-[120px] h-[120px] object-cover rounded-lg"
                />

                {/* Clear & Remove Buttons */}
                <div className="flex gap-2 mt-2">
                  {/* <button
                  onClick={handleclear}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-red-600 transition"
                >
                  Clear
                </button> */}
                  <button
                    onClick={handleremove}
                    className="bg-yellow-500 text-black py-1 px-3 rounded-lg shadow-md hover:bg-yellow-600 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Toast Container */}
        <ToastContainer position="top-right" hideProgressBar={false} />
      </div>
      {Item?.length > 0 && (
        <div className="m-4 flex justify-center">
          <button
            onClick={handleclear}
            className="bg-red-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default CardDisplay;

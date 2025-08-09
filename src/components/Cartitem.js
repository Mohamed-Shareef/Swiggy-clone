import { useSelector } from "react-redux";
import CardDisplay from "./CardDisplay";

const Cartitem = () => {
  // console.log(cartList, "hello");

  const cart = useSelector((store) => store.cart.items);
  console.log(cart, "hello");

  return (
    <div className="text-center font-bold m-4">
      <h1 className="font-bold text-xl">cart</h1>
      <div>{cart.length === 0 && <h1>your cart Item is empty</h1>}</div>
      <div className="w-6/12 m-auto">
        <CardDisplay Item={cart} />
      </div>
    </div>
  );
};

export default Cartitem;

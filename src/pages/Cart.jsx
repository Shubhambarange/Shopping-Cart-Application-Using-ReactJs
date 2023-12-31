import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totolAmount, setTotolAmount] = useState(0);

  useEffect(() => {
    setTotolAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center ">
      {cart.length > 0 ? (
        <div className="flex gap-x-5">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2 ">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%]">
              <div className="font-semibold text-xl text-green-800">
                Your Cart
              </div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">
                Summary
              </div>
              <p>
                <span className="text-gray-700 font-semibold text-xl">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-lg ">
                <span className="text-gray-700 font-semibold">
                  Total Amount: ${totolAmount}
                </span>
              </p>
              <button class="bg-green-700 hover:bg-purple-50 rounded-lg text-white   transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // <div className="flex justify-center items-center mx-[800px]">
        <div class="min-h-screen flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>

            <NavLink to={"/"}>
              {" "}
              <button
                class="bg-green-600 hover:bg-purple-50 rounded-lg text-white 
                      transition duration-300 ease-linear mt-5 border-2 border-green-600 
                        font-semibold hover:text-green-700 p-3 px-10 tracking-wider"
              >
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default Cart;

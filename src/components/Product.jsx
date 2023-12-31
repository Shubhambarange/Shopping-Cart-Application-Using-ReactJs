import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div
      className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 
        ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
        hover:shadow-[0px_0px_95px_53px_#00000024] 
        gap-3 mt-10 ml-5 rounded-xl  p-4"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>

      <div>
        <p className="w-40 font-normal text-[10px] text-left text-gray-400">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"></img>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold"> ${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase px-3
          hover:bg-gray-700 hover:text-white transition duration-300 
          ease-in "
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 uppercase px-3
          hover:bg-gray-700 hover:text-white transition duration-300 
          ease-in "
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;



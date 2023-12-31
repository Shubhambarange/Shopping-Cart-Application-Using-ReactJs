import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product'


{/* <div class="group hover:scale-110 transition duration-300 ease-in flex 
flex-col items-center
 justify-between 
 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
 hover:shadow-[0px_0px_95px_53px_#00000024] 
 gap-3 p-4 mt-10 ml-5  rounded-xl"><div><h1 class="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1></div><div><h1 class=" w-40 text-gray-400 font-normal text-[10px] text-left">Your perfect pack for everyday use and walks in the...</h1></div><div class="h-[180px]"><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" class="h-full w-full object-contain"></div><div class="flex items-center justify-between w-full mt-5"><p class="text-green-600 font-semibold">$109.95</p><button class="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide">Remove item</button></div></div> */}

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("error Occured");
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 
                        xs:grid-cols-1 lg:grid-cols-4 max-w-6xl 
                        p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {posts.map((post) =>(
            <Product key = {post.id} post={post}/>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {" "}
          <p>No Data Found</p>{" "}
        </div>
      )}
    </div>
  );
};

export default Home;

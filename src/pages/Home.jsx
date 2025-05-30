import { Slidebar } from "../components/swiper";
import Cart from "./Cart";
import Products from "./Products";
import TopProducts from "./TopProducts";



const Home = () => {
  return (
    <>
      <div className="mt-[4rem]">
        <Slidebar />
        <Products />
        <Cart />
        <TopProducts/>
      </div>
    </>
  );
};

export default Home;

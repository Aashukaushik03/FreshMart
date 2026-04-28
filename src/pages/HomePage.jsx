import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

export default function HomePage({ addToCart }) {
  const navigate = useNavigate();

  return (
    <>
      <Hero onShopClick={() => navigate("/shop")} />
      <Categories onCategoryClick={(cat) => navigate(`/shop/${cat}`)} />
      <FeaturedProducts addToCart={addToCart} onViewAll={() => navigate("/shop")} />
      <Banner />
      <Testimonials />
    </>
  );
}

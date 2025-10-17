import React from "react";
import Banner from "../Components/Banner";
import DiscountMenus from "../Components/DiscountMenus";
import HotDelicious from "../Components/HotDelicious";
import TrendingFoodMenu from "../Components/TrendingFoodMenu";
import SliderItem from "../Components/SliderItem";
import BestDeliciousFood from "../Components/BestDeliciousFood";
import ItemsImages from "../Components/ItemsImages";
import PersonReview from "../Components/PersonReview";
import AboutOurFood from "../Components/AboutOurFood";
import NewsAndBlog from "../Components/NewsAndBlog";
import Foodprocessing from "../Components/Foodprocessing";

const Home = () => {
  return (
    <div>
      <Banner />
      <DiscountMenus />
      <BestDeliciousFood />
      <HotDelicious />
      <TrendingFoodMenu />
      <SliderItem />
      <AboutOurFood />
      <Foodprocessing />
      <PersonReview />
      <NewsAndBlog />
      <ItemsImages />
    </div>
  );
};

export default Home;

import  HomeSlick  from "./HomeSlick"
import sliderImage3 from '../images/slider-image-1.jpeg';
import sliderImage4 from '../images/slider-2.jpeg';
import { CategoriesSlick } from "./CategoriesSlick";
import sliderImage1 from '../images/slider-image-1.jpeg';
import instance from "../config/axios.config";
import { useQuery } from "react-query";
import { Loading } from "../components/ui/Loading";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import toast from "react-hot-toast";
import Pagination from "../components/ui/Paginatain";
import { ProductX } from "./ProductX";

export const Product = () => {

  return <>
    <div className="mx-auto h-16 max-w-screen-xl px-4 sm:px-6 lg:px-8  ">
      <div className="grid-cols-12 grid mb-14 ">
        <div className="md:col-span-8 col-span-12">
          <HomeSlick />
        </div>
        <div className="col-span-4" >
          <img className="mb-1 hidden md:block" style={{ width: '100%', height: '275px' }} src={sliderImage3} alt="" />
          <img className="hidden md:block" style={{ width: '100%', height: '271px' }} src={sliderImage4} alt="" />
        </div>
      </div>
      <div className="CategoriesSlick mb-14">
        <CategoriesSlick />
      </div>

      <ProductX/>

    </div>

  </>
}

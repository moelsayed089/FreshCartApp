import React from 'react'
import HomeSlick from "./HomeSlick"
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


export const ProductX = () => {
    const { AddProductToCart } = useContext(cartContext)
    const [isIndividualLoading, setIsIndividualLoading] = useState(false)
    const [page, setPage] = useState(1)

    function GetAllProducts() {
        return instance.get(`products?limit=18&page=${page}`)
    }
    const { data, isLoading } = useQuery(`products-${page}`, GetAllProducts)
    const ResponseAllProduct = data?.data.data
    // console.log(data?.data.metadata)

    async function HandleAddProdct(productId) {
        setIsIndividualLoading((pre) => ({
            ...pre,
            [productId]: true
        }))
        const res = await AddProductToCart(productId)
        console.log(res)
        if (res.status === 'success') {
            toast.success("Product added successfully to your cart", {
                position: "bottom-right"
            })
        }
        setIsIndividualLoading((pre) => ({
            ...pre,
            [productId]: false
        }))
    }

    const HandelNextPage = () => {
        setPage(pre => pre + 1)
    }

    const HandelPrevPage = () => {
        setPage(pre => pre - 1)
    }

    const HandelOnClickPage = (numberOfPage) => {
        setPage(numberOfPage)
    }

    if (isLoading) return <Loading color={'#14B014'} width={"80"} />
    return <>
        <div className="mx-auto h-16 max-w-screen-xl  px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-12 gap-3">
                {ResponseAllProduct.map((product) => (
                    <div key={product.id} className="product col-span-12  sm:col-span-12 md:col-span-4 lg:col-span-2 px-3 py-2 bg-slate-50 border-solid border-1 border-green-400 rounded-md ">
                        <Link to={`/productdetailes/${product.id}`}>
                            <img src={product.imageCover} className="w-full  " alt="" />
                            <p className="text-green-600 font-normal text-sm">{product.category.name}</p>
                            <h4 className="text-md font-semibold ">{product.title.split(" ").slice(0, 2).join(' ')}</h4>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm">{product.price} EGP</p>
                                <p className="text-sm "><i className="fa-sharp fa-solid fa-star pe-1" style={{ color: "#FFD43B" }}></i>{product.ratingsAverage}</p>
                            </div>
                        </Link>
                        <button onClick={() => HandleAddProdct(product.id)}
                            className="bg-green-600 w-full rounded-md py-1 mt-2 text-white text-sm font-semibold" disabled={isIndividualLoading[product.id]}>
                            {isIndividualLoading[product.id] ? <Loading width={20} color={"#eeee"} /> : "Add To Cart"}</button>
                    </div>
                ))}
            </div>

            <Pagination pageNumber={data?.data.metadata.numberOfPages}
                curntPage={data?.data.metadata.currentPage}
                result={data?.data.results}
                onClickNext={HandelNextPage}
                onClickPrev={HandelPrevPage}
                OnPageNumberClick={HandelOnClickPage}
            />
        </div>

    </>
}

import  HomeSlick  from "./HomeSlick"
import sliderImage3 from '../images/slider-image-1.jpeg';
import sliderImage4 from '../images/slider-2.jpeg';
import { CategoriesSlick } from "./CategoriesSlick";
import sliderImage1 from '../images/slider-image-1.jpeg';
import instance from "../config/axios.config";
import { useQuery } from "react-query";
import { Loading } from "../components/ui/Loading";

export const Product = () => {

  function GetAllProducts(){
    return instance.get('products')
  }
  const {data , isLoading} = useQuery('products' , GetAllProducts)
  const ResponseAllProduct = data?.data.data
  console.log(ResponseAllProduct)

  if (isLoading) return <Loading color={'#14B014'} width={"80"} />

  return <>
    <div className="mx-auto h-16 max-w-screen-xl  px-4 sm:px-6 lg:px-8  ">
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


      <div className="grid grid-cols-12 gap-3">
        {ResponseAllProduct.map((product)=>(
          <div key={product.id} className="product col-span-12  sm:col-span-12 md:col-span-4 lg:col-span-2 px-3 py-2 bg-slate-50 border-solid border-1 border-green-400 rounded-md ">
            <img src={product.imageCover} className="w-full  " alt="" />
            <p className="text-green-600 font-normal text-sm">{product.category.name}</p>
            <h4 className="text-md font-semibold ">{product.title.split(" ").slice(0,2).join(' ')}</h4>
            <div className="flex justify-between items-center mt-2">
              <p className="text-sm">{product.price} EGP</p>
              <p className="text-sm "><i className="fa-sharp fa-solid fa-star pe-1" style={{ color: "#FFD43B" }}></i>{product.ratingsAverage}</p>
            </div>
          </div>
        ))}


      </div>
      
    </div>

  </>
}

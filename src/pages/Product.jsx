import  HomeSlick  from "./HomeSlick"
import sliderImage3 from '../images/grocery-banner.png';
import sliderImage4 from '../images/grocery-banner-2.jpeg';

export const Product = () => {
  return <>
  
  
    <div className="mx-auto h-16 max-w-screen-xl  px-4 sm:px-6 lg:px-8  ">
      <div className="grid-cols-12 grid ">
        <div className="md:col-span-8 col-span-12">
          <HomeSlick />
        </div>
        <div className="col-span-4" >
          <img className="mb-1 hidden md:block" style={{ width: '100%', height: '275px' }} src={sliderImage3} alt="" />
          <img className="hidden md:block" style={{ width: '100%', height: '275px' }} src={sliderImage4} alt="" />
        </div>
      </div>


      
    </div>

  </>
}

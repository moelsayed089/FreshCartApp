import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import instance from '../config/axios.config';
import { useQuery } from 'react-query';
import sliderImage1 from '../images/slider-image-1.jpeg'; // Import image using 'import' syntax
import { Loading } from '../components/ui/Loading';

export const CategoriesSlick = () => {

    function GetAllCategories(){
        return instance.get('/categories')
    }

    const { data ,isLoading} = useQuery('categories',GetAllCategories)
    const responseCategories = data?.data.data

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    if (isLoading) return <Loading color={'#14B014'} width={"80"}/>
    return <>
    <div className="slider-container overflow-hidden">
        <Slider {...settings}>
            {responseCategories.map((cate,idx)=>(
                <div key={idx} className='focus:outline-none'>
                    <img style={{ width: '100%',height:'200px'}} src={cate.image} alt={cate.name} />
                    <p className='mt-1 '>{cate.name}</p>
                </div>
            ))}
        
        </Slider>
    </div>
    </>
}

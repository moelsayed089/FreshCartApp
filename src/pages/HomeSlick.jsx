import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import sliderImage1 from '../images/slider-image-1.jpeg'; // Import image using 'import' syntax
import sliderImage2 from '../images/slider-image-2.jpeg'; // Import image using 'import' syntax
import sliderImage3 from '../images/slider-image-3.jpeg'; // Import image using 'import' syntax
import sliderImage4 from '../images/slider-2.jpeg'; // Import image using 'import' syntax

const HomeSlick = () => {


   
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='focus:outline-none'>
                    <img style={{ width: '100%', height: '550px', objectFit:"cover"}} src={sliderImage1} alt="" />
                </div>
                <div className='focus:outline-none'>
                    <img style={{ width: '100%', height: '550px', objectFit:"cover"}} src={sliderImage2} alt="" />
                </div>
                <div className='focus:outline-none'>
                    <img style={{ width: '100%', height: '550px', objectFit:"cover"}} src={sliderImage3} alt="" />
                </div>
                <div className='focus:outline-none'>
                    <img style={{ width: '100%', height: '550px', objectFit:"cover"}} src={sliderImage4} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlick;

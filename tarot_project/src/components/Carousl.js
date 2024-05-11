import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/Carousel.scss'

function Carousl() {
    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <div className='lg (1024px) border border-black  m-4 p-4'>
        <Slider {...settings}>
            <div>
                <h3 className='bg-red-300 w-50 flex justify-center'>1</h3>
                <img src='tarot_project/tarot-file/cards/c01.jpg' alt='card1'></img>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
        </Slider>
    </div>

  )
}

export default Carousl
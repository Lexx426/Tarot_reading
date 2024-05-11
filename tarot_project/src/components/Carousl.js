import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/Carousel.scss'

function Carousl() {
    const settings = {
        accessibility: true,
        // autoplay: true,
        // centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <div className='lg (1024px) border border-black m-4 p-4 '>
        <Slider {...settings}>
            <div className=' '>
                {/* <h3 className='bg-red-300 w-50 flex justify-center '>1</h3> */}
                <img className='w-15  'src='../tarot-file/img/c01.jpg' alt='card1'/>
            </div>
            <div>
                <h3>2</h3>
                <img src='../tarot-file/img/c01.jpg' alt='card1'/>
            </div>
            <div>
                <h3>3</h3>
                <img src='../tarot-file/img/c01.jpg' alt='card1'/>
            </div>
        </Slider>
    </div>

  )
}

export default Carousl
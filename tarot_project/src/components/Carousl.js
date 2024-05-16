import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../scss/Carousel.scss'

function Carousl() {
    const settings = {
        accessibility: true,
        autoplay: true,
        // centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        nextArrow: (
            <div >
              <div className="next-slick-arrows">
                  <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="30" viewBox="0 -960 960 960" width="30"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
      
          prevArrow: (
            <div>
              <div className="next-slick-arrow rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="30" viewBox="0 -960 960 960" width="30"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
              </div>
            </div>
          ),
    }
  return (
    <div className=' border border-black m-8 px-18'>
        <Slider {...settings}>
            
            <div className='flex justify-center items-center '>
                {/* <h3>1</h3> */}
                <img  src='../tarot-file/img/c01.jpg' alt='card1' style={{ margin: 'auto' }}/>
            </div>
            <div className='flex justify-center items-center '>
            {/* <h3 className='bg-red-300 w-50 flex justify-center '>2</h3> */}
                <img src='../tarot-file/img/c02.jpg' alt='card1' style={{ margin: 'auto' }}/>
            </div>
            <div className='flex justify-center items-center '>
            {/* <h3>3</h3> */}
                <img src='../tarot-file/img/c03.jpg' alt='card1' style={{ margin: 'auto' }}/>
            </div>
        </Slider>
    </div>

  )
}

export default Carousl
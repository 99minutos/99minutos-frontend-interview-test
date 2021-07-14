import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"

const Carousel = ({ sources }) => {
    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...setting}>
                {
                    sources && sources.map((source, index)=>(
                        <div key={index}>
                            <img src={source.image} alt={index} width={'100%'}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default Carousel;
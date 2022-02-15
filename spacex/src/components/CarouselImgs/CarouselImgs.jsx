import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselImgs = ({ imgs }) => {


    return (
        <>
            <Carousel
                interval={3000} fade>
                {
                    imgs?.map((i, key) => {
                        return (
                            <Carousel.Item key={key} >
                                <img
                                    className="d-block w-100" src={i} alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    })

                }
            </Carousel>

        </>
    )
}
export default CarouselImgs;
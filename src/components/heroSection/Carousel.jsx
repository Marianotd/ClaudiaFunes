import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "/assets/portada/tarot.jpg",
    "/assets/portada/ilustraciones.jpg",
    "/assets/portada/astrologia.jpg",
];

export default function Carousel() {
    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    };

    return (
        <div className="heroSection__carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={image} />
                ))}
            </Slider>
        </div>
    );
}

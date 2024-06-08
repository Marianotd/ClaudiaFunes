import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
        small: "/assets/portada/small/tarot.jpg",
        large: "/assets/portada/large/tarot.jpg"
    },
    {
        small: "/assets/portada/small/ilustraciones.jpg",
        large: "/assets/portada/large/ilustraciones.jpg"
    },
    {
        small: "/assets/portada/small/astrologia.jpg",
        large: "/assets/portada/large/astrologia.jpg"
    },
];

export default function HeroCarousel() {
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
                    <div key={index} className='heroSection__carousel--item'>
                        <picture>
                            <source media="(min-width: 768px)" srcSet={image.large} />
                            <img src={image.small} alt={`image-${index}`} />
                        </picture>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

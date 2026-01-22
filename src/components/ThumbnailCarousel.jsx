import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Thumbs,
    EffectFade,
} from "swiper/modules";

const images = [
    "/assets/Slider_1.png",
    "/assets/Slider_2.jpg",
    "/assets/Slider_3.png",
    "/assets/Slider_4.jpg",
];

const ThumbnailCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            {/* Main Slider */}
            <Swiper
                modules={[Thumbs, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
                className="mb-5"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={src}
                            alt="Conference"
                            className="rounded-lg w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Slider */}
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={3}
                centeredSlides
                watchSlidesProgress
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        effect: 'slide',
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        effect: 'fade'
                    },
                }}
                className="cursor-pointer"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={src}
                            alt="Thumbnail"
                            className="rounded-lg opacity-50 hover:opacity-100 transition"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ThumbnailCarousel;

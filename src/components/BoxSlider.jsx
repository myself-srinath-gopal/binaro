import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const BoxSlider = () => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            navigation
            freeMode={true}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    navigation: false,
                },
                480: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                    navigation: true,
                },
                1024: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: 7,
                },
            }}
        >
            {[
                { day: 16, month: "JAN 2026" },
                { day: 17, month: "FEB 2026" },
                { day: 18, month: "MAR 2026" },
                { day: 19, month: "APR 2026" },
                { day: 20, month: "MAY 2026" },
                { day: 21, month: "JUN 2026" },
                { day: 22, month: "JUL 2026" },
                { day: 23, month: "AUG 2026" },
                { day: 24, month: "SEP 2026" },
                { day: 25, month: "OCT 2026" },
                { day: 26, month: "NOV 2026" },
                { day: 27, month: "DEC 2026" },
            ].map((item, i) => (
                <SwiperSlide key={i}>
                    <div className="bg-(--IcyBreeze) pt-5 pb-7 rounded-lg text-center group hover:bg-(--primary) transition">
                        <h5 className="text-gray-400 text-[34px] leading-[2.76rem] font-normal group-hover:text-white">
                            {item.day}
                        </h5>
                        <p className="text-xs font-medium text-gray-400 group-hover:text-white">
                            {item.month}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BoxSlider;

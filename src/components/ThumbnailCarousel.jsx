import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const ThumbnailCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [settingsFor, setSettingsFor] = useState({});
    const [settingsNav, setSettingsNav] = useState({});
    const mainSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    useEffect(() => {
        setSettingsFor({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: navSliderRef.current,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: navSliderRef.current,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: navSliderRef.current,
                    },
                },
            ],
        });

        setSettingsNav({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: mainSliderRef.current,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            beforeChange: (oldIndex, newIndex) =>
                setActiveIndex(newIndex),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        focusOnSelect: true,
                    },
                },
            ],
        });
    }, []);

    useEffect(() => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <>
            <div>
                <Slider {...settingsFor} ref={mainSliderRef} className="pb-3">
                    <div>
                        <img
                            src="/assets/Slider_1.png"
                            alt="Conference"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/Slider_2.jpg"
                            alt="Conference"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/Slider_3.png"
                            alt="Conference"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/Slider_4.jpg"
                            alt="Conference"
                            className="rounded-lg"
                        />
                    </div>
                </Slider>
                <Slider {...settingsNav} ref={navSliderRef} className="thumb">
                    <div>
                        <img
                            src="/assets/Slider_1.png"
                            alt="Thumbnail"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/Slider_2.jpg"
                            alt="Thumbnail"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/Slider_3.png"
                            alt="Thumbnail"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/Slider_4.jpg"
                            alt="Thumbnail"
                            className="rounded-lg"
                        />
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default ThumbnailCarousel;

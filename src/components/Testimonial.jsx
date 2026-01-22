import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
    return (
        <section className="bg-(--IcyBreeze) testimonial">
            <div className="max-w-6xl mx-auto px-7">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    speed={500}
                    loop={true}
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1,
                            pagination: {
                                clickable: true,
                            },
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {/* SLIDE 1 */}
                    <SwiperSlide>
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                            <div className="col-span-4 bg-(--LightSkyBlue) sm:rounded-br-[12rem] rounded-br-[11rem] sm:rounded-tl-[12rem] rounded-tl-[11rem] relative left-1 lg:inline-block hidden">
                                <img
                                    src="/assets/john.png"
                                    alt="testimonials"
                                    className="w-full h-full"
                                />
                            </div>

                            <div className="col-span-8 md:ml-28 ml-0">
                                <h2 className="max-w-72">What Our Attendees Say</h2>

                                <p className="text-lg font-normal text-(--SlateBlueText) py-10 max-w-632">
                                    My busy schedule leaves little, if any, time for blogging
                                    and social media. The Lorem Ipsum Company has been a huge
                                    part of helping me grow my business through.
                                </p>

                                <div className="flex items-center gap-8">
                                    <img
                                        src="/assets/testimonials-profile.png"
                                        alt="profile"
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <p className="text-xl font-medium text-(--secondary) pb-1">
                                            Jordhan Daniyel
                                        </p>
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* SLIDE 2 */}
                    <SwiperSlide>
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                            <div className="col-span-4 bg-(--LightSkyBlue) sm:rounded-br-[10.3rem] rounded-br-[10.3rem] sm:rounded-tl-[10.3rem] rounded-tl-[10.3rem] relative left-1 lg:inline-block hidden">
                                <img
                                    src="/assets/john.png"
                                    alt="testimonials"
                                    className="w-full h-full"
                                />
                            </div>

                            <div className="col-span-8 md:ml-28 ml-0">
                                <h2 className="max-w-72">What Our Attendees Say</h2>

                                <p className="text-[22px] leading-8 font-normal text-(--SlateBlueText) py-10 max-w-632">
                                    My busy schedule leaves little, if any, time for blogging
                                    and social media. The Lorem Ipsum Company has been a huge
                                    part of helping me grow my business through.
                                </p>

                                <div className="flex items-center gap-8">
                                    <img
                                        src="/assets/testimonials-profile.png"
                                        alt="profile"
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <p className="text-xl font-medium text-(--secondary) pb-1">
                                            Jordhan Daniyel
                                        </p>
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;

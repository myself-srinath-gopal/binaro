import React from 'react'
import { Link } from 'react-router-dom'
import ThumbnailCarousel from '../components/ThumbnailCarousel'
import { conferences } from '../data'
import BoxSlider from '../components/BoxSlider'
import Testimonials from '../components/Testimonial'
import BookingBanner from '../components/BookingBanner'
import WorkSpeakers from '../components/WorkSpeakers'

const Home = () => {
    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-7">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-8">
                        <div className='col-span-6'>
                            <p className="relative z-0 inline-block text-(--primary) text-lg font-bold before:absolute before:content-[''] before:bg-(--primary)/20 before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0 ">Starts on 16 June 2024</p>
                            <h1 className="py-4">User Experience Conference</h1>
                            <p className="text-xl text-(--SlateBlueText) font-normal md:pb-14 pb-6">We offer you a new generation of task and project management system. Plan, manage and track.</p>
                            <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
                                <Link className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden">
                                    <span className="flex! items-center gap-2">
                                        <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M232,104a8,8,0,0,0,8-8V64a16,16,0,0,0-16-16H32A16,16,0,0,0,16,64V96a8,8,0,0,0,8,8,24,24,0,0,1,0,48,8,8,0,0,0-8,8v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160a8,8,0,0,0-8-8,24,24,0,0,1,0-48ZM32,167.2a40,40,0,0,0,0-78.4V64H88V192H32Zm192,0V192H104V64H224V88.8a40,40,0,0,0,0,78.4Z"></path>
                                        </svg>
                                        <span className='p-0! border-0!'>Buy access pass</span>
                                    </span>
                                </Link>
                                <Link className="btn_outline btn-2 hover-outline-slide-down">
                                    <span className="flex! items-center gap-2">
                                        <svg className='fill-(--primary)' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                                        </svg>
                                        <span className='p-0! border-0!'>Add to calendar</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-6 lg:flex hidden items-center gap-3">
                            <div className="bg-(--ElectricAqua) relative rounded-tl-[10.3rem] rounded-br-[10.3rem] w-full">
                                <img alt="hero" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="w-full h-full" src="/assets/john.png" />
                                <div className="bg-yellow-300 rounded-3xl shadow-hero-box py-4 px-5 absolute top-16 -left-20">
                                    <p className="text-lg font-bold text-yellow-900">
                                        John Karter
                                    </p>
                                    <p className="text-base font-medium text-yellow-900 text-center">
                                        4.8 rating
                                    </p>
                                </div>
                            </div>
                            <div className="bg-(--primary) relative rounded-tr-[10.3rem] rounded-bl-[10.3rem] w-full mt-32">
                                <img alt="hero" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" className="w-full h-full" src="/assets/maria.png" />
                                <div className="bg-(--Aquamarine) rounded-3xl shadow-hero-box py-4 px-5 absolute top-24 -right-20 xl:inline-block hidden">
                                    <p className="text-lg font-bold text-green-800">
                                        Mariya John
                                    </p>
                                    <p className="text-base font-medium text-green-800 text-center">
                                        4.9 rating
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-(--IcyBreeze) relative overflow-hidden before:absolute before:content-[''] before:bg-(--PaleSkyBlu) before:w-172 before:h-172 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
                <div className="max-w-6xl mx-auto px-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-24 gap-5">
                        <div className="">
                            <ThumbnailCarousel />
                        </div>
                        <div className="md:pt-0 pt-6">
                            <h2>Best Online and Offline Conferences</h2>
                            <p className='text-lg font-normal text-(--SlateBlueText) max-w-506 md:pt-9 pt-5 md:pb-14 pb-6'>
                                Sometimes by accident, sometimes chunks as necessary making this
                                the first true generator on the Internet. recently with desktop
                                publishing software like Aldus PageMaker
                            </p>
                            <Link
                                href="/"
                                className="btn_outline btn-2 hover-outline-slide-down"
                            >
                                <span>Upcoming conferences</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <WorkSpeakers />
            <section className="pt-0">
                <div className="max-w-6xl mx-auto px-7">
                    <div className="text-center md:pb-20 pb-8">
                        <h2 className="pb-8">The Biggest Digital Event in {new Date().getFullYear()}</h2>
                        <p className="text-(--SlateBlueText) text-lg font-normal max-w-920 m-auto">Sometimes by accident, sometimes chunks as necessary making this the first true generator on the Internet. recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                    <div className="flex flex-wrap items-stretch">
                        <div className="bg-(--primary) flex items-center justify-center lg:px-16 px-8 lg:py-0 py-8 lg:rounded-l-[1.4rem] rounded-t-[1.4rem] md:rounded-tr-none md:rounded-bl-[1.4rem] rounded-bl-none md:w-2/4 w-full">
                            <img alt="ticket" loading="lazy" src="/assets/ticket.png" className='w-full object-cover rounded-2xl' />
                        </div>
                        <div className="bg-(--ElectricAqua) lg:py-14 py-6 lg:px-16 px-8 lg:rounded-r-[1.4rem] rounded-b-[1.4rem] md:rounded-bl-none md:rounded-tr-[1.4rem] rounded-tr-none md:w-2/4 w-full">
                            <div className="bg-white rounded-[1.4rem] lg:px-11 px-4 pt-8 pb-10">
                                <h6 className="text-[26px] leading-[2.1rem] font-bold text-(--secondary) pb-5">Ticket Prices</h6>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center md:gap-6 gap-2">
                                        <span className="text-[1.2rem] leading-8 font-bold text-(--secondary)">₹8,999</span>
                                        <p className="text-lg font-normal text-(--secondary)">Early birds</p>
                                        <p className="text-sm font-normal text-(--SlateBlueText)">Until May 20, 2026</p>
                                    </div>
                                    <div className="flex flex-wrap items-center md:gap-4 gap-2">
                                        <span className="text-[1.2rem] leading-8 font-bold text-(--secondary)">₹13,499</span>
                                        <p className="text-lg font-normal text-(--secondary)">Late birds</p>
                                        <p className="text-sm font-normal text-(--SlateBlueText)">After May 20, 2026</p>
                                    </div>
                                    <a href="/symposium-nextjs/" className="btn btn-1 hover-filled-slide-down w-full text-center rounded-lg overflow-hidden">
                                        <span>Book ticket</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-(--IcyBreeze)">
                <div className="max-w-7xl mx-auto px-7">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center max-w-500 mx-auto">
                        <div className="col-span-5 py-0 px-7">
                            <h2>Previous Year Highlights</h2>
                            <p className="text-lg font-normal text-(--SlateBlueText) max-w-404 pt-7 pb-11">
                                Many variations of passages of Lorem Ipsum available but the
                                majority have suffered alteration in some form injected humour,
                                or randomised words
                            </p>
                            <div className="flex items-center flex-wrap gap-[1.8rem]">
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-(--primary)!">17K+</h2>
                                    <p className="text-lg font-medium text-(--secondary)">
                                        Ticket confirmed
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-(--primary)!">16</h2>
                                    <p className="text-lg font-medium text-(--secondary)">
                                        Partners
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-(--primary)!">180K+</h2>
                                    <p className="text-lg font-medium text-(--secondary)">
                                        Participants
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-7 px-7">
                            <div className="mt-14">
                                <img src="/assets/slide-1.png" alt="" className='object-cover rounded-2xl' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='upcoming'>
                <div className="max-w-5xl mx-auto">
                    <div className="max-w-6xl mx-auto px-7">
                        <h2 className="text-center pb-10">Upcoming Conference</h2>
                        <div>
                            <div className='slide-container'>
                                <BoxSlider />
                            </div>
                            <div>
                                <div className="flex items-center flex-wrap w-full border border-gray-200 md:px-14 px-6 md:mt-14 mt-6 rounded-[1.4rem]">
                                    {conferences.slice(0, 2).map((conference, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center lg:gap-0 gap-4 flex-wrap justify-between w-full md:py-12 py-5 border-b border-gray-200 last:border-b-0"
                                        >
                                            <div>
                                                <h6 className="text-[26px] leading-[2.1rem] font-bold text-(--secondary) max-w-72">
                                                    {conference.title}
                                                </h6>
                                            </div>
                                            <div className="flex items-center flex-wrap gap-[1.8rem]">
                                                <div className="flex items-center">
                                                    {conference.profiles.map((profile, profileIndex) => (
                                                        <img
                                                            key={profileIndex}
                                                            src={profile}
                                                            alt="profile"
                                                            className={`w-16 h-16 rounded-full ${profileIndex !== conference.profiles.length - 1
                                                                ? "-mr-3"
                                                                : ""
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div>
                                                    <p className="text-lg font-normal text-(--SlateBlueText)">
                                                        Speech by
                                                    </p>
                                                    <p className="text-lg font-medium text-(--secondary)">
                                                        {conference.speakers}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <Link
                                                    href={conference.buttonLink}
                                                    className="btn_outline btn-2 btn_outline hover-outline-slide-down"
                                                >
                                                    <span>{conference.buttonText}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <BookingBanner />
        </>
    )
}

export default Home
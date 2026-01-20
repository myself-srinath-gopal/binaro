import React from 'react'
import { Link } from 'react-router-dom'

const BookingBanner = () => {
    return (
        <section className='pt-0!'>
            <div className='max-w-6xl mx-auto px-7'>
                <div className="bg-(--primary) relative md:mx-auto mx-0 overflow-hidden py-0 rounded-[1.4rem] lg:-mb-48 md:mt-20 mt-10">
                    <div className="flex flex-wrap items-center justify-between md:p-20 p-5">
                        <div className="md:w-3/5 w-full absolute top-0 left-0 md:block hidden">
                            <img alt="hero" loading="lazy" className="w-full h-auto object-cover" src="/assets/event-ticket.png" />
                        </div>
                        <div className="md:w-2/5 w-full ml-auto lg:text-start text-center">
                            <p className="sm:text-4xl text-[28px] leading-9 font-bold text-white lg:max-w-92 max-w-full pb-9">
                                Become a Part of the Digital Evolution!
                            </p>
                            <Link className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden before:bg-(--ElectricAqua)!" to="#">
                                <span className="sm:px-20! px-10! border-(--ElectricAqua)! text-white!">
                                    Book ticket
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookingBanner
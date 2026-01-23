import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="border-t-2 border-(--dark_border) bg-(--MidnightNavyText)">
            <div className="max-w-6xl mx-auto px-7">
                <div className="flex items-center justify-between flex-wrap md:pt-44 pt-16 md:pb-20 pb-6 border-b border-(--dark_border)">
                    <Link className='flex items-center'>
                        <img src="/assets/favicon.png" alt="" className='h-12 object-cover' />
                        <div className="flex flex-col leading-5 text-lg font-[Barlow] font-bold ml-1.5">
                            <span className='text-white'>BINARO</span>
                            <span className='text-(--primary) tracking-tighter'>EVENTS</span>
                        </div>
                    </Link>
                    <div>
                        <ul className="flex items-center flex-wrap md:gap-7.5 gap-3 md:py-0 py-5">
                            <li className="text-(--PaleCerulean) sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-(--primary)">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-(--PaleCerulean) sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-(--primary)">
                                <Link to="/speakers">Speakers</Link>
                            </li>
                            <li className="text-(--PaleCerulean) sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-(--primary)">
                                <Link to="/schedules">Schedules</Link>
                            </li>
                            <li className="text-(--PaleCerulean) sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-(--primary)">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link to="#" className='group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-(--PaleCerulean) group-hover:fill-(--primary) transition-colors duration-300' viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-(--PaleCerulean) group-hover:fill-(--primary) transition-colors duration-300' viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className='group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-(--PaleCerulean) group-hover:fill-(--primary) transition-colors duration-300' viewBox="0 0 256 256"><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 items-center py-8">
                    <div className="col-span-5">
                        <p className="text-base font-normal text-(--PaleCerulean)">
                            &copy; {new Date().getFullYear()} Binaro Events. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
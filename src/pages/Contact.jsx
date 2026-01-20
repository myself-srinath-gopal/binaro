import React from 'react'
import HeroSub from '../components/HeroSub'
import ContactInfo from '../components/ContactInfo'
import BookingBanner from '../components/BookingBanner'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <HeroSub
                title="Contact Us"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
                breadcrumbLinks={[
                    { href: "/", text: "Home" },
                    { href: "/contact", text: "Contact" },
                ]}
            />
            <ContactInfo />
            <section className="md:py-24 py-10 dark:bg-darkmode">
                <div className="max-w-6xl mx-auto px-7">
                    <div>
                        <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-6 border-b border-gray-300 border-opacity-50 pb-11">
                            <div className="col-span-3">
                                <h2 className="text-(--secondary) max-w-56 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-9 font-bold">Chennai Head Office</h2>
                            </div>
                            <div className="col-span-3">
                                <p className="sm:text-2xl text-xl text-(--secondary) font-normal max-w-68 leading-10">32 ECR Road Zip code 600085</p>
                            </div>
                            <div className="col-span-3">
                                <Link href="mailto:headoffice@binora.com" className="sm:text-2xl text-xl text-(--secondary) font-medium underline hover:text-(--RegalBlue)">headoffice@binora.com</Link>
                                <Link href="tel:9876543210" className="sm:text-2xl text-xl text-(--secondary) flex items-center gap-2 hover:text-opacity-100 w-fit"><span className="text-(--primary)">Call</span>9876543210</Link>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-1 xl:gap-30 gap-6 pt-12">
                            <div className="col-span-3">
                                <h2 className="text-(--secondary) max-w-56 sm:text-[40px] sm:leading-[3.4rem] text-[28px] leading-9 font-bold">Coimbatore Office</h2>
                            </div>
                            <div className="col-span-3">
                                <p className="sm:text-2xl text-xl text-(--secondary) font-normal max-w-68 leading-10">85 RS Puram Zip code 622032</p>
                            </div>
                            <div className="col-span-3">
                                <Link href="mailto:office@binora.com" className="sm:text-2xl text-xl text-(--secondary) font-medium underline hover:text-(--RegalBlue)">office@binora.com</Link>
                                <Link href="tel:9876543211" className="sm:text-2xl text-(--secondary) text-xl flex items-center gap-2 w-fit"><span className="text-(--primary)">Call</span>9876543211</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BookingBanner />
        </>
    )
}

export default Contact
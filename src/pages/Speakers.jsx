import React from 'react'
import WorkSpeakers from '../components/WorkSpeakers'
import Testimonials from '../components/Testimonial'
import BookingBanner from '../components/BookingBanner'
import HeroSub from '../components/HeroSub'

const Speakers = () => {
    return (
        <>
            <HeroSub
                title="Our Visionary Speakers"
                description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive."
                breadcrumbLinks={[
                    { href: "/", text: "Home" },
                    { href: "/speakers", text: "Speakers" },
                ]}
            />
            <WorkSpeakers showTitle={false} />
            <Testimonials />
            <BookingBanner />
        </>
    )
}

export default Speakers
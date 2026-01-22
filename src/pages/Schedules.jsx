import React from 'react'
import HeroSub from '../components/HeroSub'
import BoxSlider from '../components/BoxSlider'
import SchedulesBox from '../components/SchedulesBox'
import Testimonials from '../components/Testimonial'
import BookingBanner from '../components/BookingBanner'

const Schedules = () => {
    return (
        <div className='px-7'>
            <HeroSub
                title="Event Schedules"
                description="Stay updated with our comprehensive schedules, designed to keep you informed and organized."
                breadcrumbLinks={[
                    { href: '/', text: 'Home' },
                    { href: '/schedules', text: 'Schedules' },
                ]}
            />
            <section>
                <div className="max-w-6xl mx-auto upcoming">
                    <BoxSlider />
                    <SchedulesBox />
                </div>
            </section>
            <div>
                <Testimonials />
                <BookingBanner />
            </div>
        </div>
    )
}

export default Schedules
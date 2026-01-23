import React from 'react'
import { speakers } from '../data'

const WorkSpeakers = ({ showTitle = true }) => {
    return (
        <section className='px-7'>
            {showTitle && (
                <h2 className="text-center pb-12">World Class Speakers</h2>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {
                    speakers.map((speaker, index) => (
                        <div key={index} className={`col-span-1 overflow-hidden ${index % 2 === 1 ? "lg:mt-28 mt-0" : ""}`}>
                            <div className="overflow-hidden rounded-lg group">
                                <img
                                    alt={speaker.name}
                                    loading="lazy"
                                    width="0"
                                    height="0"
                                    decoding="async"
                                    data-nimg="1"
                                    className="object-cover w-full h-full transition-all duration-400 group-hover:scale-110"
                                    src={speaker.image}
                                />
                            </div>
                            <div className="pt-6">
                                <h6 className="text-[28px] leading-9 font-bold text-(--secondary)">
                                    {speaker.name}
                                </h6>
                                <span className="text-lg font-normal text-(--SlateBlueText)">
                                    {speaker.title}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WorkSpeakers
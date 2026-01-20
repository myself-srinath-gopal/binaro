import React from "react";
import {Link} from "react-router-dom";
import { conferences, intermissions } from "../data";

const SchedulesBox = () => {
    return (
        <>
            <div className="flex items-center flex-wrap w-full border border-gray-300 md:px-14 px-6 md:mt-14 mt-6 rounded-[1.4rem]">
                {conferences.map((conference, index) => (
                    <React.Fragment key={index}  >
                        <div className="flex items-center flex-wrap gap-6 justify-between w-full md:py-12 py-5 border-b border-gray-300 last:border-b-0">
                            <div className="lg:min-w-96 min-w-max" >
                                <h6 className="text-[22px] leading-[2.1rem] font-bold text-(--secondary) max-w-[18rem]">
                                    {conference.title}
                                </h6>
                            </div>
                            <div className="flex items-center flex-wrap gap-7.5 lg:min-w-96 min-w-max">
                                <div className="flex items-center">
                                    {conference.profiles.map((profile, profileIndex) => (
                                        <img
                                            key={profileIndex}
                                            src={profile}
                                            alt="profile"
                                            className={`w-16! h-16! rounded-full ${profileIndex !== conference.profiles.length - 1
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
                            <div className="lg:min-w-40 min-w-max" >
                                <Link
                                    to={conference.buttonLink}
                                    className="btn_outline btn-2 btn_outline hover-outline-slide-down"
                                >
                                    <span>{conference.buttonText}</span>
                                </Link>
                            </div>
                        </div>

                        {/* Insert intermissions at appropriate places */}
                        {index === 1 && (
                            <div className="flex items-center flex-wrap justify-between w-full md:py-12 py-5 border-b border-gray-300">
                                <div className="lg:min-w-96 min-w-max">
                                    <h6 className="text-[22px] leading-[2.1rem] font-bold text-(--secondary) max-w-[18rem]">
                                        {intermissions[0].title}
                                    </h6>
                                </div>
                                <div className="flex items-center flex-wrap gap-7.5 lg:min-w-96 min-w-max">
                                    <div className="flex items-center">
                                        <img
                                            src={intermissions[0].image}
                                            alt="coffee break"
                                            className="w-10! h-10! rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-lg font-normal text-(--SlateBlueText) dark:text-opacity-80">
                                            {intermissions[0].time}
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:min-w-40 min-w-max"></div> {/* No button for intermission row */}
                            </div>
                        )}

                        {index === 3 && (
                            <div className="flex items-center flex-wrap justify-between w-full md:py-12 py-5 border-b border-gray-300">
                                <div className="lg:min-w-96 min-w-max">
                                    <h6 className="text-[22px] leading-[2.1rem] font-bold text-(--secondary) max-w-[18rem]">
                                        {intermissions[1].title}
                                    </h6>
                                </div>
                                <div className="flex items-center flex-wrap gap-7.5 lg:min-w-96 min-w-max">
                                    <div className="flex items-center">
                                        <img
                                            src={intermissions[1].image}
                                            alt="lunch break"
                                            className="w-10! h-10! rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-lg font-normal text-(--SlateBlueText) dark:text-opacity-80">
                                            {intermissions[1].time}
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:min-w-40 min-w-max" ></div> {/* No button for intermission row */}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

export default SchedulesBox;

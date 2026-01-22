import React, { FC } from "react";
import Breadcrumb from "./Breadcrumb";


const HeroSub = ({ title, description, breadcrumbLinks }) => {

    return (
        <section className="text-start pt-32! pb-0!">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center justify-between">
                    <div>
                        <h2 className="md:text-[40px] leading-[3.4rem] text-4xl font-bold text-(--secondary)">{title}</h2>
                        <p className="text-lg text-(--SlateBlueText) font-normal max-w-lg w-full mt-3 px-0">
                            {description}
                        </p>
                    </div>
                    <div>
                        <Breadcrumb links={breadcrumbLinks} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSub;
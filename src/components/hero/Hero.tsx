import { PiGreaterThanBold } from 'react-icons/pi';
import landingImage from '/images/landing-page.png';
import React from "react";
import { HeroSectionProps } from './Hero.types';

const HeroSection: React.FC<HeroSectionProps> = ({ heading, tagline, description, buttonText }) => {
    return (
        <section
            className="relative w-full lg:h-screen bg-cover bg-center flex items-center text-white"
            style={{
                backgroundImage: `url(${landingImage})`, // Replace with your image path
            }}
        >

            {/* Content */}
            <div className="relative max-w-4xl px-6 md:px-12 lg:px-16 pt-10 max-[1024px]:p-10">
                {/* Tagline */}
                <div className="flex mb-4">
                    <span className="text-sm font-medium uppercase bg-gray-description/60 text-gray-custom py-1 px-3 rounded">
                        {tagline}
                    </span>
                </div>

                {/* Title */}
                <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl leading-tight">
                    {heading}
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-lg font-medium text-gray-custom/50 leading-relaxed max-w-2xl">
                    {description}
                </p>

                {/* Button */}
                <div className="mt-8">
                    <button
                        className="relative flex items-center justify-between w-[200px] h-12 pl-6 bg-blue-custom text-white rounded-full overflow-hidden group"
                    >
                        {/* Text */}
                        <span className="text-sm font-semibold uppercase relative z-10 transition-all duration-300 group-hover:text-white">
                            {buttonText}
                        </span>

                        {/* Arrow Icon */}
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-title text-white rounded-full relative z-10">
                            <PiGreaterThanBold className="w-5 h-3 font-semibold" />
                        </div>

                        {/* Hover Effect */}
                        <span className="absolute right-0 h-full bg-blue-title w-0 transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;

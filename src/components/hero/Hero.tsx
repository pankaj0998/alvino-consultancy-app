import React from "react";
import { HeroSectionProps } from './Hero.types';
import { useNavigate } from 'react-router-dom';
import Landing from '/images/landingPage.png';

const HeroSection: React.FC<HeroSectionProps> = ({ heading, description, buttonText, route }) => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full lg:h-screen">
            <section
                className="relative w-full lg:h-screen bg-cover bg-center flex items-center lg:top-0 text-white"
                style={{
                    backgroundImage: `url(${Landing})`, // Replace with your image path
                    // objectFit: 'cover'
                }}
            >
                {/* Content */}
                <div className="relative max-w-7xl px-6 md:px-12 lg:px-16 pt-10 max-[1024px]:p-16 max-[1024px]:mt-16">

                    {/* Title */}
                    <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl leading-tight">
                        {heading}
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-4 text-lg font-medium text-gray-custom leading-relaxed">
                        {description}
                    </p>

                    {/* Button */}
                    <div className="mt-8">
                        <button
                            onClick={() => navigate(route)}
                            className="relative flex items-center justify-center w-[150px] h-10 text-blue-custom border border-custom rounded-md bg-white overflow-hidden group opacity-90"
                        >
                            {/* Background effect */}
                            <span className="absolute inset-0 bg-gray-custom scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></span>

                            {/* Button Text */}
                            <span className="relative z-10 text-xs font-semibold tracking-wide uppercase group-hover:text-black">
                                {buttonText}
                            </span>
                        </button>
                    </div>

                </div>
            </section>
        </div>

    );
};

export default HeroSection;

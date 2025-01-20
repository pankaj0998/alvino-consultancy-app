import React, { useState } from "react";
import { CardProps } from "./SubServiceCard.types";
import businessImage from '/images/tax-regulatory/business-tax.png'

const SubServiceCard: React.FC<CardProps> = ({ image, title, description, cardData = [], toggler, isButtonRequired = false }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="w-full rounded-lg shadow-lg mb:mt-6 text bg-gray-custom overflow-hidden">
            {/* Image Section */}
            <img className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110" src={image ?? businessImage} alt="Card Image" />

            {/* Content Section */}
            <div className={`md:max-h-full max-[600px]:p-4 ${cardData && description ? 'px-6 pt-6 pb-0' : 'px-6 pt-6 pb-0'}`}>
                <h2 className="text-xl max-[600px]:text-[16px] font-bold text-blue-title mb-2">{title ?? "Title"}</h2>

                {/* Optional Description */}
                {description && (
                    <p className="text-gray-description mb-4 max-[600px]:text-[12px]">{description ?? "Description"}</p>
                )}

                {/* Subtitle and SubDescription */}
                {cardData && cardData.map((data, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="font-semibold text-gray-800 mb-1 max-[600px]:text-[14px]">
                            {index + 1}. {data.subtitle ?? "SubTitle"}
                        </h3>
                        <p className="text-gray-description max-[600px]:text-[12px]">
                            {showMore || index === 0
                                ? (data.subDescription ?? "SubDescription")
                                : null}
                        </p>
                    </div>
                ))}

                {/* Show More Button */}
                {cardData.length > 1 && (
                    <button
                        className="text-blue-custom focus:outline-none text-sm pb-5 lowercase hover:no-underline"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'VIEW LESS' : 'VIEW MORE'}
                    </button>
                )}

                {/* Button Container */}
                {isButtonRequired && <div className={`flex justify-center items-center mt-4 ${cardData ? 'pb-5' : 'pb-1'}`}>
                    <button
                        className="relative flex justify-center items-center w-[150px] h-10 text-gray-description border border-gray-description rounded-md overflow-hidden group"
                        onClick={toggler}
                    >
                        {/* Text */}
                        <span className="text-[12px] uppercase font-semibold relative z-10 transition-all duration-300 group-hover:text-white">
                            CLOSE
                        </span>

                        {/* Hover Effect */}
                        <span className="absolute inset-0 bg-gray-description scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></span>
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default SubServiceCard;
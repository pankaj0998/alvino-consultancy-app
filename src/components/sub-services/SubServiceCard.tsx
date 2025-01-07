import React, { useState } from "react";
import { CardProps } from "./SubServiceCard.types";
import businessImage from '/images/business-tax.png'

const SubServiceCard: React.FC<CardProps> = ({ image, title, description, cardData = [] }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg max-h-max pt-6">
            {/* Image Section */}
            <img className="w-full h-48 object-cover rounded-t-lg" src={image ?? businessImage} alt="Card Image" />

            {/* Content Section */}
            <div className={`max-[600px]:p-4 bg-gray-custom ${cardData && description ? 'p-6' : 'px-6 pt-6 pb-0'}`}>
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
                        className="text-blue-custom hover:underline focus:outline-none text-sm"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'SHOW LESS' : 'SHOW MORE'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default SubServiceCard;
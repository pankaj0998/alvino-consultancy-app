import React from "react";
import { TeamInfoProps } from "./TeamInfo.types";
import InfoCard from "../info-card/InfoCard";

const TeamInfo: React.FC<TeamInfoProps> = ({ info, description, isAlignRight = false, listItems }) => {
    return (
        <div
            className={`grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-6 items-start lg:px-10 pb-20 `}
        >
            {/* Info Card - Adjust for larger size */}
            <div className={`col-span-1 lg:col-span-3 flex justify-center ${isAlignRight ? 'lg:order-last' : 'lg:order-first'}`}>
                <InfoCard {...info} />
            </div>

            {/* Description Section */}
            <div className="col-span-1 lg:col-span-9 text-justify">
                <p className="text-gray-description md:text-base leading-6 md:px-10" dangerouslySetInnerHTML={{ __html: description }}></p>
                {/* Unordered List */}
                {listItems && listItems.length > 0 && (
                    <ul className="list-disc ml-5 md:px-10">
                        {listItems.map((item, index) => (
                            <li key={index} className="text-gray-description">{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TeamInfo;

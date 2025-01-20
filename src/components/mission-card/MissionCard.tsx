import React from "react"
import { MissionCardTypeProps } from "./MissionCard.types";

const MissionCard: React.FC<MissionCardTypeProps> = ({ title, description, backgroundImage }) => {
    return (
        <div
            className={`relative h-fit md:h-[250px] bg-cover bg-center flex text-white p-10`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="relative w-full p-6">
                {/* Title */}
                <div className="flex mb-4">
                    <span className="text-sm font-medium uppercase bg-gray-description text-white py-1 px-3 rounded">
                        {title}
                    </span>
                </div>

                {/* Description */}
                <p className="text-lg font-light italic leading-relaxed text-white w-full">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MissionCard;
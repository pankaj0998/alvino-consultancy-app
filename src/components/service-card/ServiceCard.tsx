import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiGreaterThanBold } from "react-icons/pi";
import { ServiceCardProps } from './ServiceCard.types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, imageUrl, className, route, style }) => {
    const navigate = useNavigate();

    return (
        <div className={`bg-white rounded-lg overflow-hidden mb-8 mx-2 ${className}`}>
            <div className="relative h-48">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="pt-3">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
                <p className="text-gray-400 mb-6 text-wrap">{description}</p>
                <button
                    onClick={() => navigate(route)}
                    className="relative flex items-center justify-between w-[150px] h-10 pl-4 bg-white text-black border rounded-full overflow-hidden group"
                >
                    {/* Text */}
                    <span className="text-[12px] font-semibold relative z-10 transition-all duration-300 group-hover:text-white">
                        {buttonText}
                    </span>

                    {/* Arrow Icon */}
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-description text-white rounded-full relative z-10">
                        <PiGreaterThanBold className="w-5 h-5" />
                    </div>

                    {/* Hover Effect */}
                    <span className="absolute right-0 h-full bg-gray-description w-0 transition-all duration-500 ease-out group-hover:w-full rounded-full"></span>
                </button>

            </div>
        </div>
    );
};

export default ServiceCard;

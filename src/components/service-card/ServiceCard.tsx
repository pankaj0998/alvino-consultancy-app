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
                    className="flex items-center gap-2 pl-4 py-2 bg-white text-black border border-gray-600 rounded-full"
                >
                    {buttonText}
                    <PiGreaterThanBold className="w-6 h-6 ml-5 flex items-center justify-center bg-gray-500 text-white rounded-full" />
                </button>

            </div>
        </div>
    );
};

export default ServiceCard;

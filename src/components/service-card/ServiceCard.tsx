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
                    className="flex items-center justify-between w-[150px] h-10 pl-4 bg-white hover:bg-slate-100 text-black border border-gray-custom rounded-full shadow-md transition-all duration-300 ease-in-out"
                >
                    <span className="text-sm font-medium">{buttonText}</span>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-description text-white rounded-full hover:bg-gray-500">
                        <PiGreaterThanBold className="w-5 h-5" />
                    </div>
                </button>

            </div>
        </div>
    );
};

export default ServiceCard;

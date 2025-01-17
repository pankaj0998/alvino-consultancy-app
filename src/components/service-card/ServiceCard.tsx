import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PiGreaterThanBold } from "react-icons/pi";
import { ServiceCardProps } from './ServiceCard.types';
import './ServiceCard.css'

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, imageUrl, className, route, style }) => {
    const navigate = useNavigate();

    return (
        <div className={`rounded-lg overflow-hidden mb-12 mx-4 ${className}`}>
            <div className="relative h-48">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div className="pt-3">
                <h3 className="text-2xl font-bold text-black-900 my-4">{title}</h3>
                <p className="text-black mb-6 text-wrap truncate-multiline">{description}</p>
                <button
                    onClick={() => navigate(route)}
                    className="relative flex items-center justify-center w-[150px] h-10 text-gray-description border border-custom rounded-md bg-white overflow-hidden group"
                >
                    {/* Background effect */}
                    <span className="absolute inset-0 bg-gray-custom scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-center"></span>

                    {/* Button Text */}
                    <span className="relative z-10 text-[12px] font-semibold tracking-wide group-hover:text-black">
                        {buttonText}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;

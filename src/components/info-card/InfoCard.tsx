import React from "react";
import { InfoCardTypeProps, SocialMedia } from "./InforCard.types";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const InfoCard: React.FC<InfoCardTypeProps> = ({ name, position, image, socialMedia }) => {
    const renderIcon = (type: SocialMedia) => {
        switch (type) {
            case SocialMedia.FACEBOOK:
                return <RiFacebookBoxFill />;
            case SocialMedia.INSTAGRAM:
                return <FaInstagramSquare />;
            case SocialMedia.LINKEDIN:
                return <FaLinkedin />;
            case SocialMedia.GMAIL:
                return <IoMdMail />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center">
            {/* Card Content */}
            <div className="w-72 h-96 rounded-lg shadow-lg bg-white flex flex-col pb-5 overflow-hidden"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} >

                <div className="relative p-6 flex items-center">
                    {/* Vertical Divider */}
                    <div className="w-1 h-12 bg-white rounded-full"></div>

                    {/* Name and Position */}
                    <div className="ml-3">
                        <h3 className="text-lg font-bold text-white">{name}</h3>
                        <p className="text-sm text-blue-light">{position}</p>
                    </div>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-5 mt-4">
                {socialMedia.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-custom hover:text-blue-500 text-2xl"
                    >
                        {renderIcon(item.type)}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default InfoCard;

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
        <div className="w-72 h-96 rounded-lg shadow-lg bg-brown-custom p-6 flex flex-col">
            {/* Name and Position */}
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-sm text-blue-light">{position}</p>
            <div className="w-7 h-1 bg-white my-2 rounded-lg"></div>

            {/* Social Media Links and Image Side-by-Side */}
            <div className=" relative flex flex-row justify-between">
                <div className="flex flex-col space-y-4">
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
                {/* Image Positioned to the Right */}
                <div className=" w-full h-full rounded-lg overflow-hidden ml-4 object-cover opacity-80">
                    {image && <img
                        src={image}
                        alt="Member"
                        className="w-full h-64"
                    />}
                </div>
            </div>
        </div>
    );
};

export default InfoCard;

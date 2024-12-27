import React from 'react';
import { SubBannerTypeProps } from './SubBanner.types';

const SubBanner: React.FC<SubBannerTypeProps> = ({
    title,
    description,
    backgroundImage,
    linerImageUrl,
}) => {
    return (
        <div
            className="bg-cover bg-center w-full h-[300px] flex items-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            {/* Content */}
            <div className="relative z-10 px-8 w-full md:w-2/3">
                <div className="flex items-center gap-2">
                    {/* Vertical Line Image */}
                    {linerImageUrl && (
                        <div
                            className="w-4 h-20 bg-no-repeat bg-contain bg-center"
                            style={{ backgroundImage: `url(${linerImageUrl})` }}
                        ></div>
                    )}
                    {/* Title */}
                    <h2 className="text-4xl font-bold">{title}</h2>
                </div>
                {/* Description */}
                <p className="mt-4 pl-4 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default SubBanner;

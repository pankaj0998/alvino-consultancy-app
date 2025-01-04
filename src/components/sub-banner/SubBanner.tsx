import React from 'react';
import { SubBannerTypeProps } from './SubBanner.types';

const SubBanner: React.FC<SubBannerTypeProps> = ({
    title,
    description,
    backgroundImage,
    linerImageUrl,
    buttonBackroundColor,
    buttonText
}) => {
    return (
        <div
            className={`bg-cover bg-center w-full ${!buttonText ? 'h-[300px]' : 'h-[400px]'} max-[700px]:${!buttonText ? 'h-[100px]' : 'h-[200px]'} flex items-center text-white pl-10 max-[600px]:p-0 max-[1024px]:mt-10`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            {/* Content */}
            <div className="relative z-10 px-8 w-full md:w-2/3">
                <div className="flex items-center gap-2">
                    {/* Vertical Line Image */}
                    {linerImageUrl && (
                        <div
                            className="w-4 h-20 max-[600px]:h-10 bg-no-repeat bg-contain bg-center"
                            style={{ backgroundImage: `url(${linerImageUrl})` }}
                        ></div>
                    )}
                    {/* Title */}
                    <h2 className="text-4xl max-[600px]:text-[24px] font-bold">{title}</h2>
                </div>
                {/* Description */}
                <p className="mt-4 pl-4 text-gray-300 max-[600px]:text-[14px]">{description}</p>
                {buttonText && (
                    <div className='mt-14 pl-4'>
                        <button
                            className={`flex items-center justify-center w-[25%] h-10 hover:bg-gray-400 text-white border border-gray-description rounded ${buttonBackroundColor}`}
                        >
                            <span className="text-sm font-medium flex justify-center items-center">{buttonText.toUpperCase()}</span>
                        </button>
                    </div>
                )}
            </div>

        </div>
    );
};

export default SubBanner;

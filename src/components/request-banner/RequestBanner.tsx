import React from "react";
import { RequestBannerProps } from "./RequestBanner.types";

const RequestBanner: React.FC<RequestBannerProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between w-full mx-auto lg:py-24 lg:px-16 space-x-6 max-[1024px]:p-10">
            {/* Left Side - Text */}
            <div className="mr-10 ml-7 lg:mb-0 lg:w-1/2">
                <h2 className="text-black text-4xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-500 text-lg mb-4 lg:mb-0">
                    {description}
                </p>
            </div>

            {/* Right Side - Form */}
            <div className=" pr-12 lg:w-1/2">
                <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name *"
                        className="bg-gray-custom rounded-md p-2 w-full h-12 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="E-mail *"
                        className="bg-gray-custom rounded-md p-2 w-full outline-none"
                    />
                    {/* Phone input and send button on the same row */}
                    <div className="md:col-span-2 flex gap-4">
                        <input
                            type="tel"
                            placeholder="Phone *"
                            className="bg-gray-custom rounded-md p-2 w-full h-12 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#5991FF] hover:bg-[#4A7FE5] text-white font-medium text-sm p-2 rounded-md transition-colors"
                        >
                            SEND NOW
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RequestBanner;

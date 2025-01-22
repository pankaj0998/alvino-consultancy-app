import React from "react"
import { InformationScreenTypeProps } from "./InformationScreen.types"

const InformationScreen: React.FC<InformationScreenTypeProps> = ({ image, content, alignImageRight = false, listIcon: ListIcon }) => {
    return (
        <div className="flex flex-col md:flex-row w-full px-10">
            {/* Image Section*/}
            <div className={`w-full md:w-1/2 ${alignImageRight ? 'order-last' : 'order-first'}`}>
                <img
                    src={image}
                    alt="Information Image"
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Content Section */}
            <div className="w-full md:w-1/2 lg:p-6 mt-8">
                {/* <div className=" flex justify-center rounded bg-blue-light w-fit">
                    <span className="text-sm font-medium  text-blue-500 py-1 px-3 rounded">{content.title.toUpperCase()}</span>
                </div> */}
                <h2 className="text-4xl font-semibold mt-4 text-blue-title">{content.heading}</h2>
                <p className="text-gray-description font-medium mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.paragraph }}></p>

                {/* List Items */}
                <ul className="mt-6 space-y-4">
                    {content.list.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            {ListIcon && (
                                <div className="flex items-center justify-center w-6 h-6 bg-gray-description rounded-full">
                                    <ListIcon className="text-white w-3" />
                                </div>
                            )}
                            <span className="text-blue-title text-lg font-medium transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"><a href={item.route}>{item.list}</a></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default InformationScreen;
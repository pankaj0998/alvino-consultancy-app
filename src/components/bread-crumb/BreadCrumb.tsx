import React from "react";
import { BreadCrumbProps } from "./BreadCrumbProps";
import { Link } from "react-router-dom";

const Breadcrumb: React.FC<BreadCrumbProps> = ({ elements, separator = "→" }) => {
    return (
        <div className="flex items-center px-10 mt-5 ml-10">
            {elements.map((element, index) => (
                <React.Fragment key={index}>
                    {/* Check if element has a link */}
                    {element.link ? (
                        <Link to={element.link} className={`${(index === elements.length - 1) ? 'text-blue-custom' : 'text-black'} font-xs hover:underline`}>
                            {element.content}
                        </Link>
                    ) : (
                        <span>{element.content}</span>
                    )}

                    {/* Add separator except after the last element */}
                    {index < elements.length - 1 && (
                        <span className="mx-2">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
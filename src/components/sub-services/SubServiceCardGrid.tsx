import React from "react";
import { CardGridProps } from "./SubServiceCard.types";
import SubServiceInfo from "./SubService";


const SubServiceCardGrid: React.FC<CardGridProps> = ({ cards }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 px-10 m-10 max-[600px]:p-0`}>
            {cards.map((card, index) => (
                <SubServiceInfo key={index} {...card} />
            ))}
        </div>
    );
};

export default SubServiceCardGrid;
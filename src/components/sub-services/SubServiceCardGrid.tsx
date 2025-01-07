import React from "react";
import SubServiceCard from "./SubServiceCard";
import { CardGridProps } from "./SubServiceCard.types";

const SubServiceCardGrid: React.FC<CardGridProps> = ({ cards }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10 m-10 max-[600px]:p-0`}>
            {cards.map((card, index) => (
                <SubServiceCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SubServiceCardGrid;
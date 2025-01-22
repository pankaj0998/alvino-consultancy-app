// Assuming cardData is exported from ServiceCard.tsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceCardGridProps } from './ServiceCard.types';

const ServiceCardGrid: React.FC<ServiceCardGridProps> = ({ cards }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:px-10`}>
            {cards.map((card, index) => (
                <ServiceCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    imageUrl={card.imageUrl}
                    className={card.className}
                    route={card.route}
                    style={card.style}
                />
            ))}
        </div>
    );
};

export default ServiceCardGrid;

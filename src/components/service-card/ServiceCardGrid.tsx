// Assuming cardData is exported from ServiceCard.tsx
import { cardData } from './service-card';
import ServiceCard from './ServiceCard';

const ServiceCardGrid = () => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-10`}>
            {cardData.map((card, index) => (
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

import React from 'react';
import { ContentProps } from './Content.type';
import './ContentComponent.css'
const ContentComponent: React.FC<ContentProps> = ({ title, description, heading }) => {

    return (
        <div className='px-10'>
            {heading && <h3 className="text-4xl font-semibold my-4 text-blue-title uppercase">{heading}</h3>}
            {title && <h2 className="text-2xl font-semibold my-4 text-blue-title uppercase">{title}</h2>}
            <p className="text-gray-description md:text-base leading-6 list" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
};

export default ContentComponent;

import React, { useState } from 'react';
import { CardData, SubServiceProps } from './SubServiceCard.types';
import './SubService.css'
import Modal from '../modal/Modal';

const SubServiceInfo: React.FC<SubServiceProps> = ({ title, image, description, cardData, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleModal = (cards: SubServiceProps) => {
        setModalContent(cards);
    };
    return (
        <div className={`rounded-lg overflow-hidden mb-12 mx-4`}>
            <div className="relative h-48">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div className="pt-3">
                <h3 className="text-2xl font-bold text-blue-title my-4">{title}</h3>
                {description && (<div className="text-black text-wrap truncate-line" dangerouslySetInnerHTML={{ __html: description }}></div>)}
                {cardData && cardData.length > 0 && (
                    <ul className="list-disc pl-5">
                        <li className="mb-0">
                            <h3 className="font-semibold text-black mb-1 max-[600px]:text-[14px]">
                                {cardData[0].subtitle ?? "SubTitle"}
                            </h3>
                            <div className="text-black text-wrap truncate-line" dangerouslySetInnerHTML={{ __html: cardData[0].subDescription ?? "SubDescription" }}>
                            </div>
                        </li>
                    </ul>
                )}
                <div className='flex justify-start'><p className='text-sm text-blue-custom cursor-pointer pt-2' onClick={(e) => {
                    e.stopPropagation();
                    toggleModal();
                    handleModal({ title, image, description, cardData })
                }}>Read More</p></div>
            </div>

            <div className='flex items-center justify-center'>
                <Modal isOpen={isOpen} toggler={toggleModal} content={modalContent} />
            </div>
        </div>
    );
};

export default SubServiceInfo;

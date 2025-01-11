import React from 'react';
import SubServiceCard from '../sub-services/SubServiceCard';
import { ModalProps } from './ModalProps.types';

const Modal: React.FC<ModalProps> = ({ isOpen, toggler, content }) => {
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm z-50">
                    {/* Modal Content */}
                    <div className={`p-6 rounded-lg w-[90%] ${content.cardData ? 'lg:w-[75%]' : 'lg:w-[45%]'} max-[600px]:w-[90%]`}>
                        {/* SubServiceCard */}
                        <SubServiceCard {...content} toggler={toggler} isButtonRequired={true} />

                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

import React from 'react';
import SubServiceCard from '../sub-services/SubServiceCard';
import { subService } from '../sub-services/sub-service';
import { ModalProps } from './ModalProps.types';

const Modal: React.FC<ModalProps> = ({ isOpen, toggler, content }) => {
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    {/* Modal Content */}
                    <div className="p-6 rounded-lg shadow-lg w-[90%] lg:w-[45%] ">
                        {/* SubServiceCard */}
                        <SubServiceCard {...content} />

                        {/* Button Container */}
                        <div className="flex justify-center items-center mt-4">
                            <button
                                className="relative flex justify-center items-center w-[150px] h-10 bg-brown-custom text-gray-custom border border-gray-description rounded-full overflow-hidden group"
                                onClick={toggler}
                            >
                                {/* Text */}
                                <span className="text-[12px] uppercase font-semibold relative z-10 transition-all duration-300 group-hover:text-white">
                                    CLOSE
                                </span>

                                {/* Hover Effect */}
                                <span className="absolute right-0 h-full bg-gray-description w-0 transition-all duration-300 ease-out group-hover:w-full rounded-full hover:border hover:border-gray-100"></span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;

import footerLogo from '/images/footerLogo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { urls } from '../../links/url';
import { FaBusinessTime } from "react-icons/fa6";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-custom w-full pt-10 pb-5">
            {/* Footer Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-6 lg:px-10">
                {/* Left Section */}
                <div className="md:col-span-4 flex flex-col">
                    <div className="flex items-center mb-4">
                        <img src={footerLogo} alt="Footer Logo" className="h-15" />
                    </div>
                    <div className='flex flex-col'>
                        {/* <span className='text-gray-description text-sm'>Monday to Saturday</span> */}
                        {/* <span className='text-gray-description text-sm'>9.30 am - 7 pm IST</span> */}
                    </div>
                </div>

                {/* Middle Section: Menu */}
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Menu</h3>
                    <ul className="space-y-2 text-gray-description text-sm">
                        <li><a href={urls.services} className="hover:underline">Services</a></li>
                        <li><a href={urls.aboutus} className="hover:underline">About Us</a></li>
                        <li><a href={urls.contactUs} className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Middle Section: Quick Links */}
                <div className="md:col-span-3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                    <div className="flex space-x-16">
                        <ul className="space-y-2 text-gray-description text-sm">
                            <li><a href={urls.rbi} target='_blank' className="hover:underline">RBI</a></li>
                            <li><a href={urls.gst} target='_blank' className="hover:underline">GST Gov.</a></li>
                            <li><a href={urls.mca} target='_blank' className="hover:underline">MCA Gov.</a></li>
                        </ul>
                        <ul className="space-y-2 text-gray-description text-sm">
                            <li><a href={urls.incomeTax} target='_blank' className="hover:underline">Income Tax India</a></li>
                            <li><a href={urls.dgft} target='_blank' className="hover:underline">DGFT Gov.</a></li>
                            <li><a href={urls.sebi} target='_blank' className="hover:underline">SEBI Gov.</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:col-span-3 ">
                    <div className="space-y-6">
                        {/* <div className="flex items-center space-x-4">
                            <span className="text-gray-description">
                                <FaBusinessTime size={20} />
                            </span>
                            <span className="text-gray-description text-sm">Monday to Saturday</span>
                        </div> */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-description">
                                <FaPhoneAlt size={20} />
                            </span>
                            <span className="text-gray-description text-sm">022 - 35135278 / 79</span>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-gray-description">
                                <FaMapMarkerAlt size={20} />
                            </span>
                            <span className="text-gray-description text-sm">
                                135/136-A, Mittal Court, Nariman Point, Mumbai – 400021
                            </span>
                        </div>
                    </div>
                    {/* <div className="flex space-x-2">
                        <a href="#" className="social-media hover:bg-blue-custom">
                            <FaFacebookF className='w-5 h-5' />
                        </a>
                        <a href="#" className="social-media hover:bg-blue-twitter">
                            <FaTwitter className='w-5 h-5' />
                        </a>
                        <a href="#" className="social-media hover:bg-gradient-to-r from-yellow-custom via-pink-custom to-blue-insta">
                            <FaInstagram className='w-5 h-5' />
                        </a>
                        <a href="#" className="social-media hover:bg-red-pinterest">
                            <FaPinterestP className='w-5 h-5' />
                        </a>
                        <a href="#" className="social-media hover:bg-red-youtube">
                            <FaYoutube className='w-5 h-5' />
                        </a>
                    </div> */}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-gray-description text-sm text-center border-t border-gray-300 mt-8 pt-4">
                Copyright 2025 © Alvino Consultancy | All Rights Reserved
            </div>
            <div className="text-gray-description text-xs text-center mt-2">
                <a href={urls.disclaimer} className="hover:underline" target='_blank'>Disclaimer</a> |
                <a href={urls.termsAndCond} className="hover:underline" target='_blank'>Terms & Conditions</a> |
                <a href={urls.privacyPolicy} className="hover:underline" target='_blank'>Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;

import footerLogo from '/images/footer-logo.png';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineClock } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-gray-dark w-full">
            {/* Footer Section */}
            <div className="container mx-auto max-[600px]:px-10 max-[1024px]: px-10 grid grid-col-1 md:grid-cols-12 md:gap-8 py-10">
                {/* Left Section */}
                <div className='md:col-span-4'>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src={footerLogo} alt="Footer Logo" />
                    </div>
                    <p className='text-gray-description'>When an unknown printer took a galley of type aawer awtnd scrambled it to make a type specimen book.</p>
                    <div className='py-5'>
                        <div className='flex items-center space-x-5 mb-5'>
                            <span className="text-blue-custom">
                                <FiPhoneCall className='w-5 h-5' />
                            </span>
                            <span className='text-gray-description'>+123 888 9999</span>
                        </div>
                        <div className='flex space-x-5'>
                            <span className="text-blue-custom">
                                <HiOutlineClock className='w-5 h-5' />
                            </span>
                            <span className='text-gray-description w-[200px]'>
                                Mon – Sat: 8 am – 5 pm,
                                Sunday: <span className="text-blue-custom font-semibold">CLOSED</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Middle Section 1*/}
                <div className='md:mx-auto md:col-span-2'>
                    <h3 className="text-blue-custom font-medium text-2xl">Menu</h3>
                    <div className="w-7 h-1 bg-blue-500 my-4"></div>
                    <ul className="space-y-2">
                        <li><a href="#" className="nav-link">Services</a></li>
                        <li><a href="#" className="nav-link">About Us</a></li>
                        <li><a href="#" className="nav-link">Contact Us</a></li>
                    </ul>
                </div>

                {/* Middle Section 2*/}
                <div className="max-[600px]:mt-5 md:col-span-2">
                    <h3 className="text-blue-custom font-medium text-2xl">Quick Links</h3>
                    <div className="w-7 h-1 bg-blue-500 my-4"></div>
                    <ul className="space-y-2 mb-6">
                        <li><a href="#" className="nav-link">Service 1</a></li>
                        <li><a href="#" className="nav-link">Service 2</a></li>
                        <li><a href="#" className="nav-link">Service 3</a></li>
                        <li><a href="#" className="nav-link">Service 4</a></li>
                        <li><a href="#" className="nav-link">Service 5</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className='md:col-span-4'>
                    <div className="flex space-x-2">
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
                    </div>
                </div>
            </div>
            <div className=" text-blue-copyright text-sm border-t border-gray-custom flex justify-center items-center py-5">
                Copyright © Alvino Consultancy | All Right Reserved
            </div>
        </footer>
    )
}
export default Footer;
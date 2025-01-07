import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronRight, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from "/images/logo.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Modal from '../modal/Modal';
import { DropDown, SubDropDown } from './navbar-menu';
import { subService } from '../sub-services/sub-service';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const navbarRef = useRef<any>(null);
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    };

    const handleNav = () => {
        setNav(!nav);
    };

    const handleSubDropdownClick = (subMenu: string) => {
        // Find the corresponding subService data based on the title (name)
        const serviceData = subService.find(service => service.title === subMenu);
        if (serviceData) {
            setModalContent(serviceData);
        }
    };

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about-us' },
        {
            name: 'Services',
            link: '/services',
            dropdown: [
                {
                    name: DropDown.TRS,
                    link: "",
                    subDropdown: [
                        { name: SubDropDown.BTRC },
                        { name: SubDropDown.IO },
                        { name: SubDropDown.ITS },
                        { name: SubDropDown.LSTD },
                        { name: SubDropDown.TMS }
                    ]
                },
                {
                    name: DropDown.AS, link: '#',
                },
                { name: DropDown.TD, link: '/' },
                { name: DropDown.ARS, link: '/' }
            ]
        },
        { name: 'Insights', link: '/insights' },
        { name: 'Careers', link: '/careers' },
        { name: 'Contact Us', link: '/contact' }
    ];

    const toggleDropdown = (index: any) => {
        setOpenDropdown(openDropdown === index ? null : index);
        setOpenSubDropdown(null);
    };

    const toggleSubDropdown = (index: any) => {
        setOpenSubDropdown(openSubDropdown === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={navbarRef}>
            {/* Top Bar */}
            <div className="bg-blue-title text-gray-custom lg:flex justify-end items-center px-6 py-2 hidden">
                <div className="flex items-center md:space-x-4 flex-wrap">
                    <div className="flex items-center space-x-2 max-[600px]:mr-2">
                        <FaPhoneAlt />
                        <span>+91 82453 2652</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope />
                        <span>info@alvinoconsultancy.com</span>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="lg:sticky top-0 z-50 bg-white shadow-md fixed w-full">
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Logo */}
                    <a href="/"><img src={logo} alt="Logo" /></a>

                    {/* Menu */}
                    <ul className="flex-1 lg:flex justify-end space-x-16 pr-24 hidden">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <div className='flex items-center justify-center space-x-2'>
                                    <a
                                        href={item.link || '#'}
                                        className="hover:text-blue-title flex items-center text-gray-description font-semibold"
                                    >
                                        {item.name}
                                    </a>
                                    {item.dropdown && (
                                        <FaChevronDown
                                            className="ml-2 cursor-pointer"
                                            onClick={() => toggleDropdown(index)}
                                        />
                                    )}
                                </div>
                                {/* Dropdown */}
                                {item.dropdown && openDropdown === index && (
                                    <ul className="absolute left-0 mt-5 min-w-72 bg-white shadow-lg rounded-md">
                                        {item.dropdown.map((dropdownItem, subIndex) => (
                                            <li key={subIndex} className="hover:text-blue-title text-gray-description font-medium text-base relative">
                                                <div className='flex items-center justify-between pl-8 py-2 hover:bg-blue-light'>
                                                    <a href={dropdownItem.link || "#"}>
                                                        {dropdownItem.name}
                                                    </a>
                                                    <div
                                                        className="px-4 py-2 flex items-center cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleSubDropdown(subIndex);
                                                        }}
                                                    >
                                                        {dropdownItem.subDropdown && (
                                                            <FaChevronRight
                                                                className="ml-auto cursor-pointer"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Sub Dropdown */}
                                                {dropdownItem.subDropdown && openSubDropdown === subIndex && (
                                                    <ul className="absolute left-full top-0 mt-0 w-72 bg-white shadow-lg rounded-md overflow-hidden ">
                                                        {dropdownItem.subDropdown.map((subItem, subSubIndex) => (
                                                            <li key={subSubIndex} className="text-gray-description hover:text-blue-title hover:bg-blue-light font-normal truncate" onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleModal();
                                                                handleSubDropdownClick(subItem.name)
                                                            }}>
                                                                <div className='flex items-center justify-between px-2 py-2 hover:bg-blue-light cursor-pointer truncate'>
                                                                    {subItem.name}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    {/* Mobile And Tablet View */}
                    <div onClick={handleNav} className='block lg:hidden'>
                        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                    <ul className={nav ? 'fixed left-0 top-16 w-[50%] h-full border-r border-r-gray-custom bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%] top-[136px]'}>
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <div className='flex items-center justify-between p-4'>
                                    <a
                                        href={item.link || '#'}
                                        className="text-gray-description font-semibold"
                                        onClick={() => toggleDropdown(index)} // Toggle dropdown for mobile
                                    >
                                        {item.name}
                                    </a>
                                    {item.dropdown && (
                                        <FaChevronDown
                                            className="ml-2 cursor-pointer"
                                            onClick={() => toggleDropdown(index)}
                                        />
                                    )}
                                </div>
                                {/* Dropdown for Mobile */}
                                {item.dropdown && openDropdown === index && (
                                    <ul className="bg-white shadow-lg rounded-md pl-4 pr-4">
                                        {item.dropdown.map((dropdownItem, subIndex) => (
                                            <li key={subIndex} className="relative">
                                                <div className='flex items-center justify-between py-2 hover:bg-blue-light'>
                                                    <a
                                                        href={dropdownItem.link || "#"}
                                                        className="text-gray-description font-normal text-base"
                                                    >
                                                        {dropdownItem.name}
                                                    </a>
                                                    <div
                                                        className="px-2 flex items-center cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleSubDropdown(subIndex);
                                                        }}
                                                    >
                                                        {dropdownItem.subDropdown && (
                                                            <FaChevronRight className="ml-auto cursor-pointer" />
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Sub Dropdown for Mobile */}
                                                {dropdownItem.subDropdown && openSubDropdown === subIndex && (
                                                    <ul className="bg-white shadow-lg rounded-md pl-4">
                                                        {dropdownItem.subDropdown.map((subItem, subSubIndex) => (
                                                            <li key={subSubIndex} className="text-gray-description px-2 py-2 hover:text-blue-title truncate cursor-pointer" onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleModal();
                                                                handleSubDropdownClick(subItem.name);
                                                            }}>
                                                                {subItem.name}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Modal Component */}
            <div className='flex items-center justify-center'>
                <Modal isOpen={isOpen} toggler={toggleModal} content={modalContent} />
            </div>

        </div >
    );
};

export default Navbar;
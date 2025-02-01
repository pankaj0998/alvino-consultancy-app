import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronRight, FaPhoneAlt, FaEnvelope, FaChevronUp } from 'react-icons/fa';
import logo from "/images/logo.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Modal from '../modal/Modal';
import { Advisory, Assurance, DropDown, TaxAndRegulatory, TransactionDeals } from './navbar-menu';
import { advisoryService, assuranceService, subService, transactionDealsService } from '../sub-services/sub-service';
import { urls } from '../../links/url';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState<any>(null);
    const [openSubDropdown, setOpenSubDropdown] = useState<any>(null);
    const navbarRef = useRef<any>(null);
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
    };

    const handleNav = () => {
        setNav(!nav);
    };

    const handleSubDropdownClick = (subMenu: string, serviceName: string) => {
        // Find the corresponding subService data based on the title (name)
        let service: any[] = []
        if (serviceName === DropDown.TRS) {
            service = subService
        }
        else if (serviceName === DropDown.AS) {
            service = advisoryService
        }
        else if (serviceName === DropDown.ARS) {
            service = assuranceService
        }
        else if (serviceName === DropDown.TD) {
            service = transactionDealsService
        }
        const serviceData = service.find(service => service.title === subMenu);
        if (serviceData) {
            setModalContent(serviceData);
        }
    };

    const menuItems = [
        { name: 'Home', link: urls.home },
        {
            name: 'About Us',
            link: urls.aboutus,
            dropdown: [
                {
                    name: 'Who We Are',
                    link: `${urls.aboutus}#who-we-are`,
                    subDropdown: []
                },
                {
                    name: 'Our Team',
                    link: `${urls.aboutus}#our-team`,
                    subDropdown: []
                }
            ]
        },
        {
            name: 'Services',
            link: urls.services,
            dropdown: [
                {
                    name: DropDown.TRS,
                    link: urls.taxRegulatoryService,
                    subDropdown: [
                        { name: TaxAndRegulatory.BTRC },
                        { name: TaxAndRegulatory.IO },
                        { name: TaxAndRegulatory.TPCBA },
                        { name: TaxAndRegulatory.ITS },
                        { name: TaxAndRegulatory.LSTD },
                        { name: TaxAndRegulatory.TMS }
                    ]
                },
                {
                    name: DropDown.AS, link: urls.advisoryService,
                    subDropdown: [
                        { name: Advisory.BC },
                        { name: Advisory.WRC },
                        { name: Advisory.SC },
                        { name: Advisory.IQAS },
                        { name: Advisory.ED }
                    ]
                },
                {
                    name: DropDown.TD, link: urls.transactionDealService,
                    subDropdown: [
                        { name: TransactionDeals.IACBT },
                        { name: TransactionDeals.DDTS },
                        { name: TransactionDeals.VS },
                        { name: TransactionDeals.DRTS },
                    ]
                },
                {
                    name: DropDown.ARS, link: urls.assuranceService,
                    subDropdown: [
                        { name: Assurance.FAA },
                        { name: Assurance.FAFD },
                        { name: Assurance.AAIS },
                    ]
                }
            ]
        },
        { name: 'Insights', link: urls.comingSoon },
        { name: 'Careers', link: urls.career },
        { name: 'Contact Us', link: urls.contactUs }
    ];

    const toggleDropdown = (index: number | null) => {
        setOpenDropdown(index);
        setOpenSubDropdown(null);
    };

    const toggleSubDropdown = (index: number | null) => {
        setOpenSubDropdown(index);
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

    // Function to update `isDesktop` state based on screen size
    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
    };

    // Effect to add and remove resize event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Clean up listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Effect to handle navigation state when switching to desktop
    useEffect(() => {
        if (isDesktop) {
            setNav(false); // Ensure mobile nav is closed on desktop
        }
    }, [isDesktop]);

    return (
        <div ref={navbarRef}>
            {/* Top Bar */}
            <div className="bg-blue-title text-gray-custom lg:flex justify-end items-center px-6 py-2 hidden">
                <div className="flex items-center md:space-x-10 flex-wrap text-sm">
                    {/* <div className="flex items-center space-x-2 max-[600px]:mr-2">
                        <FaPhoneAlt />
                        <span>+91 82453 2652</span>
                    </div> */}
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
                            <li key={index} className="relative group" onMouseEnter={() => toggleDropdown(index)}
                                onMouseLeave={() => toggleDropdown(null)}>
                                <div className='flex items-center justify-center space-x-2'>
                                    <a
                                        href={item.link || '#'}
                                        className="hover:text-blue-title flex items-center text-gray-description font-semibold transform transition-all duration-300 ease-in-out hover:scale-125" // Add zoom effect on hover
                                    >
                                        {item.name}
                                    </a>
                                    {item.dropdown && (
                                        openDropdown === index ? (
                                            <FaChevronUp
                                                className="ml-2 cursor-pointer transition-transform duration-300"
                                            />
                                        ) : (
                                            <FaChevronDown
                                                className="ml-2 cursor-pointer transition-transform duration-300"
                                            />
                                        )
                                    )}
                                </div>
                                {/* Dropdown */}
                                {item.dropdown && openDropdown === index && (
                                    <ul className="absolute left-0 mt-1 min-w-72 bg-white shadow-lg rounded-md">
                                        {item.dropdown.map((dropdownItem, subIndex) => (
                                            <li key={subIndex} className="hover:text-blue-title text-gray-description font-medium text-base relative" onMouseEnter={() => toggleSubDropdown(subIndex)}
                                                onMouseLeave={() => toggleSubDropdown(null)}>
                                                <div className='flex items-center justify-between pl-8 py-2 hover:bg-blue-light'>
                                                    <a href={dropdownItem.link || "#"} className='transform transition-all duration-300 ease-in-out hover:scale-110'>
                                                        {dropdownItem.name}
                                                    </a>
                                                    <div
                                                        className="px-4 py-2 flex items-center cursor-pointer"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleSubDropdown(subIndex);
                                                        }}
                                                    >
                                                        {dropdownItem.subDropdown && dropdownItem.subDropdown.length > 0 && (
                                                            <FaChevronRight
                                                                className="ml-auto cursor-pointer"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                {/* Sub Dropdown */}
                                                {dropdownItem.subDropdown && openSubDropdown === subIndex && (
                                                    <ul className="absolute left-full top-0 mt-0 w-72 bg-white shadow-lg rounded-md overflow-hidden">
                                                        {dropdownItem.subDropdown.map((subItem, subSubIndex) => (
                                                            <li
                                                                key={subSubIndex}
                                                                className="text-gray-description hover:text-blue-title hover:bg-blue-light font-normal text-sm"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    toggleModal();
                                                                    handleSubDropdownClick(subItem.name, dropdownItem.name);
                                                                }}
                                                            >
                                                                <div className="flex items-center justify-between px-2 py-2 cursor-pointer">
                                                                    <span className="truncate overflow-hidden whitespace-nowrap w-full">
                                                                        {subItem.name}
                                                                    </span>
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
                                        openDropdown === index ? (
                                            <FaChevronUp
                                                className="ml-2 cursor-pointer transition-transform duration-300"
                                            />
                                        ) : (
                                            <FaChevronDown
                                                className="ml-2 cursor-pointer transition-transform duration-300"
                                            />
                                        )
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
                                                {dropdownItem.subDropdown && dropdownItem.subDropdown.length > 0 && openSubDropdown === subIndex && (
                                                    <ul className="bg-white shadow-lg rounded-md pl-4">
                                                        {dropdownItem.subDropdown.map((subItem, subSubIndex) => (
                                                            <li key={subSubIndex} className="text-gray-description px-2 py-2 hover:text-blue-title truncate cursor-pointer" onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleModal();
                                                                handleSubDropdownClick(subItem.name, dropdownItem.name);
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

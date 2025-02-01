import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300); // Show button when scrolled 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`fixed bottom-5 right-5 p-3 bg-blue-title text-white rounded-full shadow-md transition-opacity duration-300 ${isVisible ? "opacity-100 z-9999" : "opacity-0"
                }`}
            onClick={scrollToTop}
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default ScrollToTop;

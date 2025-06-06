import React, { useState } from "react";
import { RequestBannerProps } from "./RequestBanner.types";

const RequestBanner: React.FC<RequestBannerProps> = ({ title, description }) => {
    // State to store form data
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        contact: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await fetch("https://alvinoconsultancy.in//contact.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData).toString(), // Convert to form-encoded format
            });

            const result = await response.json();
            alert(result.message); // Show response message

            if (result.status === "success") {
                setFormData({ fullName: "", email: "", contact: "" }); // Reset form
            }
        } catch (error) {
            alert("Error sending message. Please try again.");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-between w-full mx-auto lg:py-24 lg:px-16 space-x-6 max-[1024px]:p-10">
            {/* Left Side - Text */}
            <div className="mr-10 ml-7 lg:mb-0 lg:w-1/2">
                <h2 className="text-black text-4xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-500 text-lg mb-4 lg:mb-0">{description}</p>
            </div>

            {/* Right Side - Form */}
            <div className="pr-12 lg:w-1/2">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="bg-gray-custom rounded-md p-2 w-full h-12 outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-custom rounded-md p-2 w-full outline-none"
                    />
                    <div className="md:col-span-2 flex gap-4">
                        <input
                            type="tel"
                            name="contact"
                            placeholder="Phone *"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            className="bg-gray-custom rounded-md p-2 w-full h-12 outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-title text-white font-medium text-sm p-2 rounded-md transition-colors cursor-pointer"
                        >
                            SEND NOW
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestBanner;

import React, { useState, ChangeEvent, FormEvent } from "react";
import aboutUsImage from '/images/about-us.png'

// Define types for form data and errors
type FormData = {
    fullName: string;
    contact: string;
    email: string;
    message: string;
};

type FormErrors = {
    fullName?: string;
    contact?: string;
    email?: string;
    message?: string;
};

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        contact: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        let isValid = true;
        const newErrors: FormErrors = {};

        if (!formData.fullName) {
            newErrors.fullName = "Full Name is required.";
            isValid = false;
        }

        if (!formData.contact || !/^\+\d{1,3}\s\d{6,15}$/.test(formData.contact)) {
            newErrors.contact = "Valid 10-digit contact number with country code is required.";
            isValid = false;
        }

        if (
            !formData.email ||
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
        ) {
            newErrors.email = "Valid email address is required.";
            isValid = false;
        }

        if (!formData.message || formData.message.length > 250) {
            newErrors.message =
                "Message is required and should not exceed 250 characters.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            // Add submission logic here
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-7xl mx-auto p-6 rounded-md bg-opacity-40 bg-gray-custom">
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-6">
                <h2 className="text-lg font-semibold text-gray-description">
                    Fill up the form
                </h2>
                <p className="mb-20 text-gray-description opacity-75">Our team will get back to you within 24 hours.</p>
                <div className="mb-4">
                    <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Full Name*
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`mt-1 block w-full p-2 border-b ${errors.fullName
                            ? "border-red-500"
                            : "border-gray-300 focus:border-blue-title"
                            } focus:outline-none bg-transparent`}
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-sm">{errors.fullName}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="contact"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Contact*
                    </label>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        className={`mt-1 block w-full p-2 border-b ${errors.contact
                            ? "border-red-500"
                            : "border-gray-300 focus:border-blue-title"
                            } focus:outline-none bg-transparent`}
                    />
                    {errors.contact && (
                        <p className="text-red-500 text-sm">{errors.contact}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Business Mail*
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        placeholder="Enter your business email"
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 border-b ${errors.email
                            ? "border-red-500"
                            : "border-gray-300 focus:border-blue-title"
                            } focus:outline-none bg-transparent`}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Message*
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here"
                        className={`mt-1 block w-full p-2 border-b ${errors.message
                            ? "border-red-500"
                            : "border-gray-300 focus:border-blue-title"
                            } focus:outline-none bg-transparent h-[100px]`}
                        maxLength={250}
                        rows={4}
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-[300px] bg-blue-title  text-white py-2 px-4 rounded-md hover:bg-blue-title focus:outline-none mt-5"
                >
                    SEND MESSAGE
                </button>
            </form>
            {/* Image Section */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                <div className="w-full h-full overflow-hidden">
                    <img
                        src={aboutUsImage}
                        alt="Team Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

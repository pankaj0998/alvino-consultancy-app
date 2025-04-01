import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
    applicantName: string;
    city: string;
    state: string;
    mobileNumber: string;
    emailAddress: string;
    age: string;
    gender: "Male" | "Female";
    graduation: string;
    specialisation: string;
    postGraduation?: string;
    certification?: string;
    experienceLevel: string;
    currentOrganisation: string;
    teamSize: string;
    careerAchievements?: string;
    resume: FileList;
}

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
];

const CareerForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const [size, setSize] = useState<number>(1);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const formData = new FormData();
            formData.append("applicantName", data.applicantName);
            formData.append("city", data.city);
            formData.append("state", data.state);
            formData.append("mobileNumber", data.mobileNumber);
            formData.append("emailAddress", data.emailAddress);
            formData.append("age", data.age);
            formData.append("gender", data.gender);
            formData.append("graduation", data.graduation);
            formData.append("specialisation", data.specialisation);
            if (data.postGraduation) formData.append("postGraduation", data.postGraduation);
            if (data.certification) formData.append("certification", data.certification);
            formData.append("experienceLevel", data.experienceLevel);
            formData.append("currentOrganisation", data.currentOrganisation);
            formData.append("teamSize", data.teamSize);
            if (data.careerAchievements) formData.append("careerAchievements", data.careerAchievements);

            // Append the resume file (only the first file is taken)
            if (data.resume.length > 0) {
                formData.append("resume", data.resume[0]);
            }

            const response = await fetch("https://alvinoconsultancy.in/career.php", {
                method: "POST",
                body: formData,
            });

            const contentType = response.headers.get("content-type");

            let result;
            if (contentType && contentType.includes("application/json")) {
                result = await response.json();
            } else {
                result = await response.text(); // Fallback for plain text/HTML response
            }

            alert(result.message);
        } catch (error) {
            console.log(error)
            alert("Error submitting application. Please try again.");
        }
    };

    const handleBlurSize = () => {
        setSize(1);
    }

    const handleFocusSize = () => {
        setSize(10);
    }

    return (
        <div className="">
            <div className="text-center">
                <h2 className="text-4xl font-semibold mt-10">
                    Apply <span className="text-blue-title">At Alvino</span>
                </h2>
                <div className="w-20 h-1 bg-blue-custom rounded-full mt-2 mx-auto"></div>
            </div>
            <div className="max-w-4xl my-10 md:mt-10 md:mb-20 md:mx-auto p-6 bg-white bg-opacity-80 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-xl font-semibold mb-4 border-b-2">Personal Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Applicant Name*"
                                {...register("applicantName", {
                                    required: "Applicant Name is required",
                                    pattern: {
                                        value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                                        message: "Please provide valid name"
                                    }
                                })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.applicantName && (
                                <p className="text-red-600 text-sm mt-1">{errors.applicantName.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="City*"
                                {...register("city", {
                                    required: "City is required",
                                    pattern: {
                                        value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                                        message: "Please provide valid city"
                                    }
                                })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.city && (
                                <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
                            )}
                        </div>
                        <div>
                            <select
                                {...register("state", { required: "State is required" })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent overflow-y-auto" size={size} onBlur={handleBlurSize} onFocus={handleFocusSize}
                            >
                                <option value="" disabled selected>
                                    Select State
                                </option>
                                {states.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                            {errors.state && (
                                <p className="text-red-600 text-sm mt-1">{errors.state.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="MobileNumber*"
                                {...register("mobileNumber", {
                                    required: "Mobile Number is required",
                                    pattern: {
                                        value: /^[6-9][0-9]{9}$/,
                                        message: "Enter a valid 10-digit mobile number",
                                    },
                                })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.mobileNumber && (
                                <p className="text-red-600 text-sm mt-1">{errors.mobileNumber.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address*"
                                {...register("emailAddress", {
                                    required: "Email Address is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.emailAddress && (
                                <p className="text-red-600 text-sm mt-1">{errors.emailAddress.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Age*"
                                {...register("age", {
                                    required: "Age is required",
                                    min: { value: 18, message: "Minimum age is 18" },
                                })}
                                min={18}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.age && (
                                <p className="text-red-600 text-sm mt-1">{errors.age.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-base font-medium text-gray-description">Gender *</label>
                            <div className="flex items-center space-x-4 mt-1">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="Male"
                                        {...register("gender", { required: "Gender is required" })}
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="Female"
                                        {...register("gender", { required: "Gender is required" })}
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="Other"
                                        {...register("gender", { required: "Gender is required" })}
                                    />
                                    <span className="ml-2">Other</span>
                                </label>
                            </div>
                            {errors.gender && (
                                <p className="text-red-600 text-sm mt-1">{errors.gender.message}</p>
                            )}
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4 border-b-2">Educational Qualification</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <input
                                type="text"
                                placeholder="Graduation*"
                                {...register("graduation", { required: "Graduation is required" })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.graduation && (
                                <p className="text-red-600 text-sm mt-1">{errors.graduation.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Specialisation*"
                                {...register("specialisation", { required: "Specialisation is required" })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            <label className="block text-xs font-medium text-blue-title">Example: MS Word, Excel</label>
                            {errors.specialisation && (
                                <p className="text-red-600 text-sm mt-1">{errors.specialisation.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Post Graduation</label>
                            <input
                                type="text"
                                {...register("postGraduation")}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Other Certification (If Any)</label>
                            <input
                                type="text"
                                {...register("certification")}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4 border-b-2">Professional Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <select
                                {...register("experienceLevel", { required: "Experience Level is required" })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            >
                                <option value="">Select Experience Level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Experienced">Experienced</option>
                            </select>
                            {errors.experienceLevel && (
                                <p className="text-red-600 text-sm mt-1">{errors.experienceLevel.message}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Current Organisation*"
                                {...register("currentOrganisation", { required: "Current Organisation is required" })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            <label className="block text-xs font-medium text-blue-title">Note: If there is no organization, enter 'N.A.'</label>
                            {errors.currentOrganisation && (
                                <p className="text-red-600 text-sm mt-1">{errors.currentOrganisation.message}</p>
                            )}
                        </div>
                        <div>
                            <textarea
                                placeholder="Career Achievements"
                                {...register("careerAchievements")}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-description">Upload Resume / CV File *</label>
                            <input
                                type="file"
                                {...register("resume", {
                                    required: "Resume is required",
                                    validate: {
                                        fileSize: (file) => file[0]?.size <= 10 * 1024 * 1024 || "File size must be less than 10MB",
                                        fileType: (file) =>
                                            ["application/pdf", ".doc", ".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file[0]?.type) ||
                                            "File must be PDF or DOCX"
                                    }
                                })}
                                className="mt-1 p-2 block w-full border rounded-md shadow-sm bg-transparent"
                            />
                            {errors.resume && (
                                <p className="text-red-600 text-sm mt-1">{errors.resume.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="w-[300px] bg-blue-title  text-white py-2 px-4 rounded-md hover:bg-blue-title focus:outline-none mt-5 hover:opacity-80"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CareerForm;

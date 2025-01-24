import React from 'react';
import { useForm } from 'react-hook-form';

const ApplicationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        alert('Form submitted successfully');
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Details */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Personal Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">Select Department *</label>
                            <select
                                {...register('department', { required: 'Department is required' })}
                                className={`w-full p-2 border rounded ${errors.department ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            >
                                <option value="">Select Department</option>
                                <option value="HR">HR</option>
                                <option value="Finance">Finance</option>
                            </select>
                            {errors.department && (
                                <p className="text-red-500 text-sm">{errors.department.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Select Office *</label>
                            <select
                                {...register('office', { required: 'Office is required' })}
                                className={`w-full p-2 border rounded ${errors.office ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            >
                                <option value="">Select Office</option>
                                <option value="Office1">Office1</option>
                                <option value="Office2">Office2</option>
                            </select>
                            {errors.office && (
                                <p className="text-red-500 text-sm">{errors.office.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Applicant Name *</label>
                            <input
                                {...register('name', { required: 'Name is required' })}
                                type="text"
                                className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your name"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">City *</label>
                            <input
                                {...register('city', { required: 'City is required' })}
                                type="text"
                                className={`w-full p-2 border rounded ${errors.city ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your city"
                            />
                            {errors.city && (
                                <p className="text-red-500 text-sm">{errors.city.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Mobile Number *</label>
                            <input
                                {...register('mobile', {
                                    required: 'Mobile number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Invalid mobile number',
                                    },
                                })}
                                type="text"
                                className={`w-full p-2 border rounded ${errors.mobile ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your mobile number"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email Address *</label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                type="email"
                                className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Educational Qualification */}
                <div>
                    <h2 className="text-lg font-bold mb-4">Educational Qualification</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium">Graduation *</label>
                            <input
                                {...register('graduation', { required: 'Graduation is required' })}
                                type="text"
                                className={`w-full p-2 border rounded ${errors.graduation ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your graduation"
                            />
                            {errors.graduation && (
                                <p className="text-red-500 text-sm">{errors.graduation.message}</p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Specialisation *</label>
                            <input
                                {...register('specialisation', { required: 'Specialisation is required' })}
                                type="text"
                                className={`w-full p-2 border rounded ${errors.specialisation ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                placeholder="Enter your specialisation"
                            />
                            {errors.specialisation && (
                                <p className="text-red-500 text-sm">{errors.specialisation.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block mb-1 font-medium">Upload Resume *</label>
                    <input
                        {...register('resume', { required: 'Resume is required' })}
                        type="file"
                        className={`w-full p-2 border rounded ${errors.resume ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors.resume && (
                        <p className="text-red-500 text-sm">{errors.resume.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;

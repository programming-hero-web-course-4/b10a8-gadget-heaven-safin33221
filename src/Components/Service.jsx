import React from 'react';

const Service = ({ service }) => {
    const {title,description,duration,price,eligibility,contact,terms} = service;

    return (

        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg hover:scale-105  duration-1000  shadow-lg overflow-hidden hover:shadow-xl  transition-shadow  ease-in-out">
            <div className="p-6 flex flex-col justify-between">

                <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                <div className="border-t border-gray-200 pt-4">
                    <div className="text-gray-700 text-sm mb-2"><strong>Duration:</strong> {duration}</div>
                    <div className="text-gray-700 text-sm mb-2"><strong>Price:</strong> {price}</div>
                    <div className="text-gray-700 text-sm mb-2"><strong>Eligibility:</strong> {eligibility}</div>
                    <div className="text-gray-700 text-sm mb-2">
                        <strong>Contact:</strong> <a href={`mailto:${contact}`} className="text-blue-500 underline">{contact}</a>
                    </div>

                    <details className="mt-3">
                        <summary className="text-black cursor-pointer">Terms & Conditions</summary>
                        <p className="text-gray-600 mt-2">{terms}</p>
                    </details>
                </div>

                <button className="mt-6  text-[#9538E2]  btn btn-outline">
                    Explore More
                </button>
            </div>
        </div>

    );
};

export default Service;
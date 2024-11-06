import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const data = useLoaderData()
    return (
        <div>
            <div className="hero bg-[#9538E2]  text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Our Service</h1>
                        <p className="py-6 text-gray-300">
                        Delivering exceptional support and solutions tailored to your needs.
                        </p>


                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-10 my-8'>
                {
                    data.map(service =><Service key={service.id} service={service}></Service> )
                }
            </div>
        </div>
    );
}
export default Services;
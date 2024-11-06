import React from 'react';
import StatisticsChart from './StatisticsChart';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const data = useLoaderData()
    return (
        <div>

            <div className="hero bg-[#9538E2] pb-20 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Statistics</h1>
                        <p className="py-6 text-gray-300 text-lg">
                        Unlock the power of data with detailed insights and visual analytics to drive smarter decisions.
                        </p>


                    </div>
                </div>
            </div>
            <div className='flex justify-center py-10'>

                <StatisticsChart
                data={data}
                ></StatisticsChart>
            </div>
        </div>
    );
};

export default Statistics;
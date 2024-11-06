import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const StatisticsChart = ({ data }) => {
    const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.9); // Initial width as 90% of the screen

    const sortName = (name) => (name.length > 4 ? name.slice(0, 4) + '...' : name);

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth * 0.9); // Update width on window resize
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div>
                <h1 className="font-bold text-2xl md:text-3xl ">Statistics</h1>
            </div>
            <div className="w-full overflow-x-auto">
                <BarChart
                    width={Math.min(chartWidth, 1000)} // Limit max width to 1000px
                    height={400}
                    data={data}
                    barSize={20}
                    className="bg-gray-200 rounded-xl p-3"
                >
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="product_title" tickFormatter={sortName} />
                    <YAxis dataKey="price" />
                    <Tooltip />
                    <Legend />
                </BarChart>
            </div>
        </div>
    );
};

export default StatisticsChart;

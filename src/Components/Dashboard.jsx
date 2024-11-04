import React, { useEffect, useState } from 'react';
import { getStoredData } from './Utils/addToDB';
import DashboardDetails from './DashboardDetails';
import Wish from './Wish';
import Carts from './Carts';



const Dashboard = () => {

    const [cartProducts, setProduct] = useState([])
    useEffect(() => {
        const gadgets = getStoredData();
        setProduct(gadgets);
    }, [])

    const [isactive, setAcive] = useState(true)
    const handleTogging = (active) => {
        if(active){
            setAcive(true)
        }else{
            setAcive(false)
        }
    }
    return (
        <div>
            <div className="hero bg-[#9538E2] pb-20 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div>
                            <button onClick={() => handleTogging(true)} className='btn btn-outline'>Cart</button>
                            <button onClick={() => handleTogging(false)} className='btn btn-outline'>wish</button>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                {
                   isactive?<Carts
                   cartProducts={cartProducts}
                   ></Carts>:<Wish></Wish>
                }

            </div>
        </div>
    );
};

export default Dashboard;
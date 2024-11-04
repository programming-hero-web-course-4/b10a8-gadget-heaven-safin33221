import React, { useEffect, useState } from 'react';
import { getStoredCart, getStoredWish, removeCartFromLs, removeWishFromLs } from './Utils/addToDB';
import DashboardDetails from './DashboardDetails';

import Carts from './Carts';
import Wishs from './Wishs';



const Dashboard = () => {

    const [cartProducts, setProduct] = useState([])
    useEffect(() => {
        const gadgets = getStoredCart()
        setProduct(gadgets);
    }, [])

    const [wishProduct, setWishProduct] = useState([])
    useEffect(() => {
        const wishGadgets = getStoredWish()
        setWishProduct(wishGadgets)
    }, [])

    const [isactive, setAcive] = useState(true)
    const handleTogging = (active) => {
        if (active) {
            setAcive(true)
        } else {
            setAcive(false)
        }
    }

    const handleRemoveCart = id => {
        removeCartFromLs(id)
        const gadgets = getStoredCart()
        setProduct(gadgets);
    }
    const handleRemoveWish = id => {
        removeWishFromLs(id)
        const wishGadgets = getStoredWish()
        setWishProduct(wishGadgets)
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
                    isactive ? <Carts
                        cartProducts={cartProducts}
                        handleRemoveCart={handleRemoveCart}
                    ></Carts> : <Wishs
                    wishProduct={wishProduct}
                    handleRemoveWish={handleRemoveWish}
                    ></Wishs>
                }

            </div>
        </div>
    );
};

export default Dashboard;
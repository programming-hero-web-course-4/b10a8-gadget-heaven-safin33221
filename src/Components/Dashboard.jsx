import React, { useEffect, useState } from 'react';
import { getStoredCart, getStoredWish, removeCartFromLs, removeWishFromLs } from './Utils/addToDB';
import DashboardDetails from './DashboardDetails';

import Carts from './Carts';
import Wishs from './Wishs';



const Dashboard = () => {
    //cart data form localStorage
    const [cartProducts, setProduct] = useState([])
    useEffect(() => {
        const gadgets = getStoredCart()
        setProduct(gadgets);
    }, [])


    //cart data form localStorage
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

    const [cartPrice, setCartPrice] = useState(0)
    useEffect(() => {
        
        const sum = cartProducts.reduce((a, b) => a + (b.price || 0), 0);
        setCartPrice(parseFloat(sum).toFixed(2))
    }, [cartProducts])


    const [wishPrice, setWishPrice] = useState(0)
    useEffect(() => {
        
        const sum = wishProduct.reduce((a, b) => a + (b.price || 0), 0);
        setWishPrice(parseFloat(sum).toFixed(2))
    }, [cartProducts])
    
    return (
        <div>
            <div className="hero bg-[#9538E2] pb-20 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className=' flex justify-center gap-4 font-extrabold'>
                            <button onClick={() => handleTogging(true)} className={`${isactive ? "text-[#9538E2] bg-white btn btn-xl btn-outline px-10 rounded-3xl font-extrabold" : "btn bg-[#9538E2] btn-xl px-10 rounded-3xl "}`}>Cart</button>

                            <button onClick={() => handleTogging(false)}
                                className={`${isactive ? "btn btn-xl bg-[#9538E2] px-10 rounded-3xl " : "text-[#9538E2] px-10 rounded-3xl bg-white btn btn-xl btn-outline font-extrabold"}`}>
                                wish</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-6 w-10/12 mx-auto'>
                <div>
                    <h1 className='text-lg font-bold'>{`${isactive ? "Cart" : "Wish"}`}</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='font-bold'>Total Cost: {`${isactive?cartPrice:wishPrice}`}</p>
                <button className='btn btn-outline text-[#9538E2] rounded-3xl'>Sort by price</button>
                    <button className='btn'>Purchace</button>
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
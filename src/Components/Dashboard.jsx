import React, { useEffect, useState } from 'react';
import { getStoredCart, getStoredWish, removeCartFromLs, removeWishFromLs, revomeAllCartFromLs, revomeAllWishFromLs } from './Utils/addToDB';


import Carts from './Carts';
import Wishs from './Wishs';
import paymentLogo from '../assets/Group.png'
import { Link } from 'react-router-dom';



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
    //remove cart form localstorage
    const handleRemoveCart = id => {
        removeCartFromLs(id)
        const gadgets = getStoredCart()
        setProduct(gadgets);
    }
    //remove wish form localStorage
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
    }, [wishProduct])

    //sort by price
    const handleSortBYPrice = () => {
        if (isactive) {

            const sortProduct = [...cartProducts].sort((a, b) => b.price - a.price)
            setProduct(sortProduct)
        } else {
            const sortWishProduct = [...wishProduct].sort((a, b) => b.price - a.price)
            setWishProduct(sortWishProduct)

        }


    }
    const modal = document.getElementById('my_modal_1')

    const openModal = () => {
        modal.showModal()
    }

    const handleModalClose = (active) => {
        if (active) {
            revomeAllCartFromLs()
            setProduct([])
        } else {
            revomeAllWishFromLs()
            setWishProduct([])
        }


    }
    const [iscartParchase, seCartParchase] = useState(false)
    useEffect(() => {
        if(cartProducts.length === 0){
            seCartParchase(true)
        }
        else{
            seCartParchase(false)
        }
    }, [cartProducts])
    const [isWishParchase, setWishParchase] = useState(false)
    useEffect(() => {
        if(wishProduct.length === 0){
            setWishParchase(true)
        }
        else{
            setWishParchase(false)
        }
    }, [wishProduct])
    


    return (
        <div>
            <div className="hero bg-[#9538E2] pb-20 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6 text-gray-300">
                        Effortlessly manage and analyze routes with real-time insights and performance tracking.
                        </p>
                        <div className=' flex justify-center gap-4 font-extrabold'>
                            <button onClick={() => handleTogging(true)} className={`${isactive ? "text-[#9538E2] bg-white btn btn-xl btn-outline px-10 rounded-3xl font-extrabold" : "btn bg-[#9538E2] btn-xl px-10 rounded-3xl "}`}>Cart</button>

                            <button onClick={() => handleTogging(false)}
                                className={`${isactive ? "btn btn-xl bg-[#9538E2] px-10 rounded-3xl " : "text-[#9538E2] px-10 rounded-3xl bg-white btn btn-xl btn-outline font-extrabold"}`}>
                                Wishlist</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center py-6 w-10/12 mx-auto'>
                <div>
                    <h1 className='text-lg font-bold'>{`${isactive ? "Cart" : "Wish"}`}</h1>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <p className='font-bold'>Total Cost: ${`${isactive ? cartPrice : wishPrice}`}</p>
                    <button onClick={() => handleSortBYPrice()}
                        className='btn btn-outline text-[#9538E2] rounded-3xl'>Sort by price</button>
                    <button onClick={openModal}
                        className='btn bg-[#9538E2] text-white rounded-3xl px-6' disabled={isactive?iscartParchase:isWishParchase}>Purchase</button>
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

            {/* modal for purchace button */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center">
                    <div className='flex justify-center'>
                        <img src={paymentLogo} alt="" />
                    </div>
                    <p className="py-4 text-2xl font-bold">Payment Successfully</p>
                    <div className='border-t'></div>
                    <p>Thanks for Purchasing</p>
                    <p>Total: ${`${isactive ? cartPrice : wishPrice}`}</p>
                    <div className=" ">
                        <form method="dialog ">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/'><button onClick={() => handleModalClose(isactive)}
                                className="btn flex w-2/3 mx-auto rounded-3xl font-bold">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;
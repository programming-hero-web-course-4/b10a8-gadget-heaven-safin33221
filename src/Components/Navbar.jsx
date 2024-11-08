import { Link, NavLink, useLocation } from "react-router-dom";
import { getStoredCart, getStoredWish } from "./Utils/addToDB";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
    const location = useLocation()
    
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistice'>Statistice</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/service'>Service</NavLink></li>




    </>
    if(location.pathname ==='/'){
        document.title='Gadget | Gadget Heaven'
    }else if(location.pathname ==='/statistice'){
        document.title='Statistice | Gadget Heaven'
    }else if(location.pathname ==='/dashboard'){
        document.title='Dashboard | Gadget Heaven'
    }
    else if(location.pathname ==='/service'){
        document.title='Service | Gadget Heaven'
    }
    


    const [cartProducts, setCartProduct] = useState([])
    useEffect(() => {
        const cartGadgets = getStoredCart();
        setCartProduct(cartGadgets);
    }, [])

    const [cartPrice, setCartPrice] = useState(0)
    useEffect(() => {

        const sum = cartProducts.reduce((a, b) => a + (b.price || 0), 0);
        setCartPrice(parseFloat(sum).toFixed(2))
    }, [cartProducts])


    const [wishProducts, setWishProducts] = useState([])
    useEffect(() => {
        const wishGadgets = getStoredWish()
        setWishProducts(wishGadgets) 
    }, [])





    const homeRoute = location.pathname === '/' || location.pathname.startsWith('/gadgets/')

    return (
        <div className={`navbar w-11/12 mx-auto  mt-4  ${homeRoute ? 'bg-[#9538E2] rounded-lg' : 'bg-white'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Gaget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cartProducts.length}</span>
                            </div>
                        </div>
                        <div    
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{cartProducts.length} Items</span>
                                <span className="text-black">Subtotal: ${cartPrice}</span>
                                <div className="card-actions">
                                    <Link to='/dashboard'><button className="btn btn-primary btn-block">View cart</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FaRegHeart className="text-xl" />
                        <span className="badge badge-sm  badge-white indicator-item">{wishProducts.length}</span>
                    </div>
                </button>
            </div>
        </div>);
};

export default Navbar;

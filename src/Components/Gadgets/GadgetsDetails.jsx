import { useLoaderData, useParams } from "react-router-dom";
import DetailsTem from "../DetailsTem";
import { addCartToLs, addWishtToLs, getStoredWish } from "../Utils/addToDB";

import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";



const GadgetsDetails = () => {
    const gadgetId = useParams()
    const data = useLoaderData()


    const id = parseInt(gadgetId.GId)
    const [isWished, setWished] = useState(false)
    const [products, setProduct] = useState([])
    useEffect(() => {
        const details = [...data].find(gadget => gadget.product_id === id)
        setProduct(details)
        const wish = getStoredWish()
        const isExist = wish.find(item => item.product_id === details.product_id)
        if (isExist) {
            setWished(true)
        }
    }, [data, id])
    console.log(products);


    const { product_image, product_title, product_id, price, availability, description, specification = [], rating } = products

    const handleWish = (wishGadget) => {
        addWishtToLs(wishGadget)
        setWished(true)

    }
    const handleCart = (gadget) => {
        addCartToLs(gadget)

    }



    return (
        <div>
            <DetailsTem title='Product Details' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></DetailsTem>
            <div className="border-2 m-3 max-w-[800px]  mx-auto relative bottom-32 p-3 rounded-lg border-white">
                <div className=" bg-white shadow-lg   ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">{product_title}</h1>
                            <p className="py-1"> Price: $
                                {price}
                            </p>
                            <button className="btn btn-outline btn-sm rounded-2xl btn-primary">{availability ? 'In stock' : 'Stock Out'}</button>
                            <p>{description}</p>
                            <div>
                                <h2 className="font-bold text-xl">
                                    Specification:
                                </h2>
                                {
                                    specification.map((specif, idx) => <p key={idx}>{specif}</p>)
                                }

                            </div>
                            <h2>Rating</h2>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <h1>{rating}</h1>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => handleCart(products)} className="btn bg-[#9538E2] w-44 rounded-3xl text-white font-bold">Add To Cart  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                </button>
                                <button disabled={isWished} onClick={() => handleWish(products)} className="btn text-black rounded-full text-xl">
                                    <FaRegHeart />

                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetsDetails;
import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const Wish = ({wish,handleRemoveWish}) => {
    const { product_title, product_image, price, product_id, description } = wish
    
    return (
        <div class=" w-4/5 border-2 mb-3 mx-auto bg-base-100  shadow-xl flex flex-col md:flex-row p-4 gap-8 rounded-lg ">
            <figure className=" ">
                <img className="w-52"
                    src={product_image} />
            </figure>
            <div class="flex justify-between items-center w-full ">
                <div>
                    <h2 class="card-title">{product_title}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <button className='btn bg-[#9538E2] rounded-3xl my-3'>Add to Card</button>
                </div>
                <div onClick={()=>handleRemoveWish(product_id)} className='px-8'>
                    <button className='text-2xl btn '><MdDeleteOutline /></button>
                </div>

            </div>
        </div>
    );
};

export default Wish;
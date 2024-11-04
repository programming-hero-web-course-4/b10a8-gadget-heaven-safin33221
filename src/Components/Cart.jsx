import React from 'react';

const Cart = ({cart}) => {
    const { product_title, product_image, price, product_id,description } = cart
    return (
        <div class=" w-4/5 border-2 mb-3 mx-auto bg-base-100  shadow-xl flex">
            <figure className=" mx-auto">
                <img className="w-52"
                    src={product_image} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{product_title}</h2>
                <p>{description}</p>
                <p>Price: {price}K</p>
                <div class="card-actions justify-start">
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;
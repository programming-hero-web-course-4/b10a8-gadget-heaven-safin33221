import React from 'react';
import Cart from './Cart';

const Carts = ({cartProducts}) => {
    console.log(cartProducts);
    return (
        <div>
            {
                cartProducts.map(cart => <Cart cart={cart}></Cart> )
            }
        </div>
    );
};

export default Carts;
import React from 'react';
import Cart from './Cart';

const Carts = ({cartProducts,handleRemoveCart}) => {
    
    return (
        <div className='py-5'>
            {
                
                cartProducts.map(cart => <Cart cart={cart}
                    handleRemoveCart={handleRemoveCart}
                
                ></Cart> )
            }
        </div>
    );
};

export default Carts;
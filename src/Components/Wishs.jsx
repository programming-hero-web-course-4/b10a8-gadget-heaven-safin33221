import React from 'react';
import Wish from './Wish';

const Wishs = ({wishProduct,handleRemoveWish}) => {
    return (
        <div className='py-5'>
        {
            
            wishProduct.map(wish => <Wish wish={wish}
                handleRemoveWish={handleRemoveWish}
            
            ></Wish> )
        }
    </div>
    );
};

export default Wishs;
import React from 'react';

const Category = ({ category }) => {
    // console.log(categories);
    const { name,id, categorys } = category
    return (
        <div>
            <button  className='btn text-2xl flex mx-auto my-3 w-48 rounded-xl'> {name}</button>
        </div>
    );
};

export default Category;
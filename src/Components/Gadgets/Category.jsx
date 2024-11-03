import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css'

const Category = ({ category }) => {
    // console.log(categories);
    const { name, id, categorys } = category
    return (
        <nav id='links' >
            <li className=' text-2xl flex mx-auto my-3 w-48 rounded-xl'>
                <NavLink to={`/gadgets/${categorys}`} className='btn w-32' > {name}</NavLink>
            </li>
        </nav>
    );
};

export default Category;
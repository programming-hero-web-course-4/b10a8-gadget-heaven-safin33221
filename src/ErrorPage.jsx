import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center h-screen justify-center'>
            <h1 className='text-2xl font-bold text-center'>404</h1>
            <h1 className='text-3xl font-bold text-center'>Page Not Found</h1>
            <p className='text-lg text-gray-400 py-6'>Sorry, the page your are looking for doesn't exsit or has been moved!!!</p>
            <button onClick={()=>navigate('/')}
             className='btn' > Go Home</button>
        </div>
    );
};

export default ErrorPage;
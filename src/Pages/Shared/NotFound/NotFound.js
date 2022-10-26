import React from 'react';
import notFound from '../../../assets/not-found.gif'
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center p-2'>
            <img src={notFound} alt="" className='not-fund'/>
        </div>
    );
};

export default NotFound;
import React from 'react';

const Footer = () => {
    return (
        <div className='mt-4 flex justify-between text-base text-gray-700'>
            <p>3 tasks left</p>
            <ul className='flex space-x-1 items-center text-base'>
                <li className='cursor-pointer'>All</li>
                <li></li>
                <li className='cursor-pointer'>Incomplete</li>
                <li></li>
                <li className='cursor-pointer'>Complete</li>
                <li></li>
                <li></li>
                <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-600'></li>
                <li className='h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer bg-red-600'></li>
                <li className='h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer bg-yellow-600'></li>
            </ul>
        </div>
    );
};

export default Footer;
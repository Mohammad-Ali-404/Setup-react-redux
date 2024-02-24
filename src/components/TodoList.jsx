import React from 'react';

const TodoList = () => {
    return (
        <div>
            <ul className='border-t border-b flex justify-between items-center hover:bg-gray-100 hover:transition-all mb-4 space-x-4 border-gray-200 py-2'>
                <div className='flex gap-4 items-center'>
                    <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer'></li>
                    <p className='line-through'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex gap-4 '>
                    <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500'></li>
                    <li className='h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer'></li>
                    <li className='h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer'></li>
                </div>
            </ul> 
            <ul className='border-t border-b flex justify-between items-center hover:bg-gray-100 hover:transition-all space-x-4 border-gray-200 py-2'>
                <div className='flex gap-4 items-center'>
                    <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer'></li>
                    <p className='line-through'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, deleniti.</p>
                </div>
                <div className='flex gap-4 '>
                    <li className='h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500'></li>
                    <li className='h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer'></li>
                    <li className='h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer'></li>
                </div>
            </ul> 
        </div>
    );
};

export default TodoList;

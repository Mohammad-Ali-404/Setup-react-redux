import React from 'react';
import { PiNotePencilBold } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";

const Header = () => {
  return (
    <div>
        <form className="bg-gray-100 text-white p-4 flex justify-between items-center">
            <div className="flex items-center px-4">
                <PiNotePencilBold className="text-3xl text-black space-x-5"/>
            </div>
            <input
                type="text"
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-200 text-gray-500"
                placeholder='Type Your Todo'
            />
            <button type='submit' className=" text-white font-bold py-2 px-4 ml-4 rounded">
                <GoPlusCircle  className="text-3xl text-black space-x-5"/>
            </button>
        </form>
        <ul className='flex justify-between my-4 text-base text-gray-500'>
            <li className='flex items-center space-x-1 cursor-pointer'>
                <IoCheckmarkDone/>
                <span>Complete All Task</span>
            </li>
            <li className='cursor-pointer'>
                Clear Completed
            </li>
        </ul>
    </div>
  );
};

export default Header;

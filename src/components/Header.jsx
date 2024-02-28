import React, { useState } from 'react';
import { PiNotePencilBold } from "react-icons/pi";
import { GoPlusCircle } from "react-icons/go";
import { IoCheckmarkDone } from "react-icons/io5";
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';
import { useDispatch } from 'react-redux';
const Header = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const handleInput = (e) =>{
        setInput(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(added(input))
        setInput("")
    }
    const completeHandler = () =>{
        dispatch(allCompleted())
    }
    const clearComplete = () =>{
        dispatch(clearCompleted())
    }
  return (
    <div>
        <form onSubmit={submitHandler} className="bg-gray-100 text-white p-4 flex justify-between items-center">
            <div className="flex items-center px-4">
                <PiNotePencilBold className="text-3xl text-black space-x-5"/>
            </div>
            <input
                type="text"
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-200 text-gray-500"
                placeholder='Type Your Todo'
                value={input}
                onChange={handleInput}
            />
            <button type='submit' className=" text-white font-bold py-2 px-4 ml-4 rounded">
                <GoPlusCircle  className="text-3xl text-black space-x-5"/>
            </button>
        </form>
        <ul className='flex justify-between my-4 text-base text-gray-500'>
            <li className='flex items-center space-x-1 cursor-pointer' onClick={completeHandler}>
                <IoCheckmarkDone/>
                <span>Complete All Task</span>
            </li>
            <li className='cursor-pointer' onClick={clearComplete}>
                Clear Completed
            </li>
        </ul>
    </div>
  );
};

export default Header;

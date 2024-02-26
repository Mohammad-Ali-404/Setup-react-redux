import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const TodoList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>
                    <ul className='border-t px-2 border-b flex justify-between items-center hover:bg-gray-100 hover:transition-all space-x-4 border-gray-200 py-2'>
                        <div className='flex gap-4 items-center'>
                            <li className=''>
                                
                                {todo.completed ? <FaRegCheckCircle className='text-green-600'/> : <div ><input className={`h-4 w-4 border-2 border-gray-400 rounded-full cursor-pointer ${todo.completed && <FaRegCheckCircle className='text-green-600'/>}`} name="" checked={todo.completed} id="" /></div>}
                            </li>
                            <p className={todo.completed ? 'line-through' : ''}>{todo.text}</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                                <>
                                    <li className={`h-3 w-3 border-2 rounded-full cursor-pointer md:hover:bg-green-500 border-green-500 ${todo.color === 'green' && 'border-green-500  bg-green-500'} `}></li>
                                    <li className={`h-3 w-3 border-2 rounded-full cursor-pointer md:hover:bg-yellow-500 border-yellow-500 ${todo.color === 'yellow' && 'border-yellow-500  bg-yellow-500'} `}></li>
                                    <li className={`h-3 w-3 border-2 rounded-full cursor-pointer md:hover:bg-red-500 border-red-500  ${todo.color === 'red' && 'border-red-500 bg-red-500'} `}></li>
                                    <RxCrossCircled className="text-base cursor-pointer" />
                                </>
                        </div>
                    </ul>
                </div>    
            )}
        </div>
    );
};

export default TodoList;

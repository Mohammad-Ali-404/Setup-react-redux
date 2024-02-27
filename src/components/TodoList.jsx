import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { colorSelected, deleted, toggled } from '../redux/todos/actions';

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos);
{/* <FaRegCheckCircle className='text-green-600'/>  */}
    const handleStatusChange = (todoId) =>{
        dispatch(toggled(todoId))
    } 
    const handleChangeColor = (todoId, color) =>{
        dispatch(colorSelected(todoId, color))
    } 
    const handleDelete = (todoId) =>{
        dispatch(deleted(todoId));
    } 
    return (
        <div>
            {todos.map(todo => 
                <div key={todo.id}>
                    <ul className='border-t px-2 border-b flex justify-between items-center hover:bg-gray-100 hover:transition-all space-x-4 border-gray-200 py-2'>
                        <div className='flex gap-4 items-center rounded-full'>
                            <li className=''>
                            {todo.completed ? 
                                <FaRegCheckCircle type='checkbox' className='text-green-600'/> :
                                <div>
                                    <input 
                                        className={`h-4 w-4 border-2 border-gray-400  cursor-pointer ${todo.completed && 'bg-green-500 border-green-500 focus-within:border-green-500'}`} 
                                        type='checkbox' 
                                        name="" 
                                        checked={todo.completed} 
                                        onChange={() => handleStatusChange(todo.id)}
                                        id="" 
                                    />
                                </div>
                            }
                            </li>
                            <p className={todo.completed ? 'line-through' : ''}>{todo.text}</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                                <>
                                    <li className={`h-3 w-3 border-2 rounded-full cursor-pointer md:hover:bg-green-500 border-green-500 ${todo.color === 'green' && 'border-green-500  bg-green-500'} `} onClick={() => handleChangeColor(todo.id, 'green')}></li>
                                    <li className={`h-3 w-3 border-2 rounded-full cursor-pointer md:hover:bg-yellow-500 border-yellow-500 ${todo.color === 'yellow' && 'border-yellow-500  bg-yellow-500'} `} onClick={() => handleChangeColor(todo.id, 'yellow')}></li>
                                    <li className={`h-3 w-3 border-2 rounded-full cursor-pointer md:hover:bg-red-500 border-red-500  ${todo.color === 'red' && 'border-red-500 bg-red-500'} `} onClick={() => handleChangeColor(todo.id, 'red')}></li>
                                    <RxCrossCircled className="text-base cursor-pointer" onClick={() => handleDelete(todo.id)} />
                                </>
                        </div>
                    </ul>
                </div>    
            )}
        </div>
    );
};

export default TodoList;

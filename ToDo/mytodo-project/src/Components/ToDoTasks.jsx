import { useState } from 'react'
import { CheckIcon, PencilIcon } from '@heroicons/react/24/solid';
import React from 'react'
import ToDoForm from './ToDoForm';

const ToDoTasks = ({ todos, updateTodo }) => {

    const [editInput, setEditInput] = useState({

        id: null,
        text: ''

    })
    const submitUpdate = (value) => {
        updateTodo(editInput.id, value);
    };

    return (
        <div>

            {todos.map((todo) => {


                if (todo.id === editInput.id) return <ToDoForm handleAddTodo={submitUpdate} key={todo.id} editForm />
                return (
                    <div key={todo.id} className='mt-4 flex items-center border justify-between bg-white p-2 rounded-md'>

                        <span>{todo.title}</span>
                        <div className='space-x-4'>

                            <button className='bg-green-400 p-1 rounded-md'>

                                <CheckIcon className='h-6 w-6 text-white' />



                            </button>



                            <button onClick={() => {
                                setEditInput({

                                    id: todo.id,
                                    text: todo.title,
                                });
                            }}
                                className='bg-orange-400 p-1 rounded-md'>
                                <PencilIcon className='h-6 w-6 text-white' />



                            </button>
                        </div>




                        {/*{todo.completed ? '✅' : '❌'}  */}
                    </div>
                );
            })}


        </div >
    )
}

export default ToDoTasks
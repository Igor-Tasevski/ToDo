import { useState } from 'react'
import React from 'react'

import { CheckIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';


const ToDoForm = ({ handleAddTodo, editForm }) => {

    const [input, setInput] = useState('')

    //title is the input we are entering
    const handleSubmit = () => {
        handleAddTodo({ id: Math.random(Math.floor * 1000), title: input, completed: false })
        setInput('');  //To clear the input after entering the word
    }




    return (
        <div className='flex items-center bg-white p-2 rounded-md border-white'>
            <input value={input} onChange={(event) => setInput(event.target.value)} type="text" className='outline-none' placeholder={`${editForm ? 'Edit your todo' : 'Add your todo'}`} />


            {editForm ? (
                <div className="space-x-2">
                    <button className="bg-green-400 p-1 rounded-md">
                        <CheckIcon onClick={handleSubmit} className="h-6 w-6 text-white" />
                    </button>
                    <button className="bg-red-400 p-1 rounded-md">
                        <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
            ) : (

                <button onClick={handleSubmit} className='bg-blue-400 hover:bg-sky-700 p-2 rounded transition-all duration-300 transform active:scale-105'>
                    <PlusCircleIcon className="h-6 w-6  text-white" />
                </button>

            )}
        </div>
    )
}


export default ToDoForm
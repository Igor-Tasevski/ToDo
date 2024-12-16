import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import TodoList from './Components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='bg-sky-400 h-screen flex flex-col items-center pt-52'>
      <Header />
      <TodoList />
    </div>
  )
}

export default App

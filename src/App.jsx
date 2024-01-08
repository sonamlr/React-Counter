
import { useState } from 'react'
import './App.css'

function App() {
 const [count, setCounter] = useState(0);

  return (
    <>
     <h1 className='text-3xl font-bold underline'>Tailwind CSS</h1>
     <div>{count}</div>
     <button onClick={() => setCounter(count + 1)}>Increment</button>
     <button onClick={() => setCounter(count - 1)}>Decrement</button>

    </>
  )
}

export default App

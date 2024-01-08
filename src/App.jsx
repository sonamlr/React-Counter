
import { useState } from 'react'
import './App.css'

function App() {
 const [count, setCounter] = useState(0);
 const incrementCount = () => {
  if(count < 20){
    setCounter(count + 1)
  }
 }
 const decrementCount = () =>{
  if(count > 0){
    setCounter(count - 1)
  }
 }

  return (
    <>
     <h1 className='text-3xl font-bold underline'>Tailwind CSS</h1>
     <div>{count}</div>
     <button onClick={incrementCount}>Increment</button>
     <button onClick={decrementCount}>Decrement</button>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(5)

  const addValue = function(){
    // setCount(count + 1)
    if(count >= 11)
    {
      // setCount(count = 11)
      setCount(11)
    }
    else
    {
      setCount(count + 1)
    }
  }

  const removeValue = function(){
    // setCount(count - 1)
    if(count <= 0)
    {
      // setCount (count = 0)
      setCount (0)
    }
    else
    {
      setCount(count - 1)
    }
  }

  return (
    <>
      <button onClick={addValue}>Add {count}</button>
      <br />
      <button onClick={removeValue}>Remove {count}</button>
      <p>Value is: {count}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  
  let [counter,setCounter] = useState(15)


  const incre = () =>{
     counter += 1;
     setCounter(counter)
  }
  const decre = () =>{
    counter -= 1;
    setCounter(counter)
 }


  return (
    <>
  <h1>Counter : {counter}</h1>
  <button onClick={incre}>Increase</button>
  <button onClick={decre}>Decrease</button>
  </>
  )
  

}

export default App

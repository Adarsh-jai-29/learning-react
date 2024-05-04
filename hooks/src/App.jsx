
import { useState } from 'react'
import './App.css'

function App() {
  
  let [count,setCount] = useState(0)

// console.log(count)

 
  let handleAddClick = ()=>{
    setCount(count+1)
  
  }

  let handleRemoveClick = ()=>{
    if (count>0){
    setCount(count-1)
  
  }
 }



  return (
    <>
      <h1>{count}</h1>
      <button onClick = {handleAddClick}>Increase</button><br/>
      <button onClick = {handleRemoveClick}>Decrease</button>
      
    </>
  )
}

export default App

import React,{useState} from 'react'

function State() {
 const[count,setCount]=useState(0)

const update=()=>{
  setCount(count+1)  
}

  return (
    <div>
     <h1>useState</h1> 
     <h4>Click{count}</h4>  
    <button onClick={update} >click here</button>  
    </div>
  )
}

export default State
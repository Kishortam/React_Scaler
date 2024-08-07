import React, { useEffect, useRef, useState } from 'react'
import "./App.css"

const UseRef = () => {

    // Example 1:
    const [value, setValue] = useState(0);
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    });

    

    /* Example 2:
    const inputEle = useRef();

    const btnClicked =  () =>{
        console.log(inputEle.current);
        inputEle.current.style.backgroundColor = "pink";
    }
        */

  return (
    <>

   {/* Example 1:  */}
    <button onClick={()=> {setValue(prev => prev -1)}}>-1</button>
    <h1>{value}</h1>
    <button onClick={()=> {setValue(prev => prev +1)}}>+1</button>
    <h2>Count : {count.current}</h2>

    {/* Example 2 <input type="text" ref={inputEle} />
    <button onClick={btnClicked}>click here</button> */}
    </>
  )
}

export default UseRef
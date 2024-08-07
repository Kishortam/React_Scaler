import React, { useCallback, useState } from 'react'
import Header from './Components/Header';

const UseCallback = () => {

    const [count, setCount] = useState(0);

    const newFn = useCallback(()=>{}, [])

  return (
    <>
    <Header newFn={newFn}/>
    <h1>count : {count}</h1>
    <button onClick={()=> {setCount(prev => prev + 1)}}>Click Here</button>
    </>
  )
}

export default UseCallback
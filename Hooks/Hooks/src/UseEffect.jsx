import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

      
    // 1. it continously updating the value after specific timeout
    useEffect(()=>{
      setTimeout(()=>{
        setCount(count => count + 1)
      }, 2000)  
    })
    

    
    /*
    // 2. by using empty dependency array, excutes callback function olny once
    useEffect(()=>{
        setTimeout(()=>{
          setCount(count => count + 1)
        }, 2000)  
      },[])
      */


      /*
      // 3. we can add state variable in dependency to update
    useEffect(()=>{
        setTimeout(()=>{
          setCount(count => count + 1)
        }, 2000)  
    },[count])
    */

  return (
    <>
    <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default UseEffect
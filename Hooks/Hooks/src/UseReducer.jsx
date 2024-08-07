import React, { useReducer } from 'react'
import './App.css'

const UseReducer = () => {
    // useReducer is similar to useState, but instead of providing state and setter function,
    // it provides state and dispatch function
    // the useReducer Hook accepts two arguments 1. reducer funcion 2. initial state and returns current state and dispatch method

    const initialState = {count: 0}

    const reducer = (state, action)=>{
        switch(action.type){
            case 'increase': {
                return {count : state.count + 1}
            }
            case 'decrease': {
                return {count : state.count - 1}
            }
            default : {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=> dispatch({type : 'increase'})}>Increase</button>
    <button onClick={()=> dispatch({type : 'decrease'})}>Decrease</button>
    </>
  )
}

export default UseReducer
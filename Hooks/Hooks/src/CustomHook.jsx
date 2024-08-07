import React, { useEffect, useState } from 'react'
import UseLocalStorage from './UseLocalStorage'

const CustomHook = () => {
  
  const [name, setName] = UseLocalStorage('username', ' ')
  // we can add multiple entries
  const [salary, setSalary] = UseLocalStorage('salaryINR', ' ')


  return (
    <>
    <input type="text" placeholder='Enter your name' 
    value={name} onChange={(e) => setName(e.target.value)}/>
    <h2>Hello, {name}!</h2>

    <input type="text" placeholder='Enter your salary' 
    value={salary} onChange={(e) => setSalary(e.target.value)}/>
    <h2>Your salary is {salary}!</h2>
    </>
  )
}

export default CustomHook
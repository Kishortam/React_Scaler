import React from 'react'
import Profile from './Components/Profile'
import Footer from './Components/Footer'

const UseContext = () => {
    // useContext is a react hook that allows you access data from any component
    // without explicitely passing it down through props at every level.

  return (
    <>
    <Profile/>
    <Footer/>
    </>
  )
}

export default UseContext
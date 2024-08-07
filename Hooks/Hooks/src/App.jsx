import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState is used to update or change state of any variable
  // it comes with state variable and function to update it.

  /* Example 1:
  const [color, setColor] = useState('Red')

  const changeColor = () =>{
    setColor('Blue')
  }
    */

  /* Example 2
  const [car, setCar] = useState({
    brand : "Ferrari",
    model : "Roma",
    year : "2023",
    color : "Red"
  })

  const changeColor = () =>{
    setCar((prev) =>{
      return {...prev, color : 'Yellow'}
      //return {...prev, color : 'Yellow', year : "2024"}
    })
  }
    */

  const [count, setCount] = useState(0);

  const increaseCount = () =>{
    setCount(count+1) // to increase a number by 1

    /* to increase by given number of functions, it will update number by 3
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    */
  }

  return (
    <>
    
      {/*Example 1: <div>
        <h1>My favourite color is {color}</h1>
        <button onClick={changeColor}>Blue</button>
      </div> */}

      {/*Example 2 :<h1>My {car.brand} </h1>
      <h2>it is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Yellow Car</button> */}

      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase</button> 
    </>
  )
}

export default App

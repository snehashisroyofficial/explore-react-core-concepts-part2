import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import TicketAdd from './ticketAdd'
import People from './userEffect'
import Friends from './friends'

function App() {
  const [count, setCount] = useState(0)


  function handleClick() {
  alert('Button Successfully Clicked!')
}


  return (
    <>
      <Friends></Friends>
      <h1>React Core Concepts 2</h1>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={()=> {alert('Button 2 Clicked')}}> Button 2</button>
      <Counter></Counter>
      <TicketAdd></TicketAdd>
     <People></People>
    </>
  )
}

export default App

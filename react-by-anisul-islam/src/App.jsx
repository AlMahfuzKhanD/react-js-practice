import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import './App.css'

const headingStyle = {
  color:'red',
  fontSize:'3rem'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='headingStyle'>Hello</h1>
      <Card />
      <Card />
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import Data from './data.json'
import './App.css'

const headingStyle = {
  color:'red',
  fontSize:'3rem'
}

function App() {
  const [count, setCount] = useState(0)

  let items = [];

  return (
    <>
      <h1 className='headingStyle'>Hello</h1>
      {items = Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc}/>)}

      
    </>
  )
}

export default App

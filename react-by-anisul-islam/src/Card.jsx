import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const headingStyle = {
  color:'red',
  fontSize:'3rem'
}

function Card() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
                <h3 className='cardTitle'>Call Family</h3>
                <p className='cardDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, quod.</p>
                <p className='cardFooter'>Al Mahfuz</p>
            </div>
      
      
    </>
  )
}

export default Card

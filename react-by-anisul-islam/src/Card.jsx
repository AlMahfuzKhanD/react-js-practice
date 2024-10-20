import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const headingStyle = {
  color:'red',
  fontSize:'3rem'
}

const todoTitle = "Call Family"
const todoDesc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, quod."
const date = new Date()
const dateName = date.getDate()
const monthName = date.getMonth()
const currentYear = date.getFullYear()

function Card(props) {
  const [count, setCount] = useState(0)
  const {titleText,descText} = props;

  return (
    <>
      <div className='card'>
                <h3 className='cardTitle'>{titleText}</h3>
                <p className='cardDesc'>{descText}</p>
                <p className='cardFooter'>{dateName+'/'+monthName+'/'+currentYear}</p>
            </div>
      
      
    </>
  )
}

export default Card

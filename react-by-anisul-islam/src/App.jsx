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

  // let items = [];

  // for(let x = 0; x <Data.length; x++){
  //   items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>)
  // }

  return (
    <>
      <h1 className='headingStyle'>Hello</h1>
      {/* {
        Data.map((item,index) => (
          <article key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {
              item.phones.map((phone,index) => 
                <div key={index}>
                  <p> Home: {phone.home}</p>
                  <p> Office: {phone.office}</p>
                </div>
              )
            }
          </article>

        ))
      } */}
      {Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc}/>)}
      {/* {items = Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc}/>)} */}
      {/* {items} */}

      
    </>
  )
}

export default App

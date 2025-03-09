//import { useState } from 'react'
import '../App.css'

function Header() {
  //const [count, setCount] = useState(0)

  return (
    <div className='header'>
        <ul className='navlinks'>
          <li>Profit</li>
          <li>Price History</li>
          <li>Volume</li>
          <li>Costs</li>
          <li>Population</li>
          <li>Card Info</li>
        </ul>
    </div>
  )
}

export default Header
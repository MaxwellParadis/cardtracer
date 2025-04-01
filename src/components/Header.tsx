import { useState } from 'react'
import '../App.css'

function Header() {
  const [active, setActive] = useState(0);

  const handleActive = (i:number) => {
    setActive(i)
  }

  const menu = ['Profit', 'Price History', 'Volume', 'Costs', 'Population', 'Card Info'];

  return (
    <div className='header'>
        <ul className='navlinks'>
          {menu.map((x:string,i:number) => (<li key={x} onClick={()=>handleActive(i)} className={`navlinks-flex ${active == i ? 'navlink-border': ''}`}>{x}</li>))}
        </ul>
    </div>
  )
}

export default Header
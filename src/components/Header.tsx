//import { useState, useContext } from 'react'
import '../App.css'
import { useCardContext } from './context'

export function Header() {
  //const [active, setActive] = useState(0);
  const { menu, setMenu } = useCardContext();

  const handleMenu = (i:number) => {
    setMenu(i)
  }

  const menuList = ['Profit', 'Price History', 'Volume', 'Costs', 'Population', 'Card Info'];

  return (
    <div className='header'>
        <ul className='navlinks'>
          {menuList.map((x:string,i:number) => (<li key={x} onClick={()=>handleMenu(i)} className={`navlinks-flex ${menu == i ? 'navlink-border': ''}`}>{x}</li>))}
        </ul>
    </div>
  )
}

export default Header;

//import { useState } from 'react'
import '../App.css'

export function ActiveCard() {
  //const [count, setCount] = useState(0)

  return (
    <div className="logo">
      <img src='src\assets\CardTracer_Logo.png' width="225"></img>
      <div className='actCard'>
        <img src="src\assets\Alakazam_1.jpg" alt="Alakazam 1" width="90%"></img>
        <h4 className="underline-text">Alakazam #1</h4>
        <h5>Base Set 2</h5>
      </div>
    </div>
  )
}

export default ActiveCard

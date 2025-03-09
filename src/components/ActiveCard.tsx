//import { useState } from 'react'
import '../App.css'

function ActiveCard() {
  //const [count, setCount] = useState(0)

  return (
    <div className='actCard'>
      <h4 className="underline-text">Alakazam #1</h4>
      <h5>Base Set 2</h5>
      <img src="src\assets\Alakazam_1.jpg" alt="Alakazam 1"></img>
      <h4>Ungraded Value:</h4>
      <h5>$76.87</h5>
    </div>
  )
}

export default ActiveCard
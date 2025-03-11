//import { useState } from 'react'
import '../App.css'

function TilePSA() {
  //const [count, setCount] = useState(0)

  return (
    <div className='psa'>
      Current Price Here
      <div className='psa-tile'>
        <h3>Loss</h3>
        <br></br>
        <b>$13.42</b>
        <p className='small-text underline-text'>$59.87</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ul className='tile-categories'>
          <li>Month</li>
          <li>Pop.</li>
          <li>Volatility</li>
          <li>Liquidity</li>
          </ul>
      </div>
    </div>
  )
}

export default TilePSA
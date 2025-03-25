//import { useState } from 'react'
import '../App.css'

function TilePSA() {
  //const [count, setCount] = useState(0)

  return (
    <div className='psa'>
        <table className='card-grid'>
            <th>PSA 7</th>
            <th>Loss</th>
        </table>

      <div className='card'>
        <h3>Loss</h3>
        <h2>$13.42</h2>
        <h5>$59.95</h5>
      </div>

      <div className='card'>
        <h3>Loss</h3>
        <h2>$13.42</h2>
        <h5>$59.95</h5>
        <table className='card-table'>
          <tr>
            <th><img src='src\assets\stock up.png' width="30"></img></th>
            <th><img src='src\assets\progress bar.png' width="40"></img></th>
            <th><img src='src\assets\progress bar.png' width="40"></img></th>
            <th><img src='src\assets\progress bar.png' width="40"></img></th>
          </tr>
          <tr>
            <td>+3.4%</td>
            <td>Low</td>
            <td>High</td>
            <td>High</td>
          </tr>
          <tr>
            <th>Month</th>
            <th>Pop.</th>
            <th>Volatility</th>
            <th>Liquidiy</th>
          </tr>
        </table>
      </div>
      <div className='card'>
        <h3>Loss</h3>
        <h2>$13.42</h2>
        <h5>$59.95</h5>
      </div>
    </div>
  )
}

export default TilePSA
//import { useState } from 'react'
import '../App.css'

function TilePSA() {
  //const [count, setCount] = useState(0)

  return (
    <div className='psa'>
      <div><img src='src\assets\Left Arrow.svg' height="30"></img></div>
      <div className='card'>
        <h3>Loss</h3>
        <h2>$13.42</h2>
        <h5>$59.95</h5>
        <table className='card-table'>
          <tr>
            <th><img src='src\assets\stock up.png' width="30"></img></th>
            <th><img src='src\assets\Progress Bar_Red.svg' width="40"></img></th>
            <th><img src='src\assets\Progress Bar_Red.svg' width="40"></img></th>
            <th><img src='src\assets\Progress Bar_Red.svg' width="40"></img></th>
          </tr>
          <tr>
            <td>+3.4%</td>
            <td>Low</td>
            <td>High</td>
            <td>High</td>
          </tr>
          <tr>
            <th>Month</th>
            <th>Population</th>
            <th>Volatility</th>
            <th>Liquidiy</th>
          </tr>
        </table>
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
            <th>Population</th>
            <th>Volatility</th>
            <th>Liquidiy</th>
          </tr>
        </table>
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
            <th>Population</th>
            <th>Volatility</th>
            <th>Liquidiy</th>
          </tr>
        </table>
      </div>
      
      <div className='card-container'>
        <div className='card-grid'><h2>PSA 7</h2></div>
        <div className='card-grid'><h3>Loss</h3></div>
        <div className='card-grid'><h2>$13.42</h2></div>
        <div className='card-grid'><h5>$59.95</h5></div>
        <div className='card-grid'><h5>$59.95</h5></div>
        <div className='card-grid'><h5>$59.95</h5></div>
        <div className='card-grid'><h5>$59.95</h5></div>
        <div className='card-grid'><h5>$59.95</h5></div>
      </div>
      <div><img src='src\assets\Right Arrow.svg' height="30"></img></div>
    </div>
  )
}

export default TilePSA
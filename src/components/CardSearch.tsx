//import { useState } from 'react'
import '../App.css'

function CardSearch() {
  //const [count, setCount] = useState(0)

  return (
    <div className='cardSearch'>
        Search and Results

    <table>
      <tr>
        <th></th>
        <th>Set</th>
        <th>Card Name</th>
        <th>Raw Value</th>
        <th>PSA 8 Value</th>
        <th>PSA 9 Value</th>
        <th>PSA 10 Value</th>
        <th>PSA 8 Profit</th>
        <th>PSA 9 Profit</th>
        <th>PSA 10 Profit</th>   
      </tr>
      <tr>
        <td>
         <img src="src\assets\Alakazam_1.jpg" alt="Alakazam 1" width='75em'></img>
        </td>
        <td>151</td>
        <td>Alakazam EX #201</td>
        <td>$67.74</td>
        <td>$68.75</td>
        <td>$70.53</td>
        <td>$80.53</td>
        <td>$14.38</td>
        <td>$47.68</td>
        <td>$143.61</td>
      </tr>
    </table>
    </div>
  )
}

export default CardSearch
//import { useState } from 'react'
import '../App.css'

function CardSearch() {
  //const [count, setCount] = useState(0)

  const defCard = {
    id: 1,
    set: 151,
    name: 'Alakazam EX #201',
    value: 67.74,
    v8: 68.75,
    v9: 70.53,
    v10: 80.53,
    p8: 14.38,
    p9: 47.68,
    p10: 143.61
  };

  const cardSelection = [defCard, defCard, defCard, defCard, defCard, defCard]

  return (
    <div className='cardSearch'>
      Search and Results
      <table>
        <tbody>
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
          {cardSelection.length > 0 ? cardSelection.map((x:any, i:number) =>
            <tr key={i} >
              <td>
                <img src="src\assets\Alakazam_1.jpg" alt="Alakazam 1" width='75em'></img>
              </td>
              <td>{x.set}</td>
              <td>{x.name}</td>
              <td>${x.value}</td>
              <td>${x.v8}</td>
              <td>${x.v9}</td>
              <td>${x.v10}</td>
              <td>${x.p8}</td>
              <td>${x.p9}</td>
              <td>${x.p10}</td>
            </tr>
          ) : null}
        </tbody>
      </table> 
    </div>
  )
}

export default CardSearch
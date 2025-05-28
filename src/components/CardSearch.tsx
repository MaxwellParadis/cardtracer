//import { useState } from 'react'
import '../App.css'

export function CardSearch() {
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
      <input type="text" placeholder="Search..."></input><button>Search</button>
      <br></br>
      <ul className='filter-checkbox-container'>
        <div>
          <input type="checkbox" id="Language1" name="Language1" value="English"></input>
          <label htmlFor="Language1">English</label>
        </div>
        <div>
          <input type="checkbox" id="Language2" name="Language2" value="Japanese"></input>
          <label htmlFor="Language2">Japanese</label>
          </div>
        <div>
          <input type="checkbox" id="Product1" name="Product1" value="Cards"></input>
          <label htmlFor="Product1">Cards</label>
        </div>
        <div>
          <input type="checkbox" id="Product2" name="Product2" value="Sealed"></input>
          <label htmlFor="Product2">Sealed</label>
        </div>
        <div>
          <input type="checkbox" id="Binder" name="Binder" value="Binder"></input>
          <label htmlFor="Binder">Binder</label>
        </div>
        <div>
          <input type="checkbox" id="PSA8" name="PSA8" value="PSA8"></input>
          <label htmlFor="PSA8">PSA 8 Profit</label>
        </div>
        <div>
          <input type="checkbox" id="PSA9" name="PSA9" value="PSA9"></input>
          <label htmlFor="PSA9">PSA 9 Profit</label>
        </div>
        <div>
          <input type="checkbox" id="PSA10" name="PSA10" value="PSA10"></input>
         <label htmlFor="PSA10">PSA 10 Profit</label>
        </div>
      </ul>
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
          {cardSelection.length > 0 ? cardSelection.map((x, i) =>
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

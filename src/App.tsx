//import { useState } from 'react'
import './App.css'
import { ActiveCard, CardSearch, Header, TilePSA } from './components'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <div className='horizontal'>
          <ActiveCard/>
          <div className='vertical'>
            <Header/>
            <TilePSA/>
          </div>
        </div>
        <CardSearch/>
      </div>
    </>
  )
}

export default App

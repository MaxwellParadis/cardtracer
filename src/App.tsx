//import { useState } from 'react'
import './App.css'
import { CardProvider } from './components/context'
import { Index } from './components/Index'

function App() {


  return (
    <>
      <div className='app'>
      	<CardProvider>
       	  <Index/>
        </CardProvider>
      </div>
    </>
  )
}

export default App

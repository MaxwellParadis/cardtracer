//import { useState } from 'react'
import ActiveCard from "./ActiveCard";
import CardSearch from "./CardSearch";
import Header from "./Header";
import TilePSA from "./TilePSA";
import History from "./History";
import Volume from "./Volume";
import Costs from "./Costs";
import Population from "./Population";
import Info from "./Info";
import { JSX } from 'react';


export { ActiveCard, CardSearch, Header, TilePSA, History, Volume, Costs, Population, Info };

import '../App.css'
import { useCardContext } from './context'

export function Index() {
  const { menu } = useCardContext();

  function getComponents(n: number): [JSX.Element, JSX.Element] {
    switch (n) {
      case 0:
        return [<TilePSA/>, <CardSearch/>]
      case 1:
        return [<TilePSA/>, <History/>]
      case 2:
        return [<TilePSA/>, <Volume/>]
      case 3:
        return [<TilePSA/>, <Costs/>]
      case 4:
        return [<TilePSA/>, <Population/>]
      case 5:
        return [<TilePSA/>, <Info/>]

      default:
        return [<TilePSA/>, <CardSearch/>]
    }
  }

  const [upper, lower] = getComponents(menu);

  return (
    <>
      <div className='horizontal'>
            <ActiveCard/>
            <div className='vertical'>
              <Header/>
              { upper }
            </div>
          </div>
          { lower }
    </>
  )
}

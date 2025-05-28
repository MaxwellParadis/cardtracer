import React, { createContext, useContext, useState, ReactNode } from 'react'

type CardContextType = {
  cards: unknown[]
  setCards: React.Dispatch<React.SetStateAction<unknown[]>>
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
  menu: number
  setMenu: React.Dispatch<React.SetStateAction<number>>
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<unknown[]>([])
  const [active, setActive] = useState<number>(0)
  const [menu, setMenu] = useState<number>(0)

  return (
    <CardContext.Provider value={{ cards, setCards, active, setActive, menu, setMenu }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider')
  }
  return context
}

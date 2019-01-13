import React, { useState } from 'react'
import data from './data/data'

export const BoredContext = React.createContext()

export const BoredState = ({ children }) => {
  const [activities] = useState(data)

  const random = a => a[Math.floor(Math.random() * a.length)]

  const getRandom = () => random(activities)

  return (
    <BoredContext.Provider value={{ activities, getRandom }}>
      {children}
    </BoredContext.Provider>
  )
}

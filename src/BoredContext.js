import React, { useState } from 'react'
import data from './data/activities'

export const BoredContext = React.createContext()

export const BoredState = ({ children }) => {
  const activities = Object.keys(data)
  const links = Object.values(data)
  const getRandomIndex = a => Math.floor(Math.random() * a.length)

  const [index] = useState(getRandomIndex(activities))

  const getActivity = () => activities[index]
  const getLink = () => links[index]

  return (
    <BoredContext.Provider value={{ getActivity, getLink }}>
      {children}
    </BoredContext.Provider>
  )
}

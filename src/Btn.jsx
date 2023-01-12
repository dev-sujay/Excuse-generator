import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import { btnData } from './btnData';



const Btn = () => {
  const fetchExcuse = useContext(AppContext)
  return (
    btnData.map((category) => {
      return <button onClick={() => fetchExcuse(category)}>{category}</button>
    })

  )
}

export default Btn

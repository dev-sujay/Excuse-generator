import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'

const Btn = (props) => {
    const fetchExcuse = useContext(AppContext)
  return (
    <button onClick={() => fetchExcuse(props.category)}>{props.category}</button>
  )
}

export default Btn

import { useState, createContext } from 'react'
import axios from 'axios';
import Btn from './Btn';
import './App.css'



export const AppContext = createContext()

function App() {
  const [excuseData, setexcuseData] = useState(null);

  const fetchExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setexcuseData(res.data[0])
    })
  }

  return (
      <AppContext.Provider value={fetchExcuse}>
        <div className="App">
          <h2>Generate an excuse by clicking buttons bellow</h2>
          <Btn />
          <h2>Excuse : {excuseData?.excuse}</h2>
        </div>
      </AppContext.Provider>
  )
}

export default App

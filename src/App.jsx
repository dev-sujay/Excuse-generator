import { useState, createContext } from 'react'
import axios from 'axios';
import './App.css'
import { btnData } from './btnData';
import Btn from './Btn';

export const AppContext = createContext()

function App() {
  const [excuseData, setexcuseData] = useState(null);

  const fetchExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setexcuseData(res.data[0])
      console.log(res.data);
    })
  }

  return (
    <AppContext.Provider value={fetchExcuse}>
      <div className="App">
        <h2>Generate an excuse by clicking buttons bellow</h2>
        {btnData.map((category) => {
          return <Btn category={category} />
        })}
        <p>{excuseData?.excuse}</p>
      </div>
    </AppContext.Provider>
  )
}

export default App

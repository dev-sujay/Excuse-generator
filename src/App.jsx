import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [excuseData, setexcuseData] = useState(null);

  const fetchExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setexcuseData(res.data[0])
      console.log(res.data);
    })
  }

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuse("party")}>party</button>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <p>{excuseData?.excuse}</p>
    </div>
  )
}

export default App

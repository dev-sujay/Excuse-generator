import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [excuse, setexcuse] = useState("");

  const fetchExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
      setexcuse(res.data.excuse)
      
    })
  }

  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchExcuse("party")}>party</button>
      <button onClick={() => fetchExcuse("family")}>family</button>
      <button onClick={() => fetchExcuse("office")}>office</button>
      <p>{excuse}</p>
    </div>
  )
}

export default App

import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [totalPrice, setTotalPrice] = useState(0)

  const addToTotal = (amount, e) => {
    if (e.target.checked) {
      setTotalPrice((prev) => prev + amount)
    } else {
      setTotalPrice((prev) => prev - amount)
    }
  }

  return (
    <div className="App">
      <p>What you want to do?</p>
      <label htmlFor="web">Web Page (500e)</label>
      <input type="checkbox" name="web" onChange={(e) => addToTotal(500, e)} />
      <label htmlFor="seo">SEO consulting (300e)</label>
      <input type="checkbox" name="seo" onChange={(e) => addToTotal(300, e)} />
      <label htmlFor="ads"> Google ads campaign (200e)</label>
      <input type="checkbox" name="ads" onChange={(e) => addToTotal(200, e)} />

      <h2>Total:{totalPrice} </h2>
    </div>
  )
}

export default App

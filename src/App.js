import './App.css'
import Panel from './components/panel/Panel'
import { useState, useEffect } from 'react'

function App() {
  const [totalPrice, setTotalPrice] = useState(0)

  const [isClicked, setIsClicked] = useState({
    web: false,
    seo: false,
    ads: false,
  })

  const addToTotal = (amount, e, type) => {
    if (e.target.checked) {
      setTotalPrice((prev) => prev + amount)
    } else {
      setTotalPrice((prev) => prev - amount)
    }

    switch (type) {
      case 'web':
        setIsClicked((prevClicked) => {
          return {
            ...prevClicked,
            web: !isClicked.web,
          }
        })
        break
      case 'seo':
        setIsClicked((prevClicked) => {
          return {
            ...prevClicked,
            seo: !isClicked.seo,
          }
        })
        break
      case 'ads':
        setIsClicked((prevClicked) => {
          return {
            ...prevClicked,
            ads: !isClicked.ads,
          }
        })
        break

      default:
        break
    }
  }

  return (
    <div className="App">
      <p>What you want to do?</p>
      <label htmlFor="web">Web Page (500e)</label>
      <input
        type="checkbox"
        name="web"
        onChange={(e) => addToTotal(500, e, 'web')}
      />

      {isClicked.web && (
        <Panel setTotalPrice={setTotalPrice} isClicked={isClicked.web} />
      )}
      <label htmlFor="seo">SEO consulting (300e)</label>
      <input
        type="checkbox"
        name="seo"
        onChange={(e) => addToTotal(300, e, 'seo')}
      />
      <label htmlFor="ads"> Google ads campaign (200e)</label>
      <input
        type="checkbox"
        name="ads"
        onChange={(e) => addToTotal(200, e, 'ads')}
      />

      <h2>Total:{totalPrice} </h2>
    </div>
  )
}

export default App

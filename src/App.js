import './App.css'
import { Input, Wrapper } from './components/extra/styles'
import { Label, HeadingTwo } from './styles'
import Panel from './components/panel/Panel'
import { useState } from 'react'

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
    <Wrapper>
      <HeadingTwo>What you want to do?</HeadingTwo>
      <Label htmlFor="web">Web Page (500e)</Label>
      <Input
        type="checkbox"
        name="web"
        onChange={(e) => addToTotal(500, e, 'web')}
      />

      {isClicked.web && (
        <Panel setTotalPrice={setTotalPrice} isClicked={isClicked.web} />
      )}
      <Label htmlFor="seo">SEO consulting (300e)</Label>
      <Input
        type="checkbox"
        name="seo"
        onChange={(e) => addToTotal(300, e, 'seo')}
      />
      <Label htmlFor="ads"> Google ads campaign (200e)</Label>
      <Input
        type="checkbox"
        name="ads"
        onChange={(e) => addToTotal(200, e, 'ads')}
      />

      <HeadingTwo>Total:{totalPrice} </HeadingTwo>
    </Wrapper>
  )
}

export default App

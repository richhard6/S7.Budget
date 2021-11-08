import { Input, Wrapper } from '../extra/styles'
import { Label, HeadingTwo } from '../../styles'
import Panel from '../panel/Panel'
import BudgetList from '../budgetList/BudgetList'
import { useState, useEffect } from 'react'

function Main() {
  const [totalPrice, setTotalPrice] = useState(0)

  const [isClicked, setIsClicked] = useState({
    web: false,
    seo: false,
    ads: false,
  })

  const [budget, setBudget] = useState({
    username: '',
    budgetName: '',
    isClicked,
    totalPrice,
    extras: {},
  })

  useEffect(() => {
    setBudget((prevBudget) => {
      return {
        ...prevBudget,
        isClicked: isClicked,
      }
    })
  }, [isClicked])

  useEffect(() => {
    setBudget((prevBudget) => {
      return {
        ...prevBudget,
        totalPrice,
      }
    })
  }, [totalPrice])

  const handleChange = (e, type) => {
    if (type === 'username') {
      setBudget((prevBudget) => {
        return {
          ...prevBudget,
          username: e.target.value,
        }
      })
    } else {
      setBudget((prevBudget) => {
        return {
          ...prevBudget,
          budgetName: e.target.value,
        }
      })
    }
  }

  const addToTotal = (amount, e, type) => {
    if (e.target.checked) {
      setTotalPrice((prev) => prev + amount)
    } else {
      setTotalPrice((prev) => prev - amount)
    }

    setBudget((prevBudget) => {
      //no se esta guardadno el totalp
      return {
        ...prevBudget,
        totalPrice: totalPrice,
      }
    })

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
      <BudgetList budget={budget} />
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        placeholder="your name"
        onChange={(e) => handleChange(e, 'username')}
      />
      <Label htmlFor="budget">Budget Name</Label>
      <Input
        type="text"
        name="budget"
        placeholder="e.g. Webpage + seo"
        onChange={(e) => handleChange(e, 'budgetName')}
      />
      <HeadingTwo>What you want to do?</HeadingTwo>
      <Label htmlFor="web">Web Page (500e)</Label>
      <Input
        type="checkbox"
        name="web"
        onChange={(e) => addToTotal(500, e, 'web')}
      />

      {isClicked.web && (
        <Panel
          setTotalPrice={setTotalPrice}
          isClicked={isClicked.web}
          setBudget={setBudget}
          budget={budget}
        />
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

export default Main

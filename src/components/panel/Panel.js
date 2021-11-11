import { useState, useEffect } from 'react'
import Extra from '../extra/Extra'

import { useHistory } from 'react-router-dom'

function Panel({ setTotalPrice, isClicked, setBudget, budget }) {
  const [adds, setAdds] = useState({ pages: 0, languages: 0 })
  const [lastAdd, setLastAdd] = useState(0)

  let history = useHistory()

  useEffect(() => {
    setAdds({ pages: 0, languages: 0 })
  }, [isClicked.web])

  useEffect(() => {
    history.push(
      `/budget?web=${isClicked.web}&seo=${isClicked.seo}&ads=${isClicked.ads}&webNum=${adds.pages}&langNum=${adds.languages}`
    )
  }, [isClicked, history, adds])

  useEffect(() => {
    setBudget((prevBudget) => {
      return {
        ...prevBudget,
        extras: { ...adds },
      }
    })
  }, [adds, setBudget])

  const getAdds = (type, e) => {
    const add = adds.pages * adds.languages * 30
    if (e.target.value) {
      if (type === 'pages') {
        setAdds((prevAdds) => {
          return {
            ...prevAdds,
            pages: e.target.value,
          }
        })
      }
      if (type === 'languages') {
        setAdds((prevAdds) => {
          return {
            ...prevAdds,
            languages: e.target.value,
          }
        })
      }
      if (lastAdd < add) {
        setTotalPrice((prevPrice) => (prevPrice = prevPrice + add))
      } else {
        setTotalPrice((prevPrice) => (prevPrice = prevPrice - add))
      }
    }
  }

  return (
    <>
      <Extra
        adds={adds}
        setAdds={setAdds}
        setTotalPrice={setTotalPrice}
        setLastAdd={setLastAdd}
        lastAdd={lastAdd}
        getAdds={getAdds}
        budget={budget}
      />
    </>
  )
}

export default Panel

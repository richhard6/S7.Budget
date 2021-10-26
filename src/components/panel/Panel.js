import { useState, useEffect } from 'react'
import Extra from '../extra/Extra'

function Panel({ setTotalPrice, isClicked }) {
  const [adds, setAdds] = useState({ pages: 0, languages: 0 })
  const [lastAdd, setLastAdd] = useState(0)

  //en el localStorage hay que guardar el precio total, comn lo que estaba marcado y la cantidad de pages y languages que habia antes

  useEffect(() => {
    setAdds({ pages: 0, languages: 0 })
  }, [isClicked])

  const getAdds = (type, e) => {
    const add = adds.pages * adds.languages * 30
    localStorage.setItem(`budget${adds.languages}`, JSON.stringify(adds))
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
      />
    </>
  )
}

export default Panel

import { useState, useEffect } from 'react'
import Extra from '../extra/Extra'

function Panel({ setTotalPrice, isClicked }) {
  const [adds, setAdds] = useState({ pages: 0, languages: 0 })
  const [lastAdd, setLastAdd] = useState(0)

  useEffect(() => {
    setAdds({ pages: 0, languages: 0 })
  }, [isClicked])

  const getAdds = (type, e) => {
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
    }
  }

  return (
    <div>
      <Extra
        adds={adds}
        setAdds={setAdds}
        setTotalPrice={setTotalPrice}
        setLastAdd={setLastAdd}
        lastAdd={lastAdd}
        getAdds={getAdds}
      />
    </div>
  )
}

export default Panel

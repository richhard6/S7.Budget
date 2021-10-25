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
      switch (type) {
        case 'pages':
          if (e.target.value.length > 0)
            setAdds((prevAdd) => {
              return {
                ...prevAdd,
                pages: parseInt(e.target.value),
              }
            })

          break
        case 'languages':
          if (e.target.value.length > 0)
            setAdds((prevAdd) => {
              return {
                ...prevAdd,
                languages: parseInt(e.target.value),
              }
            })
          break

        default:
          break
      }
    } else {
      setTotalPrice((prev) => prev - lastAdd)
      setLastAdd((prev) => (prev = 0))
    }
  }

  return (
    <div>
      <Extra
        getAdds={getAdds}
        adds={adds}
        setAdds={setAdds}
        setTotalPrice={setTotalPrice}
        setLastAdd={setLastAdd}
      />
    </div>
  )
}

export default Panel

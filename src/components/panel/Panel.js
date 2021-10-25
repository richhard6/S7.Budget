import { useState, useEffect } from 'react'
import Extra from '../extra/Extra'

function Panel({ setTotalPrice, isClicked }) {
  const [adds, setAdds] = useState({ pages: 0, languages: 0 })
  const [lastAdd, setLastAdd] = useState(0)

  useEffect(() => {
    const add = adds.pages * adds.languages * 30
    setTotalPrice((prevPrice) => (prevPrice = prevPrice + add))

    setLastAdd((prev) => (prev = add))
  }, [adds, setTotalPrice, setLastAdd])

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
                pages: parseInt(e.target.value), //la logica de aaqui hay q pasarla iogiuaito al otro componente... falta la parte de if e,target, y el if else de aajo
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

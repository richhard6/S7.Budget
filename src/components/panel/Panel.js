import { useState, useEffect } from 'react'

function Panel({ setTotalPrice, isClicked }) {
  const [adds, setAdds] = useState({ pages: 0, languages: 0 })

  useEffect(() => {
    setTotalPrice(
      (prevPrice) => (prevPrice = prevPrice + adds.pages * adds.languages * 30)
    )
  }, [adds, setTotalPrice])

  useEffect(() => {
    setAdds({ pages: 0, languages: 0 })
  }, [isClicked])

  const getAdds = (type, e) => {
    switch (type) {
      case 'pages':
        setAdds((prevAdd) => {
          return {
            ...prevAdd,
            pages: parseInt(e.target.value),
          }
        })

        break
      case 'languages':
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
  }

  return (
    <div>
      <label htmlFor="pages">Pages quantity</label>
      <input
        type="text"
        name="pages"
        placeholder="1"
        onChange={(e) => getAdds('pages', e)}
      />
      <label htmlFor="lang">Language quantity</label>
      <input
        type="text"
        name="lang"
        placeholder="1"
        onChange={(e) => getAdds('languages', e)}
      />
    </div>
  )
}

export default Panel

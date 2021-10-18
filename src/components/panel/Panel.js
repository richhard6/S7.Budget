import { useState } from 'react'

function Panel({ setTotalPrice }) {
  const [adds, setAdds] = useState({ pages: 0, languages: 0 })
  console.log(adds)

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

  setTotalPrice((prevPrice) => (prevPrice *= adds.pages * adds.languages * 30))
  console.log(500 + adds.pages * adds.languages * 30)
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

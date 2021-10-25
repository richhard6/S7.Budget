import { useEffect } from 'react'

function Extra({ getAdds, adds, setAdds, setTotalPrice, setLastAdd, lastAdd }) {
  const handleClick = (type, style) => {
    if (adds.pages || adds.languages) {
      switch (type) {
        case 'add':
          if (style === 'pages') {
            setAdds((prevAdds) => {
              console.log(prevAdds.pages)
              return {
                ...prevAdds,
                pages: ++prevAdds.pages, //here's the bug
              }
            })
          }

          if (style === 'languages') {
            setAdds((prevAdds) => {
              return {
                ...prevAdds,
                languages: ++prevAdds.languages,
              }
            })
          }

          break

        case 'substract':
          if (style === 'pages') {
            setAdds((prevAdds) => {
              return {
                ...prevAdds,
                pages: --prevAdds.pages,
              }
            })
          }

          if (style === 'languages') {
            setAdds((prevAdds) => {
              return {
                ...prevAdds,
                languages: --prevAdds.languages,
              }
            })
          }
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
      <input
        value={adds.pages}
        onChange={(e) => getAdds('pages', e)}
        type="number"
      />

      <button onClick={() => handleClick('substract', 'pages')}>-</button>
      <button onClick={() => handleClick('add', 'pages')}>+</button>

      <input
        value={adds.languages}
        onChange={(e) => getAdds('languages', e)}
        type="number"
      />

      <button onClick={() => handleClick('substract', 'languages')}>-</button>
      <button onClick={() => handleClick('add', 'languages')}>+</button>
    </div>
  )
}

export default Extra

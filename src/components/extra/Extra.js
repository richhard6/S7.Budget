import { useState } from 'react'

function Extra({ getAdds, adds, setAdds }) {
  const [add, setAdd] = useState({ languages: 0, pages: 0 })

  //si usamos add en vez de adds funciona..... . .pero no aplica el cambio de precio :) :) :) :;) :=)

  console.log(adds)

  const handleClick = (type, style) => {
    switch (type) {
      case 'add':
        if (style === 'pages') {
          setAdds((prevAdd) => {
            return {
              ...prevAdd,
              pages: prevAdd.pages++,
            }
          })
        }

        if (style === 'languages') {
          setAdds((prevAdd) => {
            return {
              ...prevAdd,
              languages: prevAdd.languages++,
            }
          })
        }

        break

      case 'substract':
        if (style === 'pages') {
          setAdds((prevAdd) => {
            return {
              ...prevAdd,
              pages: prevAdd.pages--,
            }
          })
        }

        if (style === 'languages') {
          setAdds((prevAdd) => {
            return {
              ...prevAdd,
              languages: prevAdd.languages--,
            }
          })
        }
        break

      default:
        break
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

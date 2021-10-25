function Extra({ adds, setAdds, setTotalPrice, setLastAdd, lastAdd, getAdds }) {
  //getAdds
  const handleClick = (type, style, e) => {
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
  }

  // onChange={(e) => handleClick('add', 'languages', e)}

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

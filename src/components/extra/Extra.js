import { Wrapper, Button, Input, WrapperButton } from './styles'
import { useEffect } from 'react'

function Extra({ adds, setAdds, setTotalPrice, setLastAdd, lastAdd, getAdds }) {
  const add = adds.pages * adds.languages * 30
  useEffect(() => {
    setTotalPrice((prevPrice) => (prevPrice = prevPrice + add))
    setLastAdd((prev) => (prev = add))

    if (adds.languages < 0) {
      adds.languages = 0
    }
    if (adds.pages < 0) {
      adds.pages = 0
    }
  }, [add, adds, setTotalPrice, setLastAdd])

  //hacer que no baje de 0
  const handleClick = (type, style) => {
    switch (type) {
      case 'add':
        if (style === 'pages') {
          setAdds((prevAdds) => {
            return {
              ...prevAdds,
              pages: prevAdds.pages + 1,
            }
          })
        }
        if (style === 'languages') {
          setAdds((prevAdds) => {
            return {
              ...prevAdds,
              languages: prevAdds.languages + 1,
            }
          })
        }
        break

      case 'substract':
        if (style === 'pages') {
          setAdds((prevAdds) => {
            return {
              ...prevAdds,
              pages: prevAdds.pages - 1,
            }
          })
          setTotalPrice((prevPrice) => (prevPrice = prevPrice - add))
        }
        if (style === 'languages') {
          setAdds((prevAdds) => {
            return {
              ...prevAdds,
              languages: prevAdds.languages - 1,
            }
          })
          setTotalPrice((prevPrice) => (prevPrice = prevPrice - add))
        }
        break

      default:
        break
    }
  }

  return (
    <Wrapper>
      <Input
        value={adds.pages}
        onChange={(e) => getAdds('pages', e)}
        type="number"
      />
      <WrapperButton>
        <Button onClick={() => handleClick('substract', 'pages')}>-</Button>
        <Button onClick={() => handleClick('add', 'pages')}>+</Button>
      </WrapperButton>
      <Input
        value={adds.languages}
        onChange={(e) => getAdds('languages', e)}
        type="number"
      />
      <WrapperButton>
        <Button onClick={() => handleClick('substract', 'languages')}>-</Button>
        <Button onClick={() => handleClick('add', 'languages')}>+</Button>
      </WrapperButton>
    </Wrapper>
  )
}

export default Extra

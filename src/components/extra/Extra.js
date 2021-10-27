import { Wrapper, Button, Input, WrapperButton, Label } from './styles'
import { useEffect } from 'react'
import Info from '../info/Info'

function Extra({ adds, setAdds, setTotalPrice, setLastAdd, getAdds }) {
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
    localStorage.setItem(`budget`, JSON.stringify(adds))

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
      <Label htmlFor="pages">Pages</Label>
      <Input
        value={adds.pages}
        onChange={(e) => getAdds('pages', e)}
        type="number"
        name="pages"
      />
      <WrapperButton>
        <Button onClick={() => handleClick('substract', 'pages')}>-</Button>
        <Button onClick={() => handleClick('add', 'pages')}>+</Button>
        <Info text="here you can add the pages" />
      </WrapperButton>
      <Label htmlFor="languages">Languages</Label>

      <Input
        value={adds.languages}
        onChange={(e) => getAdds('languages', e)}
        type="number"
        name="languages"
      />
      <WrapperButton>
        <Button onClick={() => handleClick('substract', 'languages')}>-</Button>
        <Button onClick={() => handleClick('add', 'languages')}>+</Button>
        <Info text="here you can add the languages" />
      </WrapperButton>
    </Wrapper>
  )
}

export default Extra

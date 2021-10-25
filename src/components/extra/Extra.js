import { Wrapper, Button, Input, WrapperButton } from './styles'

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

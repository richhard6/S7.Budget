import { useState } from 'react'

import { Input } from '../extra/styles'

function Search({ filterByWord }) {
  const [input, setInput] = useState('')

  const searchByWord = (e) => {
    setInput(e.target.value)
    filterByWord(input)
  }

  return (
    <>
      <Input onChange={(e) => searchByWord(e)} />
    </>
  )
}

export default Search

import { useState } from 'react'

import { Input } from '../extra/styles'

function Search({ filterByWord, inmutableBudgets }) {
  const [input, setInput] = useState('')

  const searchByWord = (e) => {
    setInput(e.target.value)
    filterByWord(input)
  }

  return (
    <>
      {inmutableBudgets.length > 1 && (
        <Input
          placeholder="search your budget here"
          onChange={(e) => searchByWord(e)}
        />
      )}
    </>
  )
}

export default Search

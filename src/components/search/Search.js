import { useState } from 'react'

function Search({ filterByWord }) {
  const [input, setInput] = useState('')

  const searchByWord = (e) => {
    setInput(e.target.value)
    filterByWord(input)
  }

  return (
    <>
      <h1>lcoa</h1>
      <input onChange={(e) => searchByWord(e)} />
    </>
  )
}

export default Search

import Budget from '../budget/Budget'
import { useEffect, useState } from 'react'
import Search from '../search/Search'

import { Table, TableBody, TableHeading, TableRow } from './styles'
import { Button, WrapperButton } from '../extra/styles'

function BudgetList({ budget }) {
  const [allBudgets, setAllBudgets] = useState([])

  useEffect(() => {
    const storage = allStorage()

    const parsedStorage = storage.map((budget) => JSON.parse(budget))

    setAllBudgets((prevBudgets) => [...prevBudgets, ...parsedStorage])
  }, [setAllBudgets])

  const filterByWord = (letters) => {
    let wordFiltered = allBudgets.filter((budget) =>
      budget.budgetName.includes(letters)
    )
    if (letters.length > 2)
      setAllBudgets((prevBudgets) => (prevBudgets = wordFiltered))

    if (letters.length < 2) {
      const storage = allStorage()

      const parsedStorage = storage.map((budget) => JSON.parse(budget))

      setAllBudgets((prevBudgets) => (prevBudgets = parsedStorage))
    }
  }

  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    return values
  }

  const alphaSort = () => {
    let alphaOrdered = allBudgets
      .map((budget) => budget)
      .sort((a, b) => (a.budgetName > b.budgetName ? 1 : -1))

    setAllBudgets((prevBudgets) => (prevBudgets = alphaOrdered))
  }

  const dateSort = () => {
    let dateOrdered = allBudgets
      .map((budget) => budget)
      .sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))

    setAllBudgets((prevBudgets) => (prevBudgets = dateOrdered))
  }

  const restartSort = () => {
    const storage = allStorage()

    const parsedStorage = storage.map((budget) => JSON.parse(budget))

    setAllBudgets((prevBudgets) => (prevBudgets = parsedStorage))
  }

  return (
    <>
      <WrapperButton>
        s0rt
        <Button onClick={alphaSort}>alfabetica</Button>
        <Button onClick={dateSort}>createdAt</Button>
        <Button onClick={restartSort}>reiniciar orden</Button>
      </WrapperButton>
      <Search filterByWord={filterByWord} />
      <Table>
        <TableBody>
          <TableRow>
            <TableHeading>Budget Name</TableHeading>
            <TableHeading>Budget Total</TableHeading>
          </TableRow>

          {allBudgets.map((budget, index) => {
            return (
              <Budget key={index} budget={budget} allStorage={allStorage} />
            )
          })}
        </TableBody>
      </Table>
      <Button
        onClick={() =>
          localStorage.setItem(budget.budgetName, JSON.stringify(budget))
        }
      >
        SAVE
      </Button>
    </>
  )
}

export default BudgetList

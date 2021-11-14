import Budget from '../budget/Budget'
import { useEffect, useState } from 'react'
import Search from '../search/Search'

import { Table, TableBody, TableData, TableHeading, TableRow } from './styles'
import { Button, WrapperButton } from '../extra/styles'
import { HeadingTwo } from '../../styles'

function BudgetList({ budget }) {
  const [allBudgets, setAllBudgets] = useState([])
  const [inmutableBudgets, setInmutableBudgets] = useState([])

  useEffect(() => {
    const storage = allStorage()

    const parsedStorage = storage.map((budget) => JSON.parse(budget))

    setInmutableBudgets((prevBudgets) => [...prevBudgets, ...parsedStorage])

    setAllBudgets((prevBudgets) => [...prevBudgets, ...parsedStorage])
  }, [setAllBudgets])

  const handleClick = () => {
    localStorage.setItem(budget.budgetName, JSON.stringify(budget))

    const storage = allStorage()

    const parsedStorage = storage.map((budget) => JSON.parse(budget))

    setAllBudgets((prevBudgets) => (prevBudgets = parsedStorage))
    setInmutableBudgets((prevBudgets) => (prevBudgets = parsedStorage))
  }

  const filterByWord = (letters) => {
    const storage = allStorage()

    if (storage) {
      let wordFiltered = allBudgets.filter((budget) =>
        budget.budgetName.includes(letters)
      )
      const parsedStorage = storage.map((budget) => JSON.parse(budget))

      if (letters.length > 1)
        setAllBudgets((prevBudgets) => (prevBudgets = wordFiltered))

      if (letters.length < 2) {
        setAllBudgets((prevBudgets) => (prevBudgets = parsedStorage))
      }
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

  /*   if (allBudgets.length < 1) return <div>no budgets</div> */

  console.log(allBudgets)

  return (
    <>
      <WrapperButton>
        <HeadingTwo>Sort By</HeadingTwo>
        <Button size="s" onClick={alphaSort}>
          Alphabetically
        </Button>
        <Button size="s" onClick={dateSort}>
          By date
        </Button>
        <Button size="s" onClick={restartSort}>
          Restart Order
        </Button>
      </WrapperButton>
      <Search filterByWord={filterByWord} inmutableBudgets={inmutableBudgets} />
      <Table>
        <TableBody>
          <TableRow>
            <TableHeading>Budget Name</TableHeading>
            <TableHeading>Budget Total</TableHeading>
          </TableRow>
          {inmutableBudgets.length < 1 && (
            <TableRow>
              <TableData>There's no budget added yet</TableData>
            </TableRow>
          )}
          {allBudgets.map((budget, index) => {
            return (
              <Budget key={index} budget={budget} allStorage={allStorage} />
            )
          })}
        </TableBody>
      </Table>
      <Button onClick={handleClick}>SAVE</Button>
    </>
  )
}

export default BudgetList

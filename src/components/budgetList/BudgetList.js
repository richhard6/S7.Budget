import Budget from '../budget/Budget'
import { useEffect, useState } from 'react'

import { Table, TableBody, TableHeading, TableRow } from './styles'
import { Button, WrapperButton } from '../extra/styles'

function BudgetList({ budget }) {
  const [allBudgets, setAllBudgets] = useState([])

  const [nextBudgets, setNextBudgets] = useState([])

  useEffect(() => {
    const storage = allStorage()

    const ola = storage.map((budget) => JSON.parse(budget))

    setNextBudgets((prevBudgets) => [...prevBudgets, ...ola])
  }, [])

  //nextBudgets esta cambiando y no actualiza el useEffect .. ... -.-
  useEffect(() => {
    setAllBudgets((prevBudgets) => [...prevBudgets, ...nextBudgets])
  }, [nextBudgets])

  const allStorage = () => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    return values
  }

  /*   const alphaSort = () => {
    allBudgets
      .sort((a, b) => {
        return a.budgetName < b.budgetName ? 1 : -1
      })
      .map((sorted) => setAllBudgets(sorted))
  } */

  const dateSort = () => {}

  const restartSort = () => {}

  //crear que budgetList se muestre condicionalmente solo si hay budgets en el local... eso se haria en el componente padre

  //depende del budget que se estd creando, antes de darle a save, la URL debe cambiar y mostrar los modificadores correspondientes.
  return (
    <>
      <WrapperButton>
        s0rt
        <Button>alfabetica</Button>
        <Button>createdAt</Button>
        <Button>reiniciar orden</Button>
      </WrapperButton>

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

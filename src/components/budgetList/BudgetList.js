import Budget from '../budget/Budget'
import { useEffect, useState, useMemo } from 'react'

import { Table, TableBody, TableHeading, TableRow } from './styles'
import { Button, WrapperButton } from '../extra/styles'

function BudgetList({ budget }) {
  //componente separado para search bar, que mostrara solo entonces
  //el nombre de budget que coincida con el user  input

  const [allBudgets, setAllBudgets] = useState([])

  useEffect(() => {
    allStorage()
    // aqui uando le damos a SAVE no se esta actualizaxndo la lista de budgets
  }, [budget])

  const allStorage = () => {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    setAllBudgets((prevBudgets) => (prevBudgets = values))
  }

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
              <Budget
                key={index}
                budget={JSON.parse(budget)}
                allStorage={allStorage}
              />
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export default BudgetList

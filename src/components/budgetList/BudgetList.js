import Budget from '../budget/Budget'
import { useEffect, useState } from 'react'

import { Table, TableHeading, TableRow } from './styles'

function BudgetList({ budget }) {
  //Hay que crear enn este componente un botton para organizarlo
  //alfabeticamente y por fecha de creacion(need crear property de createdAt.)
  //un buton para poder reinciar el orden,
  //componente separado para search bar, que mostrara solo entonces
  //el nombre de budget que coincida con el user  input

  const [allBudgets, setAllBudgets] = useState([])

  const allStorage = () => {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    setAllBudgets((prevBudgets) => (prevBudgets = values))
  }

  useEffect(() => {
    allStorage()
  }, [budget])

  return (
    <Table>
      <tbody>
        <TableRow>
          <TableHeading>Budget Name</TableHeading>
          <TableHeading>Budget Total</TableHeading>
        </TableRow>
        {allBudgets.map((budget, index) => {
          return (
            <Budget
              key={index}
              budget={JSON.parse(budget)}
              update={allStorage}
            />
          )
        })}
      </tbody>
    </Table>
  )
}

export default BudgetList

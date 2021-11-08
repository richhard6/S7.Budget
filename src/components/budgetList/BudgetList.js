import Budget from '../budget/Budget'
import { useEffect, useState } from 'react'

import { Table, TableBody, TableHeading, TableRow } from './styles'
import { Button, WrapperButton } from '../extra/styles'

function BudgetList({ budget }) {
  //Hay que crear enn este componente un botton para organizarlo
  //alfabeticamente y por fecha de creacion
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
    // aqui uando le damos a SAVE no se esta actualizaxndo la lista de budgets
  }, [budget])

  //crear que budgetList se muestre condicionalmente solo si hay budgets en el local... eso se haria en el componente padre
  return (
    <>
      <WrapperButton>
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
                update={allStorage}
              />
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export default BudgetList

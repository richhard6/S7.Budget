import { TableData, TableWrapper } from '../budgetList/styles'
import { useEffect } from 'react'
function Budget({ budget, allStorage }) {
  useEffect(() => {
    allStorage()
    // aqui uando le damos a SAVE no se esta actualizaxndo la lista de budgets
  }, [budget, allStorage])
  return (
    <TableWrapper>
      <TableData> {budget.budgetName}</TableData>
      <TableData> {budget.totalPrice}eu</TableData>
    </TableWrapper>
  )
}

export default Budget

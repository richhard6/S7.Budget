import { TableData, TableWrapper } from '../budgetList/styles'
import { useEffect } from 'react'
function Budget({ budget, allStorage }) {
  return (
    <TableWrapper>
      <TableData> {budget.budgetName}</TableData>
      <TableData> {budget.totalPrice}eu</TableData>
    </TableWrapper>
  )
}

export default Budget

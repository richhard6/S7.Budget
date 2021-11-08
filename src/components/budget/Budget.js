import { TableData, TableWrapper } from '../budgetList/styles'

function Budget({ budget }) {
  return (
    <TableWrapper>
      <TableData> {budget.budgetName}</TableData>
      <TableData> {budget.totalPrice}eu</TableData>
    </TableWrapper>
  )
}

export default Budget

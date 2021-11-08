function Budget({ budget }) {
  return (
    <div>
      <td> {budget.budgetName}</td>
      <td> {budget.totalPrice}</td>
    </div>
  )
}

export default Budget

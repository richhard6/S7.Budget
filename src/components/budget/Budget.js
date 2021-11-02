function Budget({ budget }) {
  return (
    <div>
      <p>
        {budget.budgetName} {budget.totalPrice}
      </p>
    </div>
  )
}

export default Budget

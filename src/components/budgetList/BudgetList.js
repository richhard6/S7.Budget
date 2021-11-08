import Budget from '../budget/Budget'
import { useEffect, useState } from 'react'

function BudgetList({ budget }) {
  const [allBudgets, setAllBudgets] = useState([])

  function allStorage() {
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

  //aqui recogeremos del local storage todos los presupuestos previamente guardados(recordar que hay unbug en el precio.)
  //guardado en LocalStorage.  entonces se ordenan alfabeticamente y  por fecha de creacion y reiniciar el orden
  //el state de Budget debe tener ahora un TIEMPO de creacion......... Y creare un boton para guardar en localStorage, asi no se guarda con cada Onchjange
  //cross Origin pproblem.. probablemente xq no esta formateado bien el JSON....

  return (
    <div>
      <table>
        <tr>
          <th>Budget Name</th>
          <th>Budget Total</th>
        </tr>
        {allBudgets.map((budget) => {
          return <Budget budget={JSON.parse(budget)} update={allStorage} />
        })}
      </table>
    </div>
  )
}

export default BudgetList

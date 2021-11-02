import Budget from '../budget/Budget'

function BudgetList() {
  function allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length

    while (i--) {
      values.push(localStorage.getItem(keys[i]))
    }

    if (values) {
      JSON.parse(values)
      return values
    } else {
      return null
    }
  }

  //aqui recogeremos del local storage todos los presupuestos previamente guardados(recordar que hay unbug en el precio.)
  //guardado en LocalStorage.  entonces se ordenan alfabeticamente y  por fecha de creacion y reiniciar el orden
  //el state de Budget debe tener ahora un TIEMPO de creacion......... Y creare un boton para guardar en localStorage, asi no se guarda con cada Onchjange
  //cross Origin pproblem.. probablemente xq no esta formateado bien el JSON....

  return (
    <div>
      {allStorage().map((budget) => {
        return <Budget budget={budget} />
      })}
    </div>
  )
}

export default BudgetList

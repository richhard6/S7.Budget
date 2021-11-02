import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/main/Main'
import Welcome from './components/welcome/Welcome'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/budget">
          <Main />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Main from './components/main/Main'
import Welcome from './components/welcome/Welcome'
function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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

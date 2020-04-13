import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { routes } from './routes'

function App() {
  return (
    <Router>
      <header className="">header</header>
      <Switch>
        {routes.map(({ id, path, component, exact }) => (
          <Route key={id} path={path} component={component} exact={exact} />
        ))}
      </Switch>
    </Router>
  )
}

export default App

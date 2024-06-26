import React from 'react'
import { Route, Switch } from 'wouter'
import Home from './Home'
import Login from './Login'
import Pago from './Pago'
import Registro from './Registro'
import Reservacion from './Reservacion'

function App() {

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/pago" component={Pago} />
      <Route path="/registro" component={Registro} />
      <Route path="/registro" component={Reservacion} />
      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import Biografia from './components/Biografia';
import Integrantes from './components/Integrantes';
import Discografia from './components/Discografia';
import Fotos from './components/Fotos';
import Videos from './components/Videos';
import Covers from './components/Covers';
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
          <Switch>
              {/* <Route exact path='/' component={Login} /> */} 
              <Route exact path='/' component={Inicio} />
              <Route exact path='/biografia' component={Biografia} />
              <Route exact path='/integrantes' component={Integrantes} />
              <Route exact path='/discografia' component={Discografia} />
              <Route exact path='/fotos' component={Fotos} />
              <Route exact path='/videos' component={Videos} />
              <Route exact path='/covers' component={Covers} />
              <Route exact path='/proyectos' component={Proyectos} />
          </Switch>
    </Router>
  );
}

export default App;

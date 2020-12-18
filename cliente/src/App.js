import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Biografia from './components/biografia/Biografia';
import Integrantes from './components/integrantes/Integrantes';
import Albumes from './components/albumes/Albumes';
import Fotos from './components/Fotos';
import Videos from './components/Videos';
import Covers from './components/Covers';
import Inicio from './components/Inicio';

import AlbumState from './context/albumes/albumState';
import IntegranteState from './context/integrantes/integranteState';
import AlertaState from './context/alertas/alertaState';

function App() {
  return (
<AlbumState>
  <IntegranteState>
    <AlertaState>    
      <Router>
            <Switch>
                {/* <Route exact path='/' component={Login} /> */} 
                <Route exact path='/' component={Inicio} />
                <Route exact path='/biografia' component={Biografia} />
                <Route exact path='/integrantes' component={Integrantes} />
                <Route exact path='/discografia' component={Albumes} />
                <Route exact path='/fotos' component={Fotos} />
                <Route exact path='/videos' component={Videos} />
                <Route exact path='/covers' component={Covers} />
            </Switch>
      </Router>
    </AlertaState>
  </IntegranteState>
</AlbumState>
  );
}

export default App;

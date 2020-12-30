import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Biografia from './components/biografia/Biografia';
import Integrantes from './components/integrantes/Integrantes';
import Fotos from './components/fotos/Fotos';
import Albumes from './components/albumes/Albumes';
import Letra from './components/letras/Letra';
import Videos from './components/videos/Videos';
import Covers from './components/Covers';
import Inicio from './components/Inicio';

import LetraState from './context/letras/letraState';
import VideoState from './context/videos/videoState';
import AlbumState from './context/albumes/albumState';
import IntegranteState from './context/integrantes/integranteState';
import AlertaState from './context/alertas/alertaState';

function App() {
  return (
    <LetraState>
      <VideoState>
        <AlbumState>
          <IntegranteState>
            <AlertaState>    
              <Router>
                    <Switch>
                        {/* <Route exact path='/' component={Login} /> */} 
                        <Route exact path='/' component={Inicio} />
                        <Route exact path='/biografia' component={Biografia} />
                        <Route exact path='/integrantes' component={Integrantes} />
                        <Route exact path='/fotos' component={Fotos} />
                        <Route exact path='/discografia' component={Albumes} />
                        <Route exact path='/letra' component={Letra} />
                        <Route exact path='/videos' component={Videos} />
                        <Route exact path='/covers' component={Covers} />
                    </Switch>
              </Router>
            </AlertaState>
          </IntegranteState>
        </AlbumState>
      </VideoState>    
    </LetraState>
  );
}

export default App;

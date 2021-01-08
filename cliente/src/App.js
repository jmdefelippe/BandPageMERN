import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Biografia from './components/biografia/Biografia';
import Integrantes from './components/integrantes/Integrantes';
import Galerias from './components/galerias/Galerias';
import Fotos from './components/fotos/Fotos';
import Albumes from './components/albumes/Albumes';
import Letra from './components/letras/Letra';
import Videos from './components/videos/Videos';
import Covers from './components/Covers';
import Inicio from './components/Inicio';

import BiografiaState from './context/biografia/biografiaState'; 
import Galeriatate from './context/galerias/galeriaState';
import FotoState from './context/fotos/fotoState';
import LetraState from './context/letras/letraState';
import VideoState from './context/videos/videoState';
import AlbumState from './context/albumes/albumState';
import IntegranteState from './context/integrantes/integranteState';
import AlertaState from './context/alertas/alertaState';

function App() {
  return (
    <BiografiaState>
      <Galeriatate>
        <FotoState>
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
                              <Route exact path='/galerias' component={Galerias} />
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
        </FotoState>
      </Galeriatate>
    </BiografiaState>
    );
}

export default App;

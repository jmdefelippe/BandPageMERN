import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Biografia from './components/biografia/Biografia';
import Playlists from './components/playlists/Playlists';
import Integrantes from './components/integrantes/Integrantes';
import Galerias from './components/galerias/Galerias';
import Fotos from './components/fotos/Fotos';
import Albumes from './components/albumes/Albumes';
import Letra from './components/letras/Letra';
import Miniaturas from './components/miniaturas/Miniaturas';
import Inicio from './components/Inicio';

import AlbumState from './context/albumes/albumState';
import AlertaState from './context/alertas/alertaState';
import BiografiaState from './context/biografia/biografiaState'; 
import FotoState from './context/fotos/fotoState';
import Galeriatate from './context/galerias/galeriaState';
import IntegranteState from './context/integrantes/integranteState';
import LetraState from './context/letras/letraState';
import PlaylistState from './context/playlists/playlistState';
import MiniaturaState from './context/miniaturas/miniaturaState';

function App() {
  return (
    <PlaylistState>
      <BiografiaState>
        <Galeriatate>
          <FotoState>
            <LetraState>
              <MiniaturaState>
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
                                <Route exact path='/videos' component={Miniaturas} />
                                <Route exact path='/covers' component={Playlists} />
                            </Switch>
                      </Router>
                    </AlertaState>
                  </IntegranteState>
                </AlbumState>
              </MiniaturaState>    
            </LetraState>
          </FotoState>
        </Galeriatate>
      </BiografiaState>
    </PlaylistState>
  );
}

export default App;

import React, { useContext } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import albumContext from '../../context/albumes/albumContext';
import letraContext from '../../context/letras/letraContext';

const Letra = () => {

    const albumesContext = useContext(albumContext);
    const letrasContext = useContext(letraContext);

    const { cancionActual } = albumesContext;
    const { obtenerLetra } = letrasContext;

    console.log(albumesContext);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <h1>NOMBRE CANCIÓN: {cancionActual}</h1>
                            <p>Letra de la canción {obtenerLetra}</p>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Letra;
import React, { useContext } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import albumContext from '../../context/albumes/albumContext';
import letraContext from '../../context/letras/letraContext';

const Letra = () => {

    const albumesContext = useContext(albumContext);
    const letrasContext = useContext(letraContext);

    console.log('Letras');
    console.log(letrasContext);

    const { cancion } = albumesContext;
    const { letra } = letrasContext;

    console.log(albumesContext);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 parser">
                            <h1>{cancion}</h1>
                            <p>{letra}</p>
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
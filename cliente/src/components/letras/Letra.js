import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

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

    if(cancion === null) return <Redirect to={'/'} />;

    const { letra } = letrasContext;


    console.log(albumesContext);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main className="main">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 parser">
                            <h1 className="center">{cancion}</h1>
                            <p className="center">{letra}</p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Letra;
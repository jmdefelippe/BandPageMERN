import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import FormContacto from './FormContacto';
import Spotify from '../redesSociales/Spotify';

const Contacto = () => {

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main className="main">
                    <FormContacto/>
                </main>
                <Footer/>
            </div>
        </div>
    
    );
}

export default Contacto;
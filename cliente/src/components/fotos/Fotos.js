import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import ListadoFotos from './ListadoFotos';

const Fotos = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <ListadoFotos />
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Fotos;
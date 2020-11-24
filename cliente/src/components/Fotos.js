import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Fotos = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <h1>Desde Fotos</h1>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Fotos;
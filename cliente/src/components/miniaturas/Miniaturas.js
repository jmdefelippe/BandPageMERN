import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoVideos from './ListadoMiniaturas';

const Miniaturas = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main>
                    <ListadoVideos/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Miniaturas;
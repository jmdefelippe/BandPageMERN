import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoAlbumes from './ListadoAlbumes';

const Albumes = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <ListadoAlbumes/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Albumes;
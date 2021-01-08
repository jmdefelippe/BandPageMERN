import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoIntegrantes from '../integrantes/ListadoIntegrantes';

const Integrantes = () => {
  
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main>
                    <ListadoIntegrantes/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default Integrantes;
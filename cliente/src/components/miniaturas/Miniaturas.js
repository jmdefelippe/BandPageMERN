import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoMiniaturas from './ListadoMiniaturas';

const Miniaturas = () => {

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main className="main">
                    <ListadoMiniaturas/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Miniaturas;
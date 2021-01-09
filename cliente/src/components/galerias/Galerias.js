import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import ListadoGalerias from './ListadoGalerias';

const Galerias = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main>
                    <ListadoGalerias/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Galerias;
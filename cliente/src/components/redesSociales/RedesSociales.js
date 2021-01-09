import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoRedesSociales from './ListadoRedesSociales';

const RedesSociales = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main>
                    <ListadoRedesSociales/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default RedesSociales;
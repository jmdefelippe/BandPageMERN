import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Inicio = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main className="mt-100">
                    <img src="img/inicio.jpg" className="responsive"  alt="inicio"/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Inicio;
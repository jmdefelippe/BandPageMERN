import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Biografia from './Biografia';

const Inicio = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <img src="img/inicio.jpg" class="responsive"  alt="inicio"/>
                    <Biografia />
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Inicio;
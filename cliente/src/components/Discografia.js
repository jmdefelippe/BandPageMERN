import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Discografia = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <h1>Desde Discografia</h1>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Discografia;
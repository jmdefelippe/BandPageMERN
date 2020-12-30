import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import DetalleBiografia from './DetalleBiografia';

const Biografia = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <DetalleBiografia/>
                </main>
                <Footer />
                
            </div>
        </div>
        
    );
}

export default Biografia;
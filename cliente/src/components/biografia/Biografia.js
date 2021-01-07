import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoDetalleBiografia from './ListadoDetalleBiografia';

const Biografia = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <ListadoDetalleBiografia/>
                </main>
                <Footer />
                
            </div>
        </div>
        
    );
}

export default Biografia;
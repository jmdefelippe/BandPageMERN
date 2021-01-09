import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoDetalleBiografia from './ListadoDetalleBiografia';
import Videos from '../videos/Videos';

const Biografia = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main>
                    <ListadoDetalleBiografia/>
                    <Videos/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

export default Biografia;
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoVideos from '../videos/ListadoVideos';

const Videos = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <ListadoVideos/>
                </main>
                <Footer />
            </div>
        </div>
        
    );
}

export default Videos;
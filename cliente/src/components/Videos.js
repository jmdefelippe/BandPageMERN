import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Videos = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <h1>Desde Videos</h1>
                </main>
                <Footer />
            </div>
        </div>
        
    );
}

export default Videos;
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoFotos from './ListadoFotos';

const Fotos = () => {
    return(
        <div>
            <Header />
            <main className="main-fotos">
                <ListadoFotos />
            </main>
            <Footer/>
        </div>
        
    );
}

export default Fotos;
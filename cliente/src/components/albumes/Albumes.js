import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoAlbumes from './ListadoAlbumes';

const Albumes = () => {

    return(
        <div>
            <Header />
                <main className="main">
                    <ListadoAlbumes/>
                </main>
            <Footer/>
        </div>
    );
}

export default Albumes;
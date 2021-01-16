import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoIntegrantes from '../integrantes/ListadoIntegrantes';

const Integrantes = () => {

    return(
        <div>
            <Header/>
            <main className="main">
                <ListadoIntegrantes/>
            </main>
            <Footer/>
        </div>
    );
}

export default Integrantes;
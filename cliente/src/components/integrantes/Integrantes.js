import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoIntegrantes from '../integrantes/ListadoIntegrantes';

import navbarItemContext from '../../context/navbarItems/navbarItemContext';
import alertaContext from '../../context/alertas/alertaContext';

const Integrantes = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { activarIntegrantes, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        activarIntegrantes();
        // eslint-disable-next-line
    }, [mensaje]);

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
import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoAlbumes from './ListadoAlbumes';

import navbarItemContext from '../../context/navbarItems/navbarItemContext';
import alertaContext from '../../context/alertas/alertaContext';

const Albumes = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { activarDiscografia, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        activarDiscografia();
        // eslint-disable-next-line
    }, [mensaje]);

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
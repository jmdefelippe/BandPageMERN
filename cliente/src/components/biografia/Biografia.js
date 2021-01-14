import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoDetalleBiografia from './ListadoDetalleBiografia';
import Videos from '../videos/Videos';

import navbarItemContext from '../../context/navbarItems/navbarItemContext';
import alertaContext from '../../context/alertas/alertaContext';

const Biografia = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { activarBiografia, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        activarBiografia();
        // eslint-disable-next-line
    }, [mensaje]);

    return(
        <div>
            <Header/>
            <main className="main">
                <ListadoDetalleBiografia/>
                <Videos/>
            </main>
            <Footer/>
        </div>
    );
}

export default Biografia;
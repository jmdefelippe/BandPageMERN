import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoMiniaturas from './ListadoMiniaturas';

import navbarItemContext from '../../context/navbarItems/navbarItemContext';
import alertaContext from '../../context/alertas/alertaContext';

const Miniaturas = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { activarVideos, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        activarVideos();
        // eslint-disable-next-line
    }, [mensaje]);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main className="main">
                    <ListadoMiniaturas/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Miniaturas;
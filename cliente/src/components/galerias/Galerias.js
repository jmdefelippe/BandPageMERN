import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoGalerias from './ListadoGalerias';

import navbarItemContext from '../../context/navbarItems/navbarItemContext';
import alertaContext from '../../context/alertas/alertaContext';

const Galerias = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { activarFotos, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        activarFotos();
        // eslint-disable-next-line
    }, [mensaje]);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header/>
                <main className="main-fotos">
                    <ListadoGalerias/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Galerias;
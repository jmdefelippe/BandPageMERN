import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import FormContacto from './FormContacto';

import navbarItemContext from '../../context/navbarItems/navbarItemContext';
import alertaContext from '../../context/alertas/alertaContext';

const Contacto = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { activarContacto, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        activarContacto();
        // eslint-disable-next-line
    }, [mensaje]);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main className="main">
                    <FormContacto/>
                </main>
                <Footer/>
            </div>
        </div>
    
    );
}

export default Contacto;
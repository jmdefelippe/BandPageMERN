import React, { useContext, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

import navbarItemContext from '../context/navbarItems/navbarItemContext';
import alertaContext from '../context/alertas/alertaContext';

const Inicio = () => {

    const navbarItemsContext = useContext(navbarItemContext);
    const { desactivarItems, mensaje } = navbarItemsContext;

    const alertasContext = useContext(alertaContext);
    const { mostrarAlerta } = alertasContext;
    
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        desactivarItems();
        // eslint-disable-next-line
    }, [mensaje]);

    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main className="mt-100">
                    <img src="img/inicio.jpg" className="responsive"  alt="inicio"/>
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Inicio;
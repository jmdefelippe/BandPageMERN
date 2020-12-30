import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoIntegrantes from '../integrantes/ListadoIntegrantes';

const Integrantes = () => {
/*
    // extraer integrantes de state inicial
    const integrantesContext = useContext(integranteContext);
    const { integrantes, obtenerIntegrantes } = integrantesContext;
*/
  
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    
                    <ListadoIntegrantes/>

                </main>
                
                <Footer/>
            </div>
        </div>
        
    );
}

export default Integrantes;
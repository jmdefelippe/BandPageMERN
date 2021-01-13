import React, { useContext } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import integranteContext from '../../context/integrantes/integranteContext';

const BiografiaIntegrante = () => {

    const integrantesContext = useContext(integranteContext);

    const { integrante } = integrantesContext;

    const { nombre, rol, imagen, biografia } = integrante[0];
    
    let fechaNacimiento = null;
    fechaNacimiento = integrante[0].fechaNacimiento.substring(0,10);
    
    const profileImg = `../img/integrantes/${imagen}`;

    return(
        <div>
            <Header />
            <main className="main">
                <div className="row bg-dark radius">
                    <div className="col-3">
                        <img src={profileImg} className="responsive" alt={nombre}/>
                    </div>
                    <div className="col-9 parser">
                        <h1>{nombre}</h1>
                        <h2>{rol}</h2>
                        <h2>Fecha de Nacimiento: {fechaNacimiento}</h2>
                        <p className="parser">{biografia}</p>
                    </div>
                </div>
        
            </main>
            <Footer/>
        </div>
    );
}

export default BiografiaIntegrante;
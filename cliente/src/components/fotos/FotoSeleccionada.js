import React, { useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

import fotoContext from '../../context/fotos/fotoContext';

const FotoSeleccionada = () => {

    const fotosContext = useContext(fotoContext);
    const { foto } = fotosContext;

    if(foto === null) return <Redirect to={'/galerias'} />;

    const { imagen, galeriaTitulo } = foto[0];
    const fotografia = `../img/fotos/${galeriaTitulo}/${imagen}`;

    return(
        <div>
            <Header />
            <main className="main-fotos">
                <div className="row radius pd-fotos">
                    <div className="col-2"></div>
                    <div className="col-1">
                        {/*}
                        <img src="img/previous.png"
                            className="responsive"
                            alt="iconPrevious"
                        />
                        */}
                    </div>
                    <div className="col-6">
                        <img src={fotografia} className="responsive radius" alt="foto"/>
                    </div>
                    <div className="col-1">
                        {/*}
                        <img src="img/next.png"
                            className="responsive"
                            alt="iconPrevious"
                        />
                        */}
                    </div>
                    <div className="col-2"></div>
                </div>
            </main>
            <Footer/>
        </div>

        
    );
}

export default FotoSeleccionada;
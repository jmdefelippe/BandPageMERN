import React, { useContext, useEffect } from 'react';
import Galeria from './Galeria';
import galeriaContext from '../../context/galerias/galeriaContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoGalerias = () => {

    // extraer galerias de state inicial
    const galeriasContext = useContext(galeriaContext);
    const { galerias, mensaje, obtenerGalerias } = galeriasContext;

    const alertaContext = useContext(AlertaContext);
    const { mostrarAlerta } = alertaContext;

    // obtener galerias cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerGalerias();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si galerias tiene contenido
    if(galerias.length === 0) return <p>No hay galerias</p>;

    return (
        <div className="row bg-dark radius pd-fotos">
            {galerias.map(galeria => 
                <div key={galeria._id}>
                    <Galeria
                        galeria={galeria}
                    />
                </div>
            )}
        </div>
    );
}

export default ListadoGalerias;

/*
        <div className="row">
            <div className="col-0-5"></div>
            <div className="col-11 bg-dark radius">
                <div className="row">
                    {galerias.map(galeria => 
                        <div key={galeria._id}>
                            <Galeria
                                galeria={galeria}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="col-0-5"></div>
        </div>

*/
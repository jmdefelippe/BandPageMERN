import React, { useContext, useEffect } from 'react';
import Galeria from './Galeria';
import galeriaContext from '../../context/galerias/galeriaContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoGalerias = () => {

    // extraer galerias de state inicial
    const galeriasContext = useContext(galeriaContext);
    const { galerias, mensaje, obtenerGalerias } = galeriasContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // obtener proyectos cuando carga el componente
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

        <div className="row">
                    
            {galerias.map(galeria => 
                <div key={galeria._id}>
                    <div className="galeria">
                        <Galeria
                            galeria={galeria}
                        />
                    </div>
                </div>
            )}
                 
        </div>
    
    );
}

export default ListadoGalerias;
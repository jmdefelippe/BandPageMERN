import React, { useContext, useEffect } from 'react';
import Integrante from './Integrante';
import integranteContext from '../../context/integrantes/integranteContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoIntegrantes = () => {

    // extraer integrantes de state inicial
    const integrantesContext = useContext(integranteContext);
    const { integrantes, mensaje, obtenerIntegrantes } = integrantesContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // obtener proyectos cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerIntegrantes();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si integrantes tiene contenido
    if(integrantes.length === 0) return <p>No hay integrantes</p>;

    return (

        <div className="contenedor-integrantes">
                <div className="col-1"></div>       
                {integrantes.map(integrante => 
                    <div className="col-3">
                        <div
                            key={integrante._id}
                            className="integrante"
                        >
                            <Integrante
                                integrante={integrante}
                            />
                        </div>
                    </div>
                )}
                <div className="col-1"></div> 
        </div>


    );
}

export default ListadoIntegrantes;
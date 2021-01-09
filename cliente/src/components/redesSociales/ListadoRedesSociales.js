import React, { useContext, useEffect } from 'react';
import RedSocial from './RedSocial';
import redSocialContext from '../../context/redesSociales/redSocialContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoRedesSociales = () => {

    // extraer redesSociales de state inicial
    const redesSocialesContext = useContext(redSocialContext);
    const { redesSociales, mensaje, obtenerRedesSociales } = redesSocialesContext;

    const alertaContext = useContext(AlertaContext);
    const { mostrarAlerta } = alertaContext;

    // obtener redesSociales cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerRedesSociales();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si redesSociales tiene contenido
    if(redesSociales.length === 0) return <p>No hay redesSociales</p>;

    return (
        <div className="row">
            {redesSociales.map(redSocial => 
                <div key={redSocial._id} className=""> <RedSocial redSocial={redSocial}/></div>
            )}
        </div>
    );
}

export default ListadoRedesSociales;
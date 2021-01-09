import React, { useContext, useEffect } from 'react';
import Miniatura from './Miniatura';
import miniaturaContext from '../../context/miniaturas/miniaturaContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoMiniaturas = () => {

    // extraer miniaturas de state inicial
    const miniaturasContext = useContext(miniaturaContext);
    const { miniaturas, mensaje, obtenerMiniaturas } = miniaturasContext;

    const alertaContext = useContext(AlertaContext);
    const { mostrarAlerta } = alertaContext;

    // obtener miniaturas cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerMiniaturas();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si miniaturas tiene contenido
    if(miniaturas.length === 0) return <p>No hay miniaturas</p>;

    return (
        <div className="row">
            {miniaturas.map(miniatura => 
                <div key={miniatura._id} className=""> <Miniatura miniatura={miniatura}/></div>
            )}
        </div>
    );
}

export default ListadoMiniaturas;
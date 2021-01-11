import React, { useContext, useEffect } from 'react';
import Foto from './Foto';
import fotoContext from '../../context/fotos/fotoContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoFotos = () => {

    // extraer fotos de state inicial
    const fotosContext = useContext(fotoContext);
    const { fotosgaleria, mensaje, obtenerFotos } = fotosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // obtener fotos cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerFotos();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si fotos tiene contenido
    if(fotosgaleria.length === 0) return <p>No hay fotos</p>;

    return (
    <div className="row">
        <div className="col-1"></div>
        <div className="col-10 bg-dark radius">
       
            <div className="row">
                
                {fotosgaleria.map(foto => 
                    <div
                        key={foto._id}
                        className="foto"
                    >
                    <Foto
                        foto={foto}
                    />
                    </div>
                )}
            </div>
            <div className="col-1"></div>
       
        </div></div>
    );
}

export default ListadoFotos;
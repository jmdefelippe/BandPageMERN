import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
    if(fotosgaleria.length === 0) return <Redirect to={'/galerias'} />;
    


    return (
        <div className="row bg-dark radius pd-fotos">
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
    );
}

/*
fotosgaleria.forEach(function(foto, i, array) {
    <div key={foto._id} className="foto">
        <Foto foto={foto}/>
    </div>
})*/
// console.log(elemento, i);
// Manzana 0
// Banana 1


export default ListadoFotos;

/*
        <div className="row ">
            <div className="col-0-5"></div>
            <div className="col-11">
                <div className="row bg-dark radius">
                    <div className="col-12">    
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
                </div>
            </div>
            <div className="col-0-5"></div>
        </div>



*/
import React, { useContext, useEffect } from 'react';
import Video from './Video';
import videoContext from '../../context/videos/videoContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoVideos = () => {

    // extraer videos de state inicial
    const videosContext = useContext(videoContext);
    const { videos, mensaje, obtenerVideos } = videosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // obtener proyectos cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerVideos();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si videos tiene contenido
    if(videos.length === 0) return <p>No hay videos</p>;

    return (

        <div className="row">
                {videos.map(video => 
                    <div className="">
                        <div key={video._id} className=""> <Video video={video}/></div>
                    </div>
                )}
                 
        </div>


    );
}

export default ListadoVideos;
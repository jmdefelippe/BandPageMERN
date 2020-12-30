import React, { useContext } from 'react';
import videoContext from '../../context/videos/videoContext';

const Video = ({ video }) => {
    // obtener el state de videoes
    const videosContext = useContext(videoContext);
    const { videoActual } = videosContext;
/*    
    // obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;
*/
/*
    // función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // fijar un proyecto actual
        obtenerTareas(id); // filtrar las tareas cuando se de click
    }
*/

    const { titulo, imagen, link, album } = video;
    
    const miniatura = `../img/videos/${imagen}`;
    
    return (
        <div className="col-3">
            <a href={link} target="_blank">
                <img src={miniatura} class="responsive"  alt="miniatura"/>
            </a>
            <div className="cancion">{titulo}</div>
        </div>
    );
}

export default Video;

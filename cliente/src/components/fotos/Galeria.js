import React, { useContext } from 'react';
import galeriaContext from '../../context/galerias/galeriaContext';

const Galeria = ({ galeria }) => {
    // obtener el state de galerias
    const galeriasContext = useContext(galeriaContext);
    const { galeriaActual } = galeriasContext;
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


    const { titulo, descripcion, imagen } = galeria;
    const profileImg = `../img/galerias/${imagen}`;
    
    return (
        <div className="col-3">    
            <img src={profileImg} className="responsive"  alt=""/>
            <h1>{titulo}</h1>
            <h2>{descripcion}</h2>
        </div>
        
    );
}

export default Galeria;

/*
            {biografia.map( parrafo =>
                <div> {parrafo.split('\\n').map( bloque => <p> {bloque} /</p> )} </div>
            )}
*/
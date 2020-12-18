import React, { useContext } from 'react';
import integranteContext from '../../context/integrantes/integranteContext';

const Integrante = ({ integrante }) => {
    // obtener el state de integrantes
    const integrantesContext = useContext(integranteContext);
    const { integranteActual } = integrantesContext;
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


    const { nombre, rol, imagen, biografia } = integrante;
    let { fechaNacimiento } = integrante;

    fechaNacimiento = integrante.fechaNacimiento.substring(0,10);
    const profileImg = `../img/integrantes/${imagen}`;
    
    return (
        <div>    
            <img src={profileImg} class="responsive"  alt="billie"/>
            <h1>{nombre}</h1>
            <h2>Rol: {rol}</h2>
            <h2>Fecha de Nacimiento: {fechaNacimiento}</h2>
            <p>{biografia}</p>


        </div>
    );
}

export default Integrante;

/*
            {biografia.map( parrafo =>
                <div> {parrafo.split('\\n').map( bloque => <p> {bloque} /</p> )} </div>
            )}
*/
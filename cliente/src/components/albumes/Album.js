import React, { useContext } from 'react';
import albumContext from '../../context/albumes/albumContext';

const Album = ({ album }) => {
    // obtener el state de albumes
    const albumesContext = useContext(albumContext);
    const { albumActual } = albumesContext;
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

    const { artista, titulo, imagen, anio, canciones } = album;
    
    const profileImg = `../img/albumes/${imagen}`;
    
    return (
        <div className="row">    
            <div className="col-1"></div>
            <div className="col-4">
                <img src={profileImg} class="responsive"  alt="billie"/>
            </div>
            <div className="col-1"></div>
            
            <div className="col-5">
                <h1>{titulo}</h1>
                <h2>{anio}</h2>


                {canciones.map(cancion => 
                    <div className="">
                        <div
                            key={cancion._id}
                            className="album"
                        >
                            <div className="col-6 cancion">{cancion.numero}. {cancion.titulo}</div>
                            <div className="col-6 cancion">{cancion.duracion}</div>
                        </div>
                        
                    </div>
                )}

            </div>
            
            <div className="col-1"></div>    
        </div>
    );
}

export default Album;

/*
            {biografia.map( parrafo =>
                <div> {parrafo.split('\\n').map( bloque => <p> {bloque} /</p> )} </div>
            )}
*/
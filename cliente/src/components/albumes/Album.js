import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import albumContext from '../../context/albumes/albumContext';
import letraContext from '../../context/letras/letraContext';

const Album = ({ album }) => {
    // obtener el state de albumes
    const albumesContext = useContext(albumContext);
    const letrasContext = useContext(letraContext);

    const { cancionActual, cancion } = albumesContext;
    const { obtenerLetra } = letrasContext;
/*
    // función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // fijar un proyecto actual
        obtenerTareas(id); // filtrar las tareas cuando se de click
    }
*/

    const seleccionarCancion = async (cancionElegida) => {
        cancionActual(cancionElegida); // fijar una canción actual
        //console.log('Me mando ' + cancionElegida);
        //console.log('acaaaaaa' + cancion);
        await obtenerLetra(cancionElegida); // filtrar las canciones cuando se de click
    }

    const { titulo, imagen, anio, canciones } = album;
    
    const profileImg = `../img/albumes/${imagen}`;
    
    return (
        <div className="row">    
            <div className="col-1"></div>
            <div className="col-4">
                <img src={profileImg} className="responsive"  alt="frontAlbum"/>
            </div>
            <div className="col-1"></div>
            
            <div className="col-6">
                <h1>{titulo}</h1>
                <h2>{anio}</h2>

                {canciones.map((cancion, index) => 
                    <div className="" key={index}>
                        <div className="album">
                            <div className="col-7 cancion">{cancion.numero}. {cancion.titulo}</div>
                            <div className="col-2 cancion">{cancion.duracion}</div>
                            <div className="col-1 cancion">
                                <Link to={'/letra'}>
                                    <img src="img/icono_lyrics.png"
                                        className="iconLyrics"
                                        alt="iconLyrics"
                                        onClick={() => seleccionarCancion(cancion.titulo)}
                                    />
                                </Link>
                            </div>
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
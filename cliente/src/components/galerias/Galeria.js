import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import fotoContext from '../../context/fotos/fotoContext';

const Galeria = ({ galeria }) => {
    
    
    // obtener la función del context de fotos
    const fotosContext = useContext(fotoContext);
    const { obtenerFotos } = fotosContext;

    // función para agregar la galeria actual
    const seleccionarGaleria = id => {
        obtenerFotos(id); // traer las fotos cuando se de click
    }
    
    const { titulo, descripcion, imagen } = galeria;
    const profileImg = `../img/galerias/${imagen}`;
    
    return (
        <div className="col-3">    
            <Link to={'/fotos'}>
                <img src={profileImg}
                    className="responsive hover"
                    alt=""
                    onClick={() => seleccionarGaleria(galeria._id)}
                />
            </Link>
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
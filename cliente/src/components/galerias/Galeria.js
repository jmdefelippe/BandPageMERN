import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import galeriaContext from '../../context/galerias/galeriaContext';
import fotoContext from '../../context/fotos/fotoContext';

const Galeria = ({ galeria }) => {
    
    // obtener el state de galerias
    const galeriasContext = useContext(galeriaContext);
    const { galeriaActual } = galeriasContext;
    
    // obtener la función del context de fotos
    const fotosContext = useContext(fotoContext);
    const { obtenerFotos } = fotosContext;

    // función para agregar la galeria actual
    const seleccionarGaleria = id => {
        galeriaActual(id); // fijar galeria actual
        obtenerFotos(id); // traer las fotos cuando se de click
    }
    
    const { titulo, descripcion, imagen } = galeria;
    const profileImg = `../img/galerias/${imagen}`;
    
    return (
        <div className="col-3">    
            <Link to={'/fotos'}>
                <img src={profileImg}
                    className="responsive"
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
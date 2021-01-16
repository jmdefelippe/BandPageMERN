import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import fotoContext from '../../context/fotos/fotoContext';

const Foto = ({ foto }) => {

    // obtener la función del context de fotos
    const fotosContext = useContext(fotoContext);
    const { fotoActual } = fotosContext;

    // función para agregar la galeria actual
    const seleccionarFoto = id => {
        fotoActual(id); // traer las fotos cuando se de click
    }

    const { imagen, galeriaTitulo } = foto;
       
    const fotografia = `../img/fotos/${galeriaTitulo}/${imagen}`;

    return(
        <div className="col-2">

            <Link to={'/foto'}>
                <img src={fotografia}
                    className="responsive radius"
                    alt="foto"
                    onClick={() => seleccionarFoto(foto._id)}
                />
            </Link>

        </div>
    );
}

export default Foto;






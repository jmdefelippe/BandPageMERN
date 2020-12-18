import React, { useContext, useEffect } from 'react';
import Album from './Album';
import albumContext from '../../context/albumes/albumContext';
import AlertaContext from '../../context/alertas/alertaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoAlbumes = () => {

    // extraer albumes de state inicial
    const albumesContext = useContext(albumContext);
    const { albumes, mensaje, obtenerAlbumes } = albumesContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // obtener albumes cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerAlbumes();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si albumes tiene contenido
    if(albumes.length === 0) return <p>No hay albumes</p>;

    return (
        <div>
            {albumes.map(album => 
                <div
                    key={album._id}
                    className="album"
                >
                <Album
                    album={album}
                />
                </div>
            )}
        </div>

    );
}

export default ListadoAlbumes;
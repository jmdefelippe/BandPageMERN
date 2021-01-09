import React, { useContext, useEffect } from 'react';
import Playlist from './Playlist';
import playlistContext from '../../context/playlists/playlistContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoPlaylists = () => {

    // extraer playlists de state inicial
    const playlistsContext = useContext(playlistContext);
    const { playlists, mensaje, obtenerPlaylists } = playlistsContext;

    const alertaContext = useContext(AlertaContext);
    const { mostrarAlerta } = alertaContext;

    // obtener playlists cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerPlaylists();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si playlists tiene contenido
    if(playlists.length === 0) return <p>No hay playlists</p>;

    return (
        <div>
            {playlists.map(playlist => 
                <div
                    key={playlist._id}
                    className="playlist"
                >
                <Playlist
                    playlist={playlist}
                />
                </div>
            )}
        </div>

    );
}

export default ListadoPlaylists;
import React, { useReducer } from 'react';

import playlistContext from './playlistContext';
import playlistReducer from './playlistReducer';
import {
    OBTENER_PLAYLISTS,
    PLAYLIST_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const PlaylistState = props => {

    const initialState = {
        playlists : [],
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(playlistReducer, initialState);

    // serie de funciones para el CRUD

    // obtener las playlists
    const obtenerPlaylists = async () => {
        try {
            const resultado = await clienteAxios.get('/api/playlists');
            
            dispatch({
                type: OBTENER_PLAYLISTS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PLAYLIST_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <playlistContext.Provider
            value={{
                playlists: state.playlists,
                mensaje: state.mensaje,
                obtenerPlaylists
            }}
        >
            {props.children}
        </playlistContext.Provider>
    )
}

export default PlaylistState;
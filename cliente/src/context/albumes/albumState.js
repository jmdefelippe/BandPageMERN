import React, { useReducer } from 'react';

import albumContext from './albumContext';
import albumReducer from './albumReducer';
import {
    OBTENER_ALBUMES,
    ALBUM_ERROR,
    CANCION_ACTUAL
} from '../../types';

import clienteAxios from '../../config/axios';

const AlbumState = props => {

    const initialState = {
        albumes : [],
/*        nuevoProyecto : false,
        errorformulario: false,
        proyecto: null,
        
*/      
		cancion: null,
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(albumReducer, initialState);

    // serie de funciones para el CRUD

    // obtener los albumes
    const obtenerAlbumes = async () => {
        try {
            const resultado = await clienteAxios.get('/api/albumes');
            
            dispatch({
                type: OBTENER_ALBUMES,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: ALBUM_ERROR,
                payload: alerta
            })
        }
    }

    // obtener la canción seleccionada
    const cancionActual = cancion => {
        dispatch({
            type: CANCION_ACTUAL,
            payload: cancion
        })
    }

    return (
        <albumContext.Provider
            value={{
                albumes: state.albumes,
                cancion: state.cancion,
                mensaje: state.mensaje,
                obtenerAlbumes,
                cancionActual
            }}
        >
            {props.children}
        </albumContext.Provider>
    )
}

export default AlbumState;
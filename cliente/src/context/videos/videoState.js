import React, { useReducer } from 'react';

import videoContext from './videoContext';
import videoReducer from './videoReducer';
import {
    OBTENER_VIDEOS,
    VIDEO_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const VideoState = props => {

    const initialState = {
        videos : [],
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(videoReducer, initialState);

    // obtener los videos
    const obtenerVideos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/videos');

            dispatch({
                type: OBTENER_VIDEOS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: VIDEO_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <videoContext.Provider
            value={{
                videos: state.videos,
                mensaje: state.mensaje,
                obtenerVideos
            }}
        >
            {props.children}
        </videoContext.Provider>
    )
}

export default VideoState;
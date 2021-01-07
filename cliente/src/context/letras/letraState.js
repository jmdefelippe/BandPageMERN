import React, { useReducer } from 'react';

import letraContext from './letraContext';
import letraReducer from './letraReducer';
import {
    OBTENER_LETRA,
    LETRA_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const LetraState = props => {

    const initialState = {
        letra : "",
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(letraReducer, initialState);

    // obtener letra de una canción
    const obtenerLetra = async cancion => {
        try {
            const url = `https://api.lyrics.ovh/v1/Green Day/${cancion}`;
            const resultado = await clienteAxios.get(url);
            dispatch({
                type: OBTENER_LETRA,
                payload: resultado.data.lyrics
                // payload: resultado.data.lyrics
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: LETRA_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <letraContext.Provider
            value={{
                cancion: state.cancion,
                letra: state.letra,
                mensaje: state.mensaje,
                obtenerLetra
            }}
        >
            {props.children}
        </letraContext.Provider>
    )
}

export default LetraState;
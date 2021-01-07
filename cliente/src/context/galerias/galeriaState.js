import React, { useReducer } from 'react';

import galeriaContext from './galeriaContext';
import galeriaReducer from './galeriaReducer';
import {
    OBTENER_GALERIAS,
    GALERIA_ERROR,
    GALERIA_ACTUAL
} from '../../types';

import clienteAxios from '../../config/axios';

const GaleriaState = props => {

    const initialState = {
        galerias : [],
        galeria: null,
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(galeriaReducer, initialState);

    // obtener los galerias
    const obtenerGalerias = async () => {
        try {
            const resultado = await clienteAxios.get('/api/galerias');
            console.log(resultado);
            dispatch({
                type: OBTENER_GALERIAS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: GALERIA_ERROR,
                payload: alerta
            })
        }
    }
 

    // selecciona la galeria que el usuario dio click
    const galeriaActual = galeriaId => {
        dispatch({
            type: GALERIA_ACTUAL,
            payload: galeriaId
        })
    }

    return (
        <galeriaContext.Provider
            value={{
                galerias: state.galerias,
                galeria: state.galeria,
                mensaje: state.mensaje,
                obtenerGalerias,
                galeriaActual
            }}
        >
            {props.children}
        </galeriaContext.Provider>
    )
}

export default GaleriaState;
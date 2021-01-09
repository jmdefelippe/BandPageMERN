import React, { useReducer } from 'react';

import miniaturaContext from './miniaturaContext';
import miniaturaReducer from './miniaturaReducer';
import {
    OBTENER_MINIATURAS,
    MINIATURA_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const MiniaturaState = props => {

    const initialState = {
        miniaturas : [],
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(miniaturaReducer, initialState);

    // obtener los miniaturas
    const obtenerMiniaturas = async () => {
        try {
            const resultado = await clienteAxios.get('/api/miniaturas');

            dispatch({
                type: OBTENER_MINIATURAS,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: MINIATURA_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <miniaturaContext.Provider
            value={{
                miniaturas: state.miniaturas,
                mensaje: state.mensaje,
                obtenerMiniaturas
            }}
        >
            {props.children}
        </miniaturaContext.Provider>
    )
}

export default MiniaturaState;
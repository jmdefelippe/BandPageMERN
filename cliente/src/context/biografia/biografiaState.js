import React, { useReducer } from 'react';
import BiografiaContext from './biografiaContext';
import BiografiaReducer from './biografiaReducer';

import {
   OBTENER_BIOGRAFIA,
   BIOGRAFIA_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const BiografiaState = props => {
    const initialState = {
        biografia: [],
        errorbiografia: false,
        mensaje: null
    }

    // crear dispatch
    const [state, dispatch] = useReducer(BiografiaReducer, initialState);

    // crear las funciones

    // obtener la biografia
    const obtenerBiografia = async () => {
        try {
            const resultado = await clienteAxios.get('/api/biografia');
            
            dispatch({
                type: OBTENER_BIOGRAFIA,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: BIOGRAFIA_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <BiografiaContext.Provider
            value={{
                biografia: state.biografia,
                errorbiografia: state.errorbiografia,
                mensaje: state.mensaje,
                obtenerBiografia
            }}
        >
            {props.children}
        </BiografiaContext.Provider>
    )
}

export default BiografiaState;
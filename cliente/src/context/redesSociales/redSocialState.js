import React, { useReducer } from 'react';

import redSocialContext from './redSocialContext';
import redSocialReducer from './redSocialReducer';
import {
    OBTENER_REDESSOCIALES,
    REDSOCIAL_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const RedSocialState = props => {

    const initialState = {
        redesSociales : [],
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(redSocialReducer, initialState);

    // obtener los redesSociales
    const obtenerRedesSociales = async () => {
        try {
            const resultado = await clienteAxios.get('/api/redesSociales');

            dispatch({
                type: OBTENER_REDESSOCIALES,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: REDSOCIAL_ERROR,
                payload: alerta
            })
        }
    }

    return (
        <redSocialContext.Provider
            value={{
                redesSociales: state.redesSociales,
                mensaje: state.mensaje,
                obtenerRedesSociales
            }}
        >
            {props.children}
        </redSocialContext.Provider>
    )
}

export default RedSocialState;
import React, { useReducer } from 'react';

import integranteContext from './integranteContext';
import integranteReducer from './integranteReducer';
import {
    OBTENER_INTEGRANTES,
    INTEGRANTE_ACTUAL,
    INTEGRANTE_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const IntegranteState = props => {

    const initialState = {
        integrantes : [],
/*        nuevoProyecto : false,
        errorformulario: false,
        proyecto: null,
        
*/      integrante: null,
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(integranteReducer, initialState);

    // serie de funciones para el CRUD

    /*    
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
*/

    // obtener los integrantes
    const obtenerIntegrantes = async () => {
        try {
            const resultado = await clienteAxios.get('/api/integrantes');
            
            dispatch({
                type: OBTENER_INTEGRANTES,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: INTEGRANTE_ERROR,
                payload: alerta
            })
        }
    }

    // selecciona el integrante que el usuario dio click
    const integranteActual = integranteId => {
        dispatch({
            type: INTEGRANTE_ACTUAL,
            payload: integranteId
        })
    }

    return (
        <integranteContext.Provider
            value={{
                integrantes: state.integrantes,
                integrante: state.integrante,
                mensaje: state.mensaje,
                obtenerIntegrantes,
                integranteActual
            }}
        >
            {props.children}
        </integranteContext.Provider>
    )
}

export default IntegranteState;
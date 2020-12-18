import React, { useReducer } from 'react';

import integranteContext from './integranteContext';
import integranteReducer from './integranteReducer';
import {
    OBTENER_INTEGRANTES,
    INTEGRANTE_ERROR
} from '../../types';

import clienteAxios from '../../config/axios';

const IntegranteState = props => {

    const initialState = {
        integrantes : [],
/*        nuevoProyecto : false,
        errorformulario: false,
        proyecto: null,
        
*/      
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

/*    
    // agregar nuevo proyecto
    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            // insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }

    }

    // validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // elimina un proyecto
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }
*/
    return (
        <integranteContext.Provider
            value={{
                integrantes: state.integrantes,
                mensaje: state.mensaje,
                obtenerIntegrantes
            }}
        >
            {props.children}
        </integranteContext.Provider>
    )
}

export default IntegranteState;
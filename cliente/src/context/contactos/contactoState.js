import React, { useReducer } from 'react';

import contactoContext from './contactoContext';
import contactoReducer from './contactoReducer';
import {
    FORMULARIO_CONTACTO,
    OBTENER_CONTACTOS,
    AGREGAR_CONTACTO,
    CONTACTO_ERROR,
    VALIDAR_FORMULARIO
} from '../../types';

import clienteAxios from '../../config/axios';

const ContactoState = props => {

    const initialState = {
        contactos : [],
        nuevoContacto : false,
        errorformulario: false,
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(contactoReducer, initialState);

    // serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_CONTACTO
        })
    }

    // obtener los contactos
    const obtenerContactos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/contactos');
            
            dispatch({
                type: OBTENER_CONTACTOS,
                payload: resultado.data.contactos
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: CONTACTO_ERROR,
                payload: alerta
            })
        }
    }
    
    // agregar nuevo contacto
    const agregarContacto = async contacto => {

        try {
            const resultado = await clienteAxios.post('/api/contactos', contacto);
            console.log(resultado);
            // insertar el contacto en el state
            dispatch({
                type: AGREGAR_CONTACTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Email ya registrado',
                categoria: 'alerta-error'
            }
            dispatch({
                type: CONTACTO_ERROR,
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

    return (
        <contactoContext.Provider
            value={{
                contactos: state.contactos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                contacto: state.contacto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerContactos,
                agregarContacto,
                mostrarError
            }}
        >
            {props.children}
        </contactoContext.Provider>
    )
}

export default ContactoState;
import React, { useReducer } from 'react';
import FotoContext from './fotoContext';
import FotoReducer from './fotoReducer';

import {
    FOTOS_GALERIA,
    FOTO_ACTUAL
} from '../../types';

import clienteAxios from '../../config/axios';

const FotoState = props => {
    const initialState = {
        fotosgaleria: [],
        foto: null,
/*
        anterior: null,
        siguiente: null,
*/
        errorfoto: false
    }

    // crear dispatch
    const [state, dispatch] = useReducer(FotoReducer, initialState);

    // crear las funciones

    // obtener fotos de la galeria
    const obtenerFotos = async galeria => {
        try {
            const resultado = await clienteAxios.get('/api/fotos', { params: { galeria }});
            dispatch({
                type: FOTOS_GALERIA,
                payload: resultado.data.fotos
            })
        } catch (error) {
            console.log(error);
        }
    }

    // selecciona la foto que el usuario dio click
    const fotoActual = fotoId => {
        dispatch({
            type: FOTO_ACTUAL,
            payload: fotoId
        })
    }

    return (
        <FotoContext.Provider
            value={{
                fotosgaleria: state.fotosgaleria,
                foto: state.foto,
                errorfoto: state.errorfoto,
                obtenerFotos,
                fotoActual
            }}
        >
            {props.children}
        </FotoContext.Provider>
    )
}

export default FotoState;
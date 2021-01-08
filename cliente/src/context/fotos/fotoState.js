import React, { useReducer } from 'react';
import FotoContext from './fotoContext';
import FotoReducer from './fotoReducer';

import {
    FOTOS_GALERIA,
} from '../../types';

import clienteAxios from '../../config/axios';

const FotoState = props => {
    const initialState = {
        fotosgaleria: [],
        errorfoto: false,
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

    return (
        <FotoContext.Provider
            value={{
                fotosgaleria: state.fotosgaleria,
                errorfoto: state.errorfoto,
                obtenerFotos
            }}
        >
            {props.children}
        </FotoContext.Provider>
    )
}

export default FotoState;
import {
    FORMULARIO_CONTACTO,
    OBTENER_CONTACTOS,
    AGREGAR_CONTACTO,
    CONTACTO_ERROR,
    VALIDAR_FORMULARIO
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_CONTACTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_CONTACTOS:
            return {
                ...state,
                contactos: action.payload
            }
        case AGREGAR_CONTACTO:
            return {
                ...state,
                contactos: [...state.contactos, action.payload],
                formulario: false,
                errorformulario: false
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }
        case CONTACTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
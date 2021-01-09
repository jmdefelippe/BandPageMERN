import {
    OBTENER_INTEGRANTES,
    INTEGRANTE_ACTUAL,
    INTEGRANTE_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_INTEGRANTES:
            return {
                ...state,
                integrantes: action.payload
            }
        case INTEGRANTE_ACTUAL:
            return {
                ...state,
                integrante: state.integrantes.filter(integrante => integrante._id ===
                action.payload)
            }
        case INTEGRANTE_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
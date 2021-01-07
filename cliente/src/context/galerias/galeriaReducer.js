import {
    OBTENER_GALERIAS,
    GALERIA_ERROR,
    GALERIA_ACTUAL,
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_GALERIAS:
            return {
                ...state,
                galerias: action.payload
            }
        case GALERIA_ACTUAL:
            return {
                ...state,
                galeria: state.galerias.filter(galeria => galeria._id ===
                action.payload)
            }
        case GALERIA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
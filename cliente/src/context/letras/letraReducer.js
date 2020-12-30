import {
    OBTENER_LETRA,
    LETRA_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_LETRA:
            return {
                ...state,
                letra: action.payload
            }
       case LETRA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
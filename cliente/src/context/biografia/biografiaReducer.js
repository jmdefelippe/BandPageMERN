import {
    OBTENER_BIOGRAFIA,
    BIOGRAFIA_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_BIOGRAFIA:
            return {
                ...state,
                biografia: action.payload
            }
        case BIOGRAFIA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
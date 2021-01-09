import {
    OBTENER_REDESSOCIALES,
    REDSOCIAL_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_REDESSOCIALES:
            return {
                ...state,
                redesSociales: action.payload
            }
       case REDSOCIAL_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
import {
    OBTENER_MINIATURAS,
    MINIATURA_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_MINIATURAS:
            return {
                ...state,
                miniaturas: action.payload
            }
       case MINIATURA_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
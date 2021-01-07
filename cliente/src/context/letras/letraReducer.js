import {
    OBTENER_LETRA,
    LETRA_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_LETRA:
            console.log('por guardar la letra');
            console.log(action);
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
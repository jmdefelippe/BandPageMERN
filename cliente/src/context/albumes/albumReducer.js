import {
    OBTENER_ALBUMES,
    ALBUM_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_ALBUMES:
            return {
                ...state,
                albumes: action.payload
            }
       case ALBUM_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
import {
    OBTENER_ALBUMES,
    ALBUM_ERROR,
    CANCION_ACTUAL
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
        case CANCION_ACTUAL:
            return {
                ...state,
                cancion: state.albumes.canciones.find(cancion => cancion.titulo ===
                action.payload)
            }
        default:
            return state;
    }
}
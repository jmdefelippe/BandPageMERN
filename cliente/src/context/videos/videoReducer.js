import {
    OBTENER_VIDEOS,
    VIDEO_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_VIDEOS:
            return {
                ...state,
                videos: action.payload
            }
       case VIDEO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
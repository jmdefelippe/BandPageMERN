import {
    OBTENER_PLAYLISTS,
    PLAYLIST_ERROR
} from '../../types';

export default (state, action) => {
    switch(action.type) {

        case OBTENER_PLAYLISTS:
            return {
                ...state,
                playlists: action.payload
            }
       case PLAYLIST_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
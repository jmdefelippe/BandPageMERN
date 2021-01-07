import {
    FOTOS_GALERIA
} from "../../types";

export default (state, action) => {
    switch(action.type) {
        case FOTOS_GALERIA:
            return {
                ...state,
                fotosgaleria: action.payload
            }
       default:
            return state;
    }
}
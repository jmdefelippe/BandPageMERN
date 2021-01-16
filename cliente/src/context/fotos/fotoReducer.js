import {
    FOTOS_GALERIA,
    FOTO_ACTUAL
} from "../../types";

export default (state, action) => {
    switch(action.type) {
        case FOTOS_GALERIA:
            return {
                ...state,
                fotosgaleria: action.payload
            }

        case FOTO_ACTUAL:
            return {
                ...state,
                foto: state.fotosgaleria.filter(foto => foto._id ===
                action.payload)
            }
       default:
            return state;
    }
}
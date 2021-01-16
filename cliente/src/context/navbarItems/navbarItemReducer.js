import {
//    NAVBARITEM_ACTUAL
    ACTIVAR_BIOGRAFIA,
    ACTIVAR_CONTACTO,
    ACTIVAR_COVERS,
    ACTIVAR_DISCOGRAFIA,
    ACTIVAR_FOTOS,
    ACTIVAR_INTEGRANTES,
    ACTIVAR_VIDEOS,
    DESACTIVAR_ITEMS
} from '../../types';

/*
const todosFalse = {
    biografia: false,
    integrantes: false,
    fotos: false,
    discografia: false,
    videos: false,
    covers: false,
    contacto: false
}

*/

export default (state, action) => {
    switch(action.type) {
/*
        case NAVBARITEM_ACTUAL:
            return {
                ...state,
                navbarItem: action.payload
            }
*/
        case DESACTIVAR_ITEMS:
            return {
                ...state,
                biografia: false,
                integrantes: false,
                fotos: false,
                discografia: false,
                videos: false,
                covers: false,
                contacto: false
            }
        case ACTIVAR_BIOGRAFIA:
            return {
                ...state,
                biografia: true,
                integrantes: false,
                fotos: false,
                discografia: false,
                videos: false,
                covers: false,
                contacto: false
            }
        case ACTIVAR_INTEGRANTES:
            return {
                ...state,
                biografia: false,
                integrantes: true,
                fotos: false,
                discografia: false,
                videos: false,
                covers: false,
                contacto: false
            }
        case ACTIVAR_FOTOS:
        return {
            ...state,
            biografia: false,
            integrantes: false,
            fotos: true,
            discografia: false,
            videos: false,
            covers: false,
            contacto: false
        }
        case ACTIVAR_DISCOGRAFIA:
            return {
                ...state,
                biografia: false,
                integrantes: false,
                fotos: false,
                discografia: true,
                videos: false,
                covers: false,
                contacto: false
            }
        case ACTIVAR_VIDEOS:
            return {
                ...state,
                biografia: false,
                integrantes: false,
                fotos: false,
                discografia: false,
                videos: true,
                covers: false,
                contacto: false
            }
        case ACTIVAR_COVERS:
            return {
                ...state,
                biografia: false,
                integrantes: false,
                fotos: false,
                discografia: false,
                videos: false,
                covers: true,
                contacto: false
            }
        case ACTIVAR_CONTACTO:
            return {
                ...state,
                biografia: false,
                integrantes: false,
                fotos: false,
                discografia: false,
                videos: false,
                covers: false,
                contacto: true
            }
        default:
            return state;
    }
}
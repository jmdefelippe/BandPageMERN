import { MOSTRAR_ALERTA, OCULTAR_ALERTA, OBTENER_USUARIO } from '../../types';

export default (state, action) => {
    switch(action.type) {
        case MOSTRAR_ALERTA:
            return {
                alerta: action.payload
            }
/*            
        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload
            }    
*/    
        case OCULTAR_ALERTA:
            return {
                alerta: null
            }
        default:
            return state;
    }
}
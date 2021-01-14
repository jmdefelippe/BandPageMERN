import React, { useReducer } from 'react';

import navbarItemContext from './navbarItemContext';
import navbarItemReducer from './navbarItemReducer';
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

const NavbarItemState = props => {

    const initialState = {
/*        
        navbarItem: null,
        mensaje: null
*/
        biografia: false,
        integrantes: false,
        fotos: false,
        discografia: false,
        videos: false,
        covers: false,
        contacto: false,
        mensaje: null
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(navbarItemReducer, initialState);

/*
    // selecciona el navbarItem que el usuario dio click
    const navbarItemActual = navbarItem => {
        dispatch({
            type: NAVBARITEM_ACTUAL,
            payload: navbarItem
        })
    }
*/

    const desactivarItems = () => {
        dispatch({
            type: DESACTIVAR_ITEMS
        })
    } 


    const activarBiografia = () => {
        dispatch({
            type: ACTIVAR_BIOGRAFIA
        })
    }

    const activarIntegrantes = () => {
        dispatch({
            type: ACTIVAR_INTEGRANTES
        })
    } 

    const activarFotos = () => {
        dispatch({
            type: ACTIVAR_FOTOS
        })
    } 

    const activarDiscografia = () => {
        dispatch({
            type: ACTIVAR_DISCOGRAFIA
        })
    } 

    const activarVideos = () => {
        dispatch({
            type: ACTIVAR_VIDEOS
        })
    } 

    const activarCovers = () => {
        dispatch({
            type: ACTIVAR_COVERS
        })
    } 

    const activarContacto = () => {
        dispatch({
            type: ACTIVAR_CONTACTO
        })
    } 



    return (
        <navbarItemContext.Provider
            value={{
/*
                navbarItem: state.navbarItem,
                mensaje: state.mensaje,
                navbarItemActual
*/
                biografia: state.biografia,
                integrantes: state.integrantes,
                fotos: state.fotos,
                discografia: state.discografia,
                videos: state.videos,
                covers: state.covers,
                contacto: state.contacto,
                mensaje: state.mensaje,

                desactivarItems,
                activarBiografia,
                activarIntegrantes,
                activarFotos,
                activarDiscografia,
                activarVideos,
                activarCovers,
                activarContacto

                }}
        >
            {props.children}
        </navbarItemContext.Provider>
    )
}

export default NavbarItemState;
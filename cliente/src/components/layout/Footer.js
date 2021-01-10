import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import RedSocial from '../redesSociales/RedSocial';
import redSocialContext from '../../context/redesSociales/redSocialContext';
import AlertaContext from '../../context/alertas/alertaContext';

const Footer = () => {

   // extraer redesSociales de state inicial
   const redesSocialesContext = useContext(redSocialContext);
   const { redesSociales, mensaje, obtenerRedesSociales } = redesSocialesContext;

   const alertaContext = useContext(AlertaContext);
   const { mostrarAlerta } = alertaContext;

   // obtener redesSociales cuando carga el componente
   useEffect(() => {

       // si hay un error
       if (mensaje) {
           mostrarAlerta(mensaje.msg, mensaje.categoria);
       }

       obtenerRedesSociales();
       // eslint-disable-next-line
   }, [mensaje]);

   // revisar si redesSociales tiene contenido
   if(redesSociales.length === 0) return <p>No hay redesSociales</p>;

    return(
        <footer className="app-footer">
            {/* <p className="nombre-usuario">Hola <span>Joan</span></p> */}
            <div className="nav-principal">
                <Link to={'/biografia'}>Biografia</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/integrantes'}>Integrantes</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/galerias'}>Fotos</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/discografia'}>Discografia</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/videos'}>Videos</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/covers'}>Covers</Link>
            </div>
            <div className="nav-principal">
                <Link to={'/contacto'}>Contacto</Link>
            </div>

            {redesSociales.map(redSocial => 
                    <div key={redSocial._id} className="nav-principal"> <RedSocial redSocial={redSocial}/></div>
            )}
            

        </footer>
    );
}

export default Footer;

/*
            <div className="nav-principal">
                <a href="https://www.instagram.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/redesSociales/instagram.png" className="iconSocial"  alt="iconInstagram"/>
                </a>
            </div>
            <div className="nav-principal">
                <a href="https://www.facebook.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/redesSociales/facebook.png" className="iconSocial"  alt="iconFacebook"/>
                </a>              
            </div>
            <div className="nav-principal">
                <a href="https://www.twitter.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/redesSociales/twitter.png" className="iconSocial"  alt="iconTwitter"/>
                </a>              
            </div>
            <div className="nav-principal">
                <a href="https://www.youtube.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/redesSociales/youtube.png" className="iconSocial"  alt="iconYoutube"/>
                </a>              
            </div>
            <div className="nav-principal">
                <a href="spotify:artist:7oPftvlwr6VrsViSDV7fJY" target="_blank" rel="noreferrer">
                    <img src="img/redesSociales/spotify.png" className="iconSocial"  alt="iconSpotify"/>
                </a>              
            </div>
*/
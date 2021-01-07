import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
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
                <Link to={'/fotos'}>Fotos</Link>
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
                <a href="https://www.instagram.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/icono_Instagram.png" className="iconSocial"  alt="iconInstagram"/>
                </a>
            </div>
            <div className="nav-principal">
                <a href="https://www.facebook.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/icono_Facebook.png" className="iconSocial"  alt="iconFacebook"/>
                </a>              
            </div>
            <div className="nav-principal">
                <a href="https://www.twitter.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/icono_Twitter.png" className="iconSocial"  alt="iconTwitter"/>
                </a>              
            </div>
            <div className="nav-principal">
                <a href="https://www.youtube.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/icono_Youtube.png" className="iconSocial"  alt="iconYoutube"/>
                </a>              
            </div>
            <div className="nav-principal">
                <a href="https://www.youtube.com/greenday" target="_blank" rel="noreferrer">
                    <img src="img/icono_Spotify.png" className="iconSocial"  alt="iconSpotify"/>
                </a>              
            </div>

        </footer>
    );
}

export default Footer;
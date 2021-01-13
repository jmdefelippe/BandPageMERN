import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(

        <div className="header">
            <div className="col-0-5"></div>
            <div className="col-11">
                <div className="">
                    <Link to={'/'}>
                            <img src="img/logo4.png" className="header-logo" alt="logo"/>
                    </Link>
                </div>
                <div className="">
                    <Link to={'/biografia'}>Biografía</Link>
                </div>
                <div className="">
                    <Link to={'/integrantes'}>Integrantes</Link>
                </div>
                <div className="">
                    <Link to={'/galerias'}>Fotos</Link>
                </div>
                <div className="">
                    <Link to={'/discografia'}>Discografia</Link>
                </div>
                <div className="">
                    <Link to={'/videos'}>Videos</Link>
                </div>
                <div className="">
                    <Link to={'/covers'}>Covers</Link>
                </div>
                <div className="">
                    <Link to={'/contacto'}>Contacto</Link>
                </div>
                           
            </div>
            <div className="col-0-5"></div>
        </div>


    );
}

export default Header;

{/*}
        <nav className="app-header">
            
            
                <Link to={'/'}>
                        <img src="img/logo4.png" className="header-logo nav-principal" alt="logo"/>
                </Link>
                <div className="nav-principal">
                    <Link to={'/biografia'}>Biografía</Link>
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
           
 

        </nav>
*/}
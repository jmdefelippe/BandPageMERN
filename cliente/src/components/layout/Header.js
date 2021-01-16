import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    return(
        <div className="header">
            <div className="col-0-5"></div>
            <div className="col-11">
                <div><Link to={'/'}><img src="img/logo4.png" className="header-logo" alt="logo"/></Link></div>
                <div><Link to={'/biografia'}>Biografía</Link></div>    
                <div><Link to={'/integrantes'}>Integrantes</Link></div>    
                <div><Link to={'/galerias'}>Fotos</Link></div>
                <div><Link to={'/discografia'}>Discografia</Link></div>
                <div><Link to={'/videos'}>Videos</Link></div>
                <div><Link to={'/covers'}>Covers</Link></div>
                <div><Link to={'/contacto'}>Contacto</Link></div>
            </div>
            <div className="col-0-5"></div>
        </div>
    );
}

export default Header;

/*
    function HeaderView() {
        const location = useLocation();
        console.log(location.pathname);
        return <span>Path : {location.pathname}</span>
    }

    //{console.log(HeaderView());}
*/

/*
    const getMenu = (value, url, text) => {
        const className = value ? "Active" : "Inactive";
        return <div classname={className}><Link to={url}>{text}</Link></div>
        value ? <div>< LinkTo={url} classname="active"> : <
*/

/*}
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
*/

/*}            <div className=""><Link to={'/biografia'}>Biografía</Link></div>    
                <div className=""><Link to={'/integrantes'}>Integrantes</Link></div>    
                <div className=""><Link to={'/galerias'}>Fotos</Link></div>
                <div className=""><Link to={'/discografia'}>Discografia</Link></div>
                <div className=""><Link to={'/videos'}>Videos</Link></div>
                <div className=""><Link to={'/covers'}>Covers</Link></div>
                <div className=""><Link to={'/contacto'}>Contacto</Link></div>
*/                

/*

                { navbarItem === 'Biografía'
                    ? <div><Link to={'/biografia'}
                        className="active"
                        onClick={() => seleccionarNavbarItem('Biografía')}
                        >Biografía</Link></div>
                    : <div><Link to={'/biografia'} 
                        onClick={() => seleccionarNavbarItem('Biografía')}
                        >Biografía</Link></div>
                }

                { navbarItem === 'Integrantes'
                    ? <div><Link to={'/integrantes'} className="active"
                        onClick={() => seleccionarNavbarItem('Integrantes')}
                        >Integrantes</Link></div>
                    : <div><Link to={'/integrantes'} 
                    onClick={() => seleccionarNavbarItem('Integrantes')}
                    >Integrantes</Link></div>
                }

*/

/*
                { biografia
                    ? <div><Link to={'/biografia'} className="active">Biografía</Link></div>
                    : <div><Link to={'/biografia'}>Biografía</Link></div>
                }

                { integrantes
                    ? <div ><Link to={'/integrantes'} className="active">Integrantes</Link></div>
                    : <div><Link to={'/integrantes'}>Integrantes</Link></div>
                }

                { fotos
                    ? <div ><Link to={'/galerias'} className="active">Fotos</Link></div>
                    : <div><Link to={'/galerias'}>Fotos</Link></div>
                }

                { discografia
                    ? <div ><Link to={'/discografia'} className="active">Discografía</Link></div>
                    : <div><Link to={'/discografia'}>Discografía</Link></div>
                }

                { videos
                    ? <div ><Link to={'/videos'} className="active">Videos</Link></div>
                    : <div><Link to={'/videos'}>Videos</Link></div>
                }

                { covers
                    ? <div ><Link to={'/covers'} className="active">Covers</Link></div>
                    : <div><Link to={'/covers'}>Covers</Link></div>
                }

                { contacto
                    ? <div ><Link to={'/contacto'} className="active">Contacto</Link></div>
                    : <div><Link to={'/contacto'}>Contacto</Link></div>
                }
*/
import React from 'react';
// import integranteContext from '../../context/integrantes/integranteContext';

const Integrante = ({ integrante }) => {
    // obtener el state de integrantes
//    const integrantesContext = useContext(integranteContext);
//    const { integranteActual } = integrantesContext;

    const { nombre, rol, imagen, biografia } = integrante;
    let { fechaNacimiento } = integrante;

    fechaNacimiento = integrante.fechaNacimiento.substring(0,10);
    const profileImg = `../img/integrantes/${imagen}`;

/*
    const arrBiography = biografia.split(/\\n/);
    const bioComponents = [];
    let i = 0;
    arrBiography.forEach( (line) => {
        bioComponents.push(<span key={i++}>{line}</span>);
        bioComponents.push(<br key={i++}/>);
    });
*/    
    return (
        <div>    
            <img src={profileImg} className="responsive"  alt="billie"/>
            <h1>{nombre}</h1>
            <h2>Rol: {rol}</h2>
            <h2>Fecha de Nacimiento: {fechaNacimiento}</h2>
            <p className="biografia">{biografia}</p>
        </div>
        
    );
}

export default Integrante;

/*
            {biografia.map( parrafo =>
                <div> {parrafo.split('\\n').map( bloque => <p> {bloque} /</p> )} </div>
            )}
*/
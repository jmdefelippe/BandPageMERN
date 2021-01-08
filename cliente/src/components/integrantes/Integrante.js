import React from 'react';

const Integrante = ({ integrante }) => {

    const { nombre, rol, imagen, biografia } = integrante;
    let { fechaNacimiento } = integrante;

    fechaNacimiento = integrante.fechaNacimiento.substring(0,10);
    const profileImg = `../img/integrantes/${imagen}`;

    return (
        <div className="col-3">    
            <img src={profileImg} className="responsive"  alt="billie"/>
            <h1>{nombre}</h1>
            <h2>Rol: {rol}</h2>
            <h2>Fecha de Nacimiento: {fechaNacimiento}</h2>
            <p className="parser">{biografia}</p>
        </div>
    );
}

export default Integrante;

/*
    const arrBiography = biografia.split(/\\n/);
    const bioComponents = [];
    let i = 0;
    arrBiography.forEach( (line) => {
        bioComponents.push(<span key={i++}>{line}</span>);
        bioComponents.push(<br key={i++}/>);
    });
*/    

/*
            {biografia.map( parrafo =>
                <div> {parrafo.split('\\n').map( bloque => <p> {bloque} /</p> )} </div>
            )}
*/
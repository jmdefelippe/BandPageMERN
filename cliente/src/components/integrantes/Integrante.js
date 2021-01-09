import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import integranteContext from '../../context/integrantes/integranteContext';

const Integrante = ({ integrante }) => {

    // obtener el state de integrantes
    const integrantesContext = useContext(integranteContext);
    const { integranteActual } = integrantesContext;

    const { nombre, rol, imagen, biografia } = integrante;
    let { fechaNacimiento } = integrante;

    fechaNacimiento = integrante.fechaNacimiento.substring(0,10);
    const profileImg = `../img/integrantes/${imagen}`;

    // función para agregar el integrante actual
    const seleccionarIntegrante = id => {
        integranteActual(id); // fijar integrante actual
    }

    return (
        <div className="col-3">
            <Link to={'/biografiaIntegrante'}>
                <img src={profileImg}
                    className="responsive" alt={nombre}
                    alt=""
                    onClick={() => seleccionarIntegrante(integrante._id)}
                />
            </Link>
            <h1 className="center">{nombre}</h1>
            <h2 className="center">{rol}</h2>
{/* 
            <h2>Fecha de Nacimiento: {fechaNacimiento}</h2>
            <p className="parser">{biografia}</p>
*/}
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
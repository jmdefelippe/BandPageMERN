import React from 'react';

const Miniatura = ({ miniatura }) => {

    const { titulo, imagen, link } = miniatura;
    
    const thumbnail = `../img/miniaturas/${imagen}`;
    
    return (
        <div className="col-3">
            <a href={link} target="_blank">
                <img src={thumbnail} className="responsive hover"  alt="miniatura"/>
            </a>
            <div className="cancion center">{titulo}</div>
        </div>
    );
}

export default Miniatura;

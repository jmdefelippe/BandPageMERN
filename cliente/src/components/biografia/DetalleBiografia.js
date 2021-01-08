import React from 'react';

const DetalleBiografia = ({ detalleBiografia }) => {

    const { destacado, detalle, imagen } = detalleBiografia;
    
    const imagenBiografia = `../img/biografia/${imagen}`;
    
    return (
        <div className="row">
            <div className="col-1"></div>
            <div className="col-4">
                <img src={imagenBiografia} className="responsive"  alt="biografia"/>
            </div>
            <div className="col-6">
                <h2>{destacado}</h2>
                <p className="biografia">{detalle}</p>
            </div>
            <div className="col-1"></div>
        </div>
    );
}

export default DetalleBiografia;


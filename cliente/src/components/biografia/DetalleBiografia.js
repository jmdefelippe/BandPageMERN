import React from 'react';

const DetalleBiografia = ({ detalleBiografia }) => {

    const { resumen, detalle, imagen } = detalleBiografia;
    
    const imagenBiografia = `../img/biografia/${imagen}`;
    
    return (
        <div>
            <div className="col-1"></div>
            <div className="col-4">
                <img src={imagenBiografia} className="responsive"  alt="inicio"/>
            </div>
            <div className="col-6">
                <h1>BIOGRAFÍA</h1>
                <h2>{resumen}</h2>
                <p className="biografia">{detalle}</p>
            </div>
            <div className="col-1"></div>
        </div>
    );
}

export default DetalleBiografia;


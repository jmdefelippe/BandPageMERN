import React from 'react';

const DetalleBiografia = ({ detalleBiografia }) => {

    const { destacado, detalle, imagen } = detalleBiografia;
    
    const imagenBiografia = `../img/biografia/${imagen}`;
    
    return (
        <div className="row">    
            <div className="col-0-5"></div>
            <div className="col-11">
                <div className="row bg-dark radius"> 
                    <div className="col-0-5"></div>
                    <div className="col-4">
                        <img src={imagenBiografia} className="responsive"  alt="biografia"/>
                    </div>
                    <div className="col-7">
                        <h2>{destacado}</h2>
                        <p className="parser">{detalle}</p>
                    </div>
                    <div className="col-0-5"></div>
                </div>   
            </div>     
            <div className="col-0-5"></div>    
        </div>
    );
}

export default DetalleBiografia;


import React from 'react';

const DetalleBiografia = ({ detalleBiografia }) => {

    const { destacado, detalle, imagen } = detalleBiografia;
    
    const imagenBiografia = `../img/biografia/${imagen}`;
    
    return (
        <div className="row">    
            <div className="col-12 bg-dark radius mb-biografia">
                <div className="row"> 
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
        </div>
    );
}

export default DetalleBiografia;


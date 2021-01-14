import React from 'react';

const Foto = ({ foto }) => {

    const { imagen, galeriaTitulo } = foto;
    
    const fotografia = `../img/fotos/${galeriaTitulo}/${imagen}`;

    return(
        <div className="col-2">
            <img src={fotografia} className="responsive radius hover"  alt="foto"/>
        </div>
    );
}

export default Foto;






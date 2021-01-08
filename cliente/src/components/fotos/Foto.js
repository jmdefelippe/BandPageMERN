import React from 'react';

const Foto = ({ foto }) => {

    const { imagen, galeriaTitulo } = foto;
    
    const fotografia = `../img/fotos/${galeriaTitulo}/${imagen}`;

    return(
        <div className="col-3">
            <img src={fotografia} class="responsive"  alt="foto"/>
        </div>
    );
}

export default Foto;






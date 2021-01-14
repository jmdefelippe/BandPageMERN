import React from 'react';

const RedSocial = ({ redSocial }) => {

    const { imagen, link } = redSocial;
    
    const icono = `../img/redesSociales/${imagen}`;
    
    return (
        <div className="iconSocial">
            <a href={link} target="_blank">
                <img src={icono} className="responsive"  alt="redSocial"/>
            </a>
        </div>
    );
}

export default RedSocial;

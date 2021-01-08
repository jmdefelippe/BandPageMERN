import React from 'react';

const Video = ({ video }) => {

    const { titulo, imagen, link } = video;
    
    const miniatura = `../img/videos/${imagen}`;
    
    return (
        <div className="col-3">
            <a href={link} target="_blank">
                <img src={miniatura} class="responsive"  alt="miniatura"/>
            </a>
            <div className="cancion center">{titulo}</div>
        </div>
    );
}

export default Video;

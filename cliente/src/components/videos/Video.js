import React from 'react';

const Video = ({ video }) => {

    const { titulo, link } = video;
    
    const src = `${link}?loop=1`; //&modestbranding=1 

    return (
        <div className="row">    
            <div className="col-12 center responsive">
                <iframe id="ytplayer" type="text/html" className="youtube-720" src={src} frameBorder="0" allowFullScreen/>
                <h2 className="center"> {titulo}</h2>
            </div>
        </div>
    );
}

export default Video;



/*
                    <iframe src={link} class="coverSize6"></iframe>

*/
import React from 'react';

const Video = ({ video }) => {

    const { titulo, link } = video;
    
    return (
        <div className="row">    
            <div className="col-12 center responsive">
                <iframe src={link} class="coverSize6"></iframe>
                <h2 className="center"> {titulo}</h2>
            </div>
        </div>
    );
}

export default Video;

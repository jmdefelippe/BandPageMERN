import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Playlist = ({ playlist }) => {

    const { titulo, descripcion, videos } = playlist;
  
    
    return (
        <div className="row">    
                <h1 className="center">{playlist.titulo}</h1>
                {videos.map((video, index) =>
                    <div className="col-6 center" key={index}>
                        <iframe src={video.link} class="coverSize6"></iframe>
                        <h2 className="center"> {video.titulo}</h2>
                    </div>
                )}
        </div>
    );
}

export default Playlist;
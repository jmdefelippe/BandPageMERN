import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Playlist = ({ playlist }) => {

    const { titulo, descripcion, videos } = playlist;

    return (
        <div className="row bg-dark radius pd-playlist mb-playlist">    
            <h1 className="center">{playlist.titulo}</h1>
            {videos.map((video, index) =>
                <div className="col-6 center" key={index}>
                    <iframe type="text/html" className="youtube-size6" src={video.link} frameborder="0" allowfullscreen></iframe>
                    <h2 className="center"> {video.titulo}</h2>
                </div>
            )}
        </div>
    );
}

export default Playlist;

/*

        <div className="row">    
            <div className="col-0-5"></div>
            <div className="col-11">
                <div className="row bg-dark radius">    
                    <h1 className="center">{playlist.titulo}</h1>
                    {videos.map((video, index) =>
                        <div className="col-6 center" key={index}>
                            <iframe src={video.link} class="coverSize6"></iframe>
                            <h2 className="center"> {video.titulo}</h2>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-0-5"></div>
        </div>            



*/
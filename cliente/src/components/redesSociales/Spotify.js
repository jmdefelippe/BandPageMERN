import React from 'react';

const Spotify = () => {

    
    return (

        <div className="row">
            <div className="col-4">
                <iframe src="https://open.spotify.com/embed/album/4afBLiqJ3Su2FTX5ynyWVj" className="spotify-large" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                <iframe src="https://open.spotify.com/embed/album/4afBLiqJ3Su2FTX5ynyWVj?si=WrVC8-mxRR2viJuZSKw8ig" className="spotify-compact" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:20Cxf65bhLPgZpRBbyindk?si=EkGk-n0xS-SaTlhYDn2HDg&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" ></iframe>

                <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:20Cxf65bhLPgZpRBbyindk?si=EkGk-n0xS-SaTlhYDn2HDg&size=basic&theme=dark" width="200" height="25" scrolling="no" frameborder="0"></iframe>
            </div>
        </div>

    );
}

export default Spotify;

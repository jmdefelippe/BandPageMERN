import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoPlaylists from './ListadoPlaylists';

const Playlists = () => {
    return(
        <div>
            <Header />
            <main className="main">
                <ListadoPlaylists/>
            
            <div className="row">
                <div className="col-4">
                    <iframe src="https://open.spotify.com/embed/album/4afBLiqJ3Su2FTX5ynyWVj" className="spotify-large" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    <iframe src="https://open.spotify.com/embed/album/4afBLiqJ3Su2FTX5ynyWVj?si=WrVC8-mxRR2viJuZSKw8ig" className="spotify-compact" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:20Cxf65bhLPgZpRBbyindk?si=EkGk-n0xS-SaTlhYDn2HDg&size=detail&theme=dark" width="300" height="56" scrolling="no" frameborder="0" ></iframe>

                    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:20Cxf65bhLPgZpRBbyindk?si=EkGk-n0xS-SaTlhYDn2HDg&size=basic&theme=dark" width="200" height="25" scrolling="no" frameborder="0"></iframe>
                </div>
            </div>

            </main>
            <Footer/>
        </div>
    );
}

export default Playlists;


/*
    div className="contenedorPlaylists">
        <h1 className="center">21st Century Breakdown</h1>
        <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <iframe src="https://www.youtube.com/embed/Mt_2qwfqleQ" class="coverSize"></iframe>
                    <iframe src="https://www.youtube.com/embed/10hwnZaeHu8" class="coverSize"></iframe>
                </div>
                <div className="col-1"></div>
        </div>
        <h1 className="center">American Idiot</h1>
        <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <iframe src="https://www.youtube.com/embed/ZmtGwPxgaJk" class="coverSize"></iframe>
                    <iframe src="https://www.youtube.com/embed/IVogA_qcpoE" class="coverSize"></iframe>
                    <iframe src="https://www.youtube.com/embed/bVOrvwmESrY" class="coverSize"></iframe>
                    <iframe src="https://www.youtube.com/embed/apJEmYSoSIs" class="coverSize"></iframe>
                </div>
                <div className="col-1"></div>
        </div>
    </div>
*/
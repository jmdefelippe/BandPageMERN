import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoPlaylists from './ListadoPlaylists';

const Playlists = () => {

    return(
        <div>
            <Header />
            <main className="main">
                <ListadoPlaylists/>
            

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
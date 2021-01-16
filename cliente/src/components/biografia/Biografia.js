import React, { useContext, useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ListadoDetalleBiografia from './ListadoDetalleBiografia';
import Videos from '../videos/Videos';

const Biografia = () => {

    return(
        <div>
            <Header/>
            <main className="main">
                <ListadoDetalleBiografia/>
                <Videos/>
            </main>
            <Footer/>
        </div>
    );
}

export default Biografia;
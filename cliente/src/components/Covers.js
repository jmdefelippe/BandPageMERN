import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';


const Covers = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <Header />
                <main>
                    <div className="contenedorCovers">
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
                </main>
                <Footer/>
            </div>
        </div>
        
    );
}

export default Covers;



/*
                    <h1 className="albumTitulo">American Idiot 2</h1>
                        <div className="row">
                            
                            <div className="col-5">
                                <iframe src="https://www.youtube.com/embed/apJEmYSoSIs" class="coverSizeLg"></iframe>
                                    
                            </div>
                            <div className="col-6 coverCol">
                                <div className="row">
                                    <iframe src="https://www.youtube.com/embed/ZmtGwPxgaJk" class="coverSizeSm"></iframe>
                                    <iframe src="https://www.youtube.com/embed/IVogA_qcpoE" class="coverSizeSm"></iframe>
                                </div>
                                <div className="row">
                                    
                                    <iframe src="https://www.youtube.com/embed/ZmtGwPxgaJk" class="coverSizeSm"></iframe>
                                    <iframe src="https://www.youtube.com/embed/ZmtGwPxgaJk" class="coverSizeSm"></iframe>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>

*/
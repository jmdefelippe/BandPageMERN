import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Biografia = () => {
    return(
        <div className="contenedor-app">
            <div className="seccion-principal">
                <main>
                    <Header />
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-4">
                                <img src="img/biografia.jpg" class="responsive"  alt="inicio"/>
                            </div>
                            <div class="col-6">
                                <h1>BIOGRAFÍA</h1>
                                <h2>
                                    Green Day es una banda estadounidense de pop punk​ y punk rock​ integrada inicialmente por tres miembros: Billie Joe Armstrong (guitarra y voz), Mike Dirnt (bajo y coros) y Tré Cool (batería y coros).              
                                </h2>
                                <p>
                                    El grupo originario de Berkeley,​ California, se gestó prematuramente en 1986 bajo el nombre de Sweet Children, con el baterista John Kiffmeyer (más conocido como Al Sobrante). En 1989 se cambiaron al nombre actual ya que el anterior (Sweet Children) se confundía con el de una banda local de esa época y poco después del lanzamiento de su primer álbum de estudio (39/Smooth), Tré Cool reemplazó a Al Sobrante.
                                </p>
                                <p>
                                    Fue uno de los grupos que nacieron en el club 924 Gilman Street, sitio que frecuentaban bandas de punk rock locales. Sus primeras publicaciones se realizaron por medio del sello discográfico independiente Lookout!,​ gracias a las exitosas ventas de sus primeros trabajos discográficos, se obtuvo una importante cantidad de admiradores. Algunos años después, en 1994 el conjunto firmó con Reprise Records, con este sello lanzaron el aclamado Dookie.10​Con este nuevo álbum el grupo musical llevó el sonido de finales de la década de 1970 a la nueva generación, además, el álbum se convirtió en un éxito internacional y lleva vendidas más de treinta millones de copias en todo el mundo.
                                </p>
                                <p>
                                    Green Day junto a otras bandas como The Offspring y Rancid, fueron los que produjeron el renacimiento y popularización del punk rock en los Estados Unidos, como de la cultura misma,​ las masivas ventas produjeron la apertura de una ola de grupos pop punk y punk rock. Diez años después muchos de esos conjuntos se encuentran inactivos o disueltos, mientras que Green Day sigue en plena vanguardia musical con las ópera rock American Idiot y 21st Century Breakdown de 2004 y 2009 respectivamente, ambas con un Premio Grammy al mejor álbum de rock. Editaron una trilogía de álbumes titulados ¡Uno!, ¡Dos! y ¡Tré!, editados en septiembre, noviembre y diciembre de 2012 respectivamente.​ Su álbum Revolution Radio salió a la venta el 7 de octubre de 2016. ​En febrero de 2020 sacan su último album titulado "Father of all..." con 10 temas producido por Butch Walker, editado por la discográfica Reprise.
                                </p>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    <Footer />
                </main>
            </div>
        </div>
        
    );
}

export default Biografia;
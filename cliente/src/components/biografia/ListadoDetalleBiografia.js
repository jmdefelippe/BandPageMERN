import React, { useContext, useEffect } from 'react';
import DetalleBiografia from './DetalleBiografia';
import BiografiaContext from '../../context/biografia/biografiaContext';
import AlertaContext from '../../context/alertas/alertaContext';

const ListadoDetalleBiografia = () => {
    
    // extraer biografia de state inicial
    const biografiaContext = useContext(BiografiaContext);
    const { biografia, mensaje, obtenerBiografia } = biografiaContext;

    const alertaContext = useContext(AlertaContext);
    const { mostrarAlerta } = alertaContext;

    // obtener videos cuando carga el componente
    useEffect(() => {

        // si hay un error
        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerBiografia();
        // eslint-disable-next-line
    }, [mensaje]);

    // revisar si videos tiene contenido
    if(biografia.length === 0) return <p>No hay biografía</p>;

    return (
        
        <div className="row">
                {biografia.map(detalleBiografia => 
                    <div className="">
                        <div key={detalleBiografia._id} className=""> <DetalleBiografia detalleBiografia={detalleBiografia}/></div>
                    </div>
                )}
        </div>
    );
}

export default ListadoDetalleBiografia;

/*

        <div className="row">
            <div className="col-1"></div>
            <div className="col-4">
                <img src="img/biografia.jpg" className="responsive"  alt="inicio"/>
            </div>
            <div className="col-6">
                <h1>BIOGRAFÍA</h1>
                <h2>
                    Green Day es una banda estadounidense de pop punk​ y punk rock​ integrada inicialmente por tres miembros: Billie Joe Armstrong (guitarra y voz), Mike Dirnt (bajo y coros) y Tré Cool (batería y coros).              
                </h2>
                <p>
                    El grupo originario de Berkeley,​ California, se gestó prematuramente en 1986 bajo el nombre de Sweet Children, con el baterista John Kiffmeyer (más conocido como Al Sobrante). En 1989 se cambiaron al nombre actual ya que el anterior (Sweet Children) se confundía con el de una banda local de esa época y poco después del lanzamiento de su primer álbum de estudio (39/Smooth), Tré Cool reemplazó a Al Sobrante.
                </p>
                <p>
                    Fue uno de los grupos que nacieron en el club 924 Gilman Street, sitio que frecuentaban bandas de punk rock locales. Sus primeras publicaciones se realizaron por medio del sello discográfico independiente Lookout!,​ gracias a las exitosas ventas de sus primeros trabajos discográficos, se obtuvo una importante cantidad de admiradores. Algunos años después, en 1994 el conjunto firmó con Reprise Records, con este sello lanzaron el aclamado Dookie. ​Con este nuevo álbum el grupo musical llevó el sonido de finales de la década de 1970 a la nueva generación, además, el álbum se convirtió en un éxito internacional y lleva vendidas más de treinta millones de copias en todo el mundo.
                </p>
                <p>
                    Green Day junto a otras bandas como The Offspring y Rancid, fueron los que produjeron el renacimiento y popularización del punk rock en los Estados Unidos, como de la cultura misma,​ las masivas ventas produjeron la apertura de una ola de grupos pop punk y punk rock. Diez años después muchos de esos conjuntos se encuentran inactivos o disueltos, mientras que Green Day sigue en plena vanguardia musical con las ópera rock American Idiot y 21st Century Breakdown de 2004 y 2009 respectivamente, ambas con un Premio Grammy al mejor álbum de rock. Editaron una trilogía de álbumes titulados ¡Uno!, ¡Dos! y ¡Tré!, editados en septiembre, noviembre y diciembre de 2012 respectivamente.​ Su álbum Revolution Radio salió a la venta el 7 de octubre de 2016. ​En febrero de 2020 sacan su último album titulado "Father of all..." con 10 temas producido por Butch Walker, editado por la discográfica Reprise.
                </p>
                <p>
                    El conjunto estadounidense ha vendido casi 90 millones de copias en todo el mundo​ y más de 25 millones solo en su país.​ En 2010 se estrenó una adaptación teatral del álbum American Idiot en Broadway, el musical fue nominado para Tony Awards, incluyendo Mejor Musical y Mejor Diseño Escénico, y ha recibido comentarios positivos en general. A mediados de 2011 la revista Kerrang! los nombró como el segundo grupo más influyente surgido en los últimos treinta años, solo por detrás de Metallica.​ Según una encuesta pública, en la publicación quincenal de Rolling Stone, se eligió a Green Day como el mejor conjunto de punk de la historia.​
                </p>
            </div>
            <div className="col-1"></div>
        </div>



*/
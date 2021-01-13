import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
//import contactoContext from '../../context/contacto/contactoContext';

const FormContacto = () => {
    
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 center">
                <div className="formulario bg-img">
                    <form
                        
                    >
                        <div className="contenedor-input">
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Nombre"
                                name="nombre"
                            />
                        </div>
                        <div className="contenedor-input">
                            <input
                                type="email"
                                className="input-text"
                                placeholder="Email"
                                name="nombre"
                            />
                        </div>
                        <div className="contenedor-input">
                            <input
                                type="submit"
                                className="btn btn-primario btn-submit btn-block"
                                
                            />
                        </div>
                    </form>

                </div>
                <div className="col-3"></div>
            </div>
        </div>


    );
}

export default FormContacto;
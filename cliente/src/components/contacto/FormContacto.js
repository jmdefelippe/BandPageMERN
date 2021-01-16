import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
//import contactoContext from '../../context/contacto/contactoContext';

const FormContacto = () => {
    
    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                    <form className="formulario bg-dark radius pd-15"
                    
                    >
                        <h1 className="center">Sumate a la lista de emails!</h1>
                        <div className="contenedor-input">
                            <label for="nombre" className="label-text">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                className="input-text"
                                placeholder="Nombre"
                                name="nombre"
                            />
                        </div>
                        <div className="contenedor-input">
                            <label for="email" className="label-text">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-text"
                                placeholder="Email"
                                name="nombre"
                            />
                        </div>
                        <div className="contenedor-input center">
                            <input
                                type="submit"
                                className="btn btn-primario btn-submit btn-block"
                                
                            />
                        </div>
                    </form>
            <div className="col-3"></div>
                


            </div>
        </div>


    );
}

export default FormContacto;
import React, { useContext, useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import contactoContext from '../../context/contactos/contactoContext';
import AlertaContext from '../../context/alertas/alertaContext';

const FormContacto = () => {
    
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    // obtener el state del formulario
    const contactosContext = useContext(contactoContext);
    const { mensaje, agregarContacto } = contactosContext;

    // en caso que sea un registro duplicado
    useEffect(() => {
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje]);


    // state para contacto
    const [contacto, guardarContacto] = useState({
        nombre: '',
        email: ''
    });

    // extraer nombre y email de contacto
    const { nombre, email } = contacto;

    // lee los contenidos del input
    const onChangeContacto = e => {
        guardarContacto({
            ...contacto,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario envia un contacto
    const onSubmitContacto = e => {
        e.preventDefault();

        // validar que no haya campos vacíos
        if (nombre.trim() === '' ||
            email.trim() === '') {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }


        // agregar al state
        agregarContacto(contacto);

        // reiniciar el form
        guardarContacto({
            nombre: '',
            email: ''
        })
    }

    return (
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
                    <form
                        className="formulario bg-dark radius pd-15"
                        onSubmit={onSubmitContacto}
                    >
                        <h1 className="center">Sumate a la lista de emails!</h1>
                        <div>
                            <label htmlFor="nombre" className="label-text">Nombre</label>
                            <input
                                className="input-text"
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={onChangeContacto}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="label-text">Email</label>
                            <input
                                className="input-text"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={onChangeContacto}
                            />
                        </div>
                        <div className="center">
                            <input
                                type="submit"
                                className="btn btn-primario btn-submit btn-block"
                                value="Enviar"
                            />
                        </div>
                    </form>
                    { alerta ? ( <div className="alerta"> {alerta.msg} </div> ): null }
            <div className="col-3"></div>
                
            </div>
        </div>


    );
}

export default FormContacto;
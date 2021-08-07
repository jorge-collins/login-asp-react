import React, { useState, useEffect } from "react";
// import md from "md5";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import axios from "axios";
import "../css/Login.css";

function Login(props) {
    //const baseUrl = "https://eventos.cibnor.mx/registro/WSapiRegistros/api/login";
    const baseUrl = "https://localhost:44335/api/login";
    const cookies = new Cookies();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const iniciarSesion = async () => {
        const data = JSON.stringify({
            Email: form.username,
            Password: form.password,
        });

        // Esta solucion si funciona
        const config = {
            method: "post",
            url: baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then((response) => {
                // Response completa con "data", "status", "headers", etc
                return response.data;
            })
            .then((response) => {
                // Response del API con "exito", "mensaje" y "data" 
                if (response.exito === 1) {
                    // Respuesta con "email" y "token" 
                    const respuesta = response.data;
                    cookies.set('email', respuesta.email, { path: '/' });
                    cookies.set('token', respuesta.token, { path: '/' });
                    // alert("Bienvenido");
                    props.history.push('./menu');
                } else {
                    alert(response.mensaje);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (cookies.get('email')) {
            props.history.push('./menu');
        }
    })

    return (
        <div className="containerPrincipal">
            <div className="containerLogin">
                <div className="form-group">
                    <label htmlFor="username">Usuario: </label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="password">Contraseña: </label>
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        name="password"
                        onChange={handleChange}
                    />
                    <br />
                    <button
                        className="btn btn-primary"
                        onClick={() => iniciarSesion()}
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;

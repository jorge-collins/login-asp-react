import React, { useState } from "react";
import md from "md5";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import axios from "axios";
import "../css/Login.css";

function Login(props) {
    const baseUrl =
        "https://eventos.cibnor.mx/registro/WSapiRegistros/api/login";
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
        // console.log(form);
    };

    const iniciarSesion = async () => {
        const data = JSON.stringify({
            Email: form.username,
            Password: form.password,
        });

        const config = {
            method: "post",
            url: baseUrl,
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer erobnerobg808354954qgnrvnaerv5gnq349gnrvfakvnvbjnthg854gh.erobnerobg808354954qgnrvnaerv5gnq349gnrvfakvnvbjnthg854gh.erobnerobg808354954qgnrvnaerv5gnq349gnrvfakvnvbjnthg854gh",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        /*         await axios
            .get(baseUrl + `/${form.username}/${md(form.password)}`)
            .then((response) => {
                return response.data;
            })
            .then((response) => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    console.log(respuesta);
                } else {
                    alert('Los datos de acceso no son correctos');
                }
            })
            .catch((error) => {
                console.log(error);
            }); */
    };

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

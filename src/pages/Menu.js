import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button";
import "../css/Menu.css";

function Menu(props) {
    const cookies = new Cookies();

    const cerrarSesion = () => {
        cookies.remove("email", { path: "/" });
        cookies.remove("token", { path: "/" });
        props.history.push("./");
    };

    // Si aun no se inicia sesion, ir al login(./)
    useEffect(() => {
        if (!cookies.get("email")) {
            props.history.push("./");
        }
    });

    return (
        <>
            <div className="containerMenu">
                <h4>Hola, {cookies.get("email")}</h4>
                <hr />
                <h5>Indicaciones generales:</h5>
                <p>
                    En la barra superior selecciona el listado de participantes
                    de tu interes.
                    <br />
                    <br />
                    Espera a que se cargue la información y a la derecha podras
                    acceder a las herramientas dependiendo el listado de
                    participantes.
                    <br />
                    <br />
                    Las acciones se describen a si mismas con sus iconos, o texto si es necesario.
                    
                </p>
                <br />
                <Button
                    onClick={() => {
                        cerrarSesion();
                    }}
                >
                    Cerrar sesión
                </Button>
            </div>
        </>
    );
}

export default Menu;

import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button'
import "../css/Menu.css";


function Menu(props) {
    const cookies = new Cookies();

    const cerrarSesion = () => {
        cookies.remove("email", { path: "/" });
        cookies.remove("token", { path: "/" });
        props.history.push("./");
    };

    useEffect(() => {
        if (!cookies.get("email")) {
            props.history.push("./");
        }
    });

    return (
        <>
            <div className="containerMenu">
                <h2>Hola, {cookies.get("email")}</h2>
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

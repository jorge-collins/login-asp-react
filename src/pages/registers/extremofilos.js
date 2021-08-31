import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import * as ReactBootstrap from "react-bootstrap";
import * as QueryServices from "../../services/QueryServices";

import "../../css/Register.css";

export default function Extremofilos(props) {
    const cookies = new Cookies();
    
    const [APIData, setAPIData] = useState([]);

    const loadTable = async () => {
        const { data } = await QueryServices.getRegisters(
            `/registro/WSapiRegistros/api/Microorganismos`
        );
        setAPIData(data);
        // console.log(data);
    };

    useEffect(() => {
        loadTable();
    }, []);

    // Si aun no se inicia sesion, ir al login(./)
    useEffect(() => {
        if (!cookies.get("email")) {
            props.history.push("./");
        }
    });

    return (
        <div className="containerTable">
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan="4">
                            <h3>Extremofilos</h3>
                        </th>
                    </tr>
                    <tr>
                        <th>Clave</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
                <tbody>
                    {APIData.data &&
                        APIData.data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.claveRegistro}</td>
                                <td>{item.nombres}</td>
                                <td>
                                    {item.apellido_Paterno}{" "}
                                    {item.apellido_Materno}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </ReactBootstrap.Table>
        </div>
    );
}

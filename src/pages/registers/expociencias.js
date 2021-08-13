import React, { useEffect, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import * as QueryServices from "../../services/QueryServices";

export default function Expociencias() {
    const [APIData, setAPIData] = useState([]);

    const loadTable = async () => {
        const { data } = await QueryServices.getRegisters(
            `/registro/WSapiRegistros/api/Expociencias`
        );
        setAPIData(data);
        // console.log(data);
    };

    useEffect(() => {
        loadTable();
    }, []);

    const replaceModalItem = (index) => {
        console.log("Id", index);
    }

    return (
        <>
            <div className="containerTable">

                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Expociencias</h2>
                        </div>
                        
                        <div className="col-sm-6">
                            <ReactBootstrap.Button href="#addModal" className="btn btn-success" data-toggle="modal">
                                <span>+ Agregar</span>
                            </ReactBootstrap.Button>
                        </div>

                    </div>
                </div>

                <ReactBootstrap.Table striped bordered hover>
                    <thead>

                        <tr>
                            <th>Clave</th>
                            <th>Nombre completo</th>
                            <th>Correo</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {APIData.data &&
                            APIData.data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.claveRegistro}</td>
                                    <td>{item.nombreEst1}</td>
                                    <td>{item.correoEst1}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                            onClick={ () => replaceModalItem(item.id) }
                                        >
                                            Detalles
                                        </button>
                                    </td>
                                    <td>
                                        <ReactBootstrap.Button variant="outline-danger">
                                            Eliminar
                                        </ReactBootstrap.Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </ReactBootstrap.Table>
            </div>
        </>
    );
}

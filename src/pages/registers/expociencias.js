import React, { useEffect, useState, useContext } from "react";
import Cookies from "universal-cookie";
import { Button, Table, Modal } from "react-bootstrap";
// import AddFormComp from "../../components/AddFormComp";
import EditFormComp from "../../components/EditFormComp";
import FormatISOFormComp from "../../components/FormatISOFormComp";
import * as QueryServices from "../../services/QueryServices";
import { ExpocienciasContext } from "../../contexts/ExpocienciasContext";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

export default function Expociencias(props) {
    const cookies = new Cookies();

    const { eliminarParticipante } = useContext(ExpocienciasContext);

    const [APIData, setAPIData] = useState([]);

    // for Add dialog
    // const [show, setShow] = useState(false);
    // const handleShow = () => setShow(true);
    // const handleClose = () => setShow(false);

    // for update dialog
    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showFormatoISO, setShowFormatoISO] = useState(false);

    const [currentItem, setCurrentItem] = useState([]);

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

    // Si aun no se inicia sesion, ir al login(./)
    useEffect(() => {
        if (!cookies.get("email")) {
            props.history.push("./");
        }
    });
    

    const handleShowEdit = (item) => {
        setCurrentItem(item);
        // console.log(item);
        setShowEdit(true);
    };

    const handleCloseEdit = () => setShowEdit(false);

    const handleShowDeleteDialog = (item) => {
        setCurrentItem(item);
        setShowDeleteDialog(true);
    };
    const handleCloseDeleteDialog = () => setShowDeleteDialog(false);

    const handleDeleteConfirm = async () => {
        await eliminarParticipante(currentItem.id);
        await loadTable();
        handleCloseDeleteDialog();
    };

    const handleShowFormatoISO = (item) => {
        // console.log("onClick", item)
        setCurrentItem(item);
        setShowFormatoISO(true);
    };
    const handleCloseFormatoISO = () => setShowFormatoISO(false);

    return (
        <>
            <div className="containerTable">
                <Table striped bordered hover>
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
                                        <Button
                                            onClick={() =>
                                                handleShowFormatoISO(item)
                                            }
                                            size="sm"
                                            variant="outline-secondary"
                                            tooltip="Editar"
                                        >
                                            Formato ISO
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => handleShowEdit(item)}
                                            size="sm"
                                            variant="outline-primary"
                                            tooltip="Editar"
                                        >
                                            <AiOutlineEdit />
                                        </Button>{" "}
                                        <Button
                                            onClick={() =>
                                                handleShowDeleteDialog(item)
                                            }
                                            size="sm"
                                            variant="outline-danger"
                                        >
                                            <AiOutlineDelete />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal para el formato */}
            <Modal
                size="lg"
                show={showFormatoISO}
                onHide={handleCloseFormatoISO}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Formato ISO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormatISOFormComp item={currentItem} />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-danger"
                        onClick={handleCloseFormatoISO}
                    >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de actualizar participante */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header>
                    <Modal.Title>Actualizar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditFormComp item={currentItem} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal de agregar participante */}
            {/*             <Modal show={ show } onHide={ handleClose }>
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddFormComp />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal> */}

            {/* Modal de eliminar participante */}
            <Modal show={showDeleteDialog} onHide={handleCloseDeleteDialog}>
                <Modal.Header>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        ¿Eliminar el registro? Esta acción no se puede deshacer.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="outline-secondary"
                        onClick={handleCloseDeleteDialog}
                    >
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

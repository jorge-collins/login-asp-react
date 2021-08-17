 import React, { useEffect, useState, useContext } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import AddFormComp from "../../components/AddFormComp";
import * as QueryServices from "../../services/QueryServices";
import { ExpocienciasContext } from '../../contexts/ExpocienciasContext';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

export default function Expociencias() {

    const { eliminarParticipante } = useContext(ExpocienciasContext);

    const [APIData, setAPIData] = useState([]);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleShowDeleteDialog = (item) => {
        console.log(item.id);
        setItemId(item.id);
        setShowDeleteDialog(true);
    };
    const handleCloseDeleteDialog = () => setShowDeleteDialog(false);

    const [itemId, setItemId] = useState('');    

    const handleDeleteConfirm = () => {
        // console.log("id", itemId);
        eliminarParticipante(itemId);
        loadTable();
        handleCloseDeleteDialog();
    }

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
                                            className="btn btn-primary"
                                            data-target="#exampleModal"
                                            data-toggle="modal"
                                            onClick={ handleShow }
                                            size="sm"
                                        >
                                        <AiOutlineEdit tooltip="Editar" />
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => handleShowDeleteDialog(item) }
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

            {/* Modal de agregar participante */}
            <Modal show={show} onHide={handleClose}>
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
            </Modal>

            {/* Modal de eliminar participante */}
            <Modal show={ showDeleteDialog } onHide={ handleCloseDeleteDialog }>
                <Modal.Header>
                    <Modal.Title>Confirmación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>¿Eliminar el registro? Esta acción no se puede deshacer.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={ handleCloseDeleteDialog }>Cancelar</Button>
                    <Button variant="danger" onClick={ handleDeleteConfirm }>Eliminar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

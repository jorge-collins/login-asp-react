import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/Form.css";

import { ExpocienciasContext } from "../contexts/ExpocienciasContext";

const EditFormComp = ({ item }) => {
    console.log(item);
    const { actualizarParticipante } = useContext(ExpocienciasContext);

    const [itemForUpdate, setItemForUpdate] = useState(item);

    const onInputChange = ({ target }) => {
        setItemForUpdate({
            ...itemForUpdate,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(itemForUpdate);
        await actualizarParticipante(itemForUpdate);
        alert("Registro actualizado.");
        window.location.reload();
    };

    // Campos a omitir
    const skip = {
        id: "",
        comprobantePago: "",
        comprobanteFecha: "",
        registroFecha: "",
        facturaCargada: "",
    };

    return (
        <Form onSubmit={handleSubmit}>
            {Object.keys(itemForUpdate).map(
                (dato) =>
                    !(dato in skip) && (
                        <Form.Group key={dato}>
                            <Form.Control
                                name={dato}
                                onChange={onInputChange}
                                placeholder={dato}
                                type="text"
                                value={
                                    itemForUpdate[dato] != null
                                        ? itemForUpdate[dato]
                                        : ""
                                }
                            />
                        </Form.Group>
                    )
            )}

            <Button type="submit" variant="success" block>
                Guardar cambios
            </Button>
        </Form>
    );
};

export default EditFormComp;

import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import '../css/Form.css';

import { ExpocienciasContext } from '../contexts/ExpocienciasContext';

const AddFormComp = () => {
    
    const { agregarParticipante } = useContext(ExpocienciasContext);

    const initialState = {
        nombreEst1: "",
        correoEst1: "",
        telefonoEst1: "",
        comentarios: "",
    };
    const [newParticipant, setNewParticipant] = useState(initialState);
    const { nombreEst1, correoEst1, telefonoEst1, comentarios } = newParticipant;

    const onInputChange = ({ target }) => {
        setNewParticipant({
            ...newParticipant,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(newParticipant);
        agregarParticipante(newParticipant)
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group>
                <Form.Control
                    name="nombreEst1" 
                    onChange={ onInputChange }
                    placeholder="Nombre completo"
                    required
                    type="text"
                    value={ nombreEst1 }
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="correoEst1" 
                    onChange={ onInputChange }
                    placeholder="Correo electrónico"
                    required
                    type="text"
                    value={ correoEst1 }
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="telefonoEst1"
                    onChange={ onInputChange }
                    placeholder="Telefono"
                    type="text"
                    value={ telefonoEst1 }
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    name="comentarios" 
                    onChange={ onInputChange }
                    placeholder="Comentarios"
                    rows={3}
                    value={ comentarios }
                />
            </Form.Group>

            <Button type="submit" variant="success" block>
                Add New
            </Button>
        </Form>
    );
}

export default AddFormComp;

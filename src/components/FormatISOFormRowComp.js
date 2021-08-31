import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const FormatISOFormRowComp = (props) => {
    return (
    <>
        <Form.Group as={Row}>
            <Form.Label column sm={4}>
                {props.rowLabel}
            </Form.Label>
            <Col sm={8}>
                <Form.Control
                    name={props.ctrlName}
                    onChange={props.onInputChange}
                    placeholder={props.ctrlPlaceholder}
                    type="text"
                    value={props.ctrlValue != null ? props.ctrlValue : ''}
                />
            </Col>
        </Form.Group>
     
    </>);
};

import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { FormatISOFormRowComp } from "./FormatISOFormRowComp";
import { Invoice } from './Invoice/Invoice';
import "../css/Form.css";

const FormatISOFormComp = ({ item }) => {
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
        setShow(true);
        // alert("Formato descargado con éxito.");
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    return (
        <Form onSubmit={handleSubmit}>
            <Button type="submit" variant="primary" block>
                Previsualizar PDF
            </Button>
            <hr />
            <h5 className="d-flex flex-column align-items-center">
                Datos del cliente
            </h5>
            <div>
                <FormatISOFormRowComp
                    rowLabel="RFC"
                    ctrlName="facturaRFC"
                    ctrlPlaceholder="Registro Federal de Causantes"
                    ctrlValue={itemForUpdate.facturaRFC}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Codigo postal"
                    ctrlName="facturaCP"
                    ctrlPlaceholder="C.P."
                    ctrlValue={itemForUpdate.facturaCP}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Correo electrónico"
                    ctrlName="correoEst1"
                    ctrlPlaceholder="Correo"
                    ctrlValue={itemForUpdate.correoEst1}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Correo del evento"
                    ctrlName="caja_correoEvento"
                    ctrlPlaceholder="Correo del evento"
                    ctrlValue={itemForUpdate.caja_correoEvento}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Proyecto"
                    ctrlName="caja_proyecto"
                    ctrlPlaceholder="Proyecto"
                    ctrlValue={itemForUpdate.caja_proyecto}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Tipo de factura"
                    ctrlName="caja_tipoFactura"
                    ctrlPlaceholder="Tipo de factura"
                    ctrlValue={itemForUpdate.caja_tipoFactura}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Desglose"
                    ctrlName="caja_desglose"
                    ctrlPlaceholder="Desglose del bien o servicio"
                    ctrlValue={itemForUpdate.caja_desglose}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Forma de pago"
                    ctrlName="caja_formaPago"
                    ctrlPlaceholder="Forma de pago"
                    ctrlValue={itemForUpdate.caja_formaPago}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Numero de registro"
                    ctrlName="caja_numeroRegistro"
                    ctrlPlaceholder="Numero de registro"
                    ctrlValue={itemForUpdate.caja_numeroRegistro}
                    onInputChange={onInputChange}
                />
            <hr />
            </div>
            <h5 className="d-flex flex-column align-items-center">
                Datos bancarios
            </h5>
            <div>
                <FormatISOFormRowComp
                    rowLabel="Clave"
                    ctrlName="caja_claveProductoServicio"
                    ctrlPlaceholder="Clave del producto o servicio"
                    ctrlValue={itemForUpdate.caja_claveProductoServicio}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Moneda"
                    ctrlName="caja_moneda"
                    ctrlPlaceholder="Moneda"
                    ctrlValue={itemForUpdate.caja_moneda}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Uso del CFDI"
                    ctrlName="facturaUsoCFDI"
                    ctrlPlaceholder="CFDI"
                    ctrlValue={itemForUpdate.facturaUsoCFDI}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Cantidad"
                    ctrlName="caja_cantidadMercancias"
                    ctrlPlaceholder="Cantidad de mercancias o servicios a facturar"
                    ctrlValue={itemForUpdate.caja_cantidadMercancias}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Unidad"
                    ctrlName="caja_unidad"
                    ctrlPlaceholder="Unidad"
                    ctrlValue={itemForUpdate.caja_unidad}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Clave de la unidad"
                    ctrlName="caja_claveUnidad"
                    ctrlPlaceholder="Clave de la unidad"
                    ctrlValue={itemForUpdate.caja_claveUnidad}
                    onInputChange={onInputChange}
                />
                <FormatISOFormRowComp
                    rowLabel="Total"
                    ctrlName="caja_total"
                    ctrlPlaceholder="Total"
                    ctrlValue={itemForUpdate.caja_total}
                    onInputChange={onInputChange}
                />
            </div>
            
            <Modal
                show={show}
                onHide={handleClose}
                size="xl"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <Invoice data={itemForUpdate} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </Form>
    );
};

export default FormatISOFormComp;

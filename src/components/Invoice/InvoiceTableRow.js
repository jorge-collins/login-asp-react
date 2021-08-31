import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        alignItems: "center",
        height: 24,
        fontStyle: "bold",
    },
    description: {
        width: "30%",
        textAlign: "left",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
        paddingTop: 4,
    },
    qty: {
        width: "70%",
        textAlign: "left",
        paddingLeft: 8,
        paddingTop: 4,
    },
});

const skip = {
    id: "",
    sexo: "",
    edad: "",
    institucion: "",
    domicilio: "",
    municipio: "",
    tallaEst1: "",
    numeroEst: "",
    nombreEst2: "",
    correoEst2: "",
    tallaEst2: "",
    nombreEst3: "",
    correoEst3: "",
    tallaEst3: "",
    nombreAsesor: "",
    correoAsesor: "",
    telefonoAsesor: "",
    tallaAsesor: "",
    proyecto: "",
    categoria: "",
    area: "",
    comentarios: "", 
    claveRegistro: "",
    comprobantePago: "",
    comprobanteFecha: "",
    registroFecha: "",
    facturaCargada: "",
};

const InvoiceTableRow = ({ data }) => {
    const rows = Object.keys(data).map((item) => 
        !(item in skip) && (
        <View style={styles.row} key={item}>
            <Text style={styles.description}>{item}</Text>
            <Text style={styles.qty}>{data[item]}</Text>
        </View>
    ));
    return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;

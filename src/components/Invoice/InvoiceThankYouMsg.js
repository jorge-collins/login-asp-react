import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        marginTop: 12,
        width: "100%",
    },
    reportTitle: {
        fontSize: 11,
        textAlign: "left",
    },
});

const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>
            NOTA: En descripcion se encuentra la información que indica que debe
            registrarse en la columna de datos correspondientes, por lo que
            deber sustituirse esta información de instrucción.
        </Text>
    </View>
);

export default InvoiceThankYouMsg;

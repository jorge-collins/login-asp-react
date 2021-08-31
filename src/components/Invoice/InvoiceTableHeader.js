import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderTopColor: borderColor,
        borderBottomColor: borderColor,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 2,
        alignItems: "center",
        height: 22,
        textAlign: "center",
        flexGrow: 1,
        paddingTop: 0,
    },
    description: {
        width: "34%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingTop: 4,
        paddingLeft: 4,
        // backgroundColor:'green',
    },
    qty: {
        width: "66%",
        paddingTop: 4,
        paddingLeft: 4,
    },
});

const InvoiceTableHeader = (props) => (
    <View style={[styles.container, { textAlign: props.textAlign }]}>
        <Text style={styles.description}>{props.column1}</Text>
        <Text style={styles.qty}>{props.column2}</Text>
    </View>
);

export default InvoiceTableHeader;

import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "black";
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        alignItems: "center",
        height: 22,
        fontStyle: "bold",
    },
    description: {
        width: "34%",
        textAlign: "left",
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
        paddingTop: 4,
    },
    qty: {
        width: "66%",
        textAlign: "left",
        paddingLeft: 8,
        paddingTop: 4,
    },
});


const InvoiceTableRowUnique = (props) => {

    const rows =  
       (
        <View style={styles.row}>
            <Text style={styles.description}>{props.name}</Text>
            <Text style={styles.qty}>{props.value}</Text>
        </View>
    );
    return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRowUnique;

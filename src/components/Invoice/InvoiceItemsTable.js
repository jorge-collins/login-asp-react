import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableRowUnique from './InvoiceTableRowUnique';
// import InvoiceTableFooter from './InvoiceTableFooter'

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'black',
    },
});

const InvoiceItemsTable = ({data}) => (

    <View style={styles.tableContainer}>

        <InvoiceTableHeader column1={'DATOS'} column2={'DESCRIPCIÓN'} />

        <InvoiceTableHeader column1={'Datos del cliente'} column2={''} textAlign={'left'} />
        <InvoiceTableRowUnique name={'RFC'} value={data.facturaRFC} />
        <InvoiceTableRowUnique name={'Correo electrónico 1'} value={data.correoEst1} />
        <InvoiceTableHeader column1={'Datos bancarios'} column2={''} textAlign={'left'} />
        <InvoiceTableRowUnique name={'Clave del producto o servicio'} value={data.caja_claveProductoServicio} />
        <InvoiceTableBlankSpace rowsCount={ 14 } />
        {/* <InvoiceTableFooter items={invoice.items} /> */}
    </View>
  );
  
  export default InvoiceItemsTable
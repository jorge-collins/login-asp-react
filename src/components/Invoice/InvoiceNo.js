import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'flex-end',
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'gray'
    },
    invoiceDate: {
            fontStyle: 'bold',
            textAlign: 'center',
            width: 100
    },
    label: {
        width: 'auto'
    }
    
  });


  const InvoiceNo = ({data}) => (
        <Fragment>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Folio de solicitud de factura:</Text>
                <Text style={styles.invoiceDate}>{data.id}</Text>
            </View >
        </Fragment>
  );
  
  export default InvoiceNo
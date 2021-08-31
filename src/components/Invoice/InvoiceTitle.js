import React from 'react';
import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        // flexDirection: 'row',
        marginTop: 6,
        alignItems: 'center'
    },
    reportTitle:{
        color: 'gray',
        fontSize: 11,
        fontWeight: 900,
        textAlign: 'center',
        textTransform: 'uppercase',
        border: '2 solid gray',
        paddingTop: 6,
        width: '80%'
    }
  });


  const InvoiceTitle = ({title}) => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
  );
  
  export default InvoiceTitle;
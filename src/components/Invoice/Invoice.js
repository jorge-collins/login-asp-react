import React from "react";
import {
    Document,
    Image,
    Page,
    // PDFDownloadLink,
    PDFViewer,
    StyleSheet
    
} from "@react-pdf/renderer";
import HeaderImage from "../../assets/header-cib.png";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";

// import { Button } from "react-bootstrap";


export const Invoice = (props) => {
    // console.log(props.data);
    const { data } = props;
    // console.log(data);
    
    const styles = StyleSheet.create({
        page: {
            fontFamily: "Helvetica",
            fontSize: 10,
            paddingTop: 0,
            paddingLeft: 60,
            paddingRight: 60,
            lineHeight: 1.4,
            flexDirection: "column",
        },
        logo: {
            width: 74,
            height: 66,
            marginLeft: "auto",
            marginRight: "auto",
        },
    });
    
    const PDF = () => (
        <Document>
            <Page size="Letter" style={styles.page}>
                <Image src={HeaderImage} alt="header" />
                <InvoiceTitle title="Solicitud de factura" />
                <InvoiceNo data={data} />
                <InvoiceItemsTable data={data} />
                <InvoiceThankYouMsg />
            </Page>
        </Document>
    );
    
/*     const handleGuardarPDF = () => {
        alert("Archivo guardado éxitosamente.");
    }; */

    return (
        <div className="d-flex flex-column align-items-center">
            {/* <p>
            <Button variant="primary" onClick={handleGuardarPDF}>
                Guardar
            </Button>
            </p> */}
            <PDFViewer width="900px" height="830px">
                <PDF />
            </PDFViewer>
            {/* <PDFDownloadLink document={<PDF />}>
                {({ loading }) => (loading ? "Loading" : "Download")}
            </PDFDownloadLink> */}
        </div>
    );
};

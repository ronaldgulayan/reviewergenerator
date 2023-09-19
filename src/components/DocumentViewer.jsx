import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import PDFDocument from "./PDFDocument";

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});

function DocumentViewer({ title, data }) {
  return (
    <PDFViewer showToolbar={false} style={styles.viewer}>
      <PDFDocument title={title} data={data} />
    </PDFViewer>
  );
}

export default DocumentViewer;

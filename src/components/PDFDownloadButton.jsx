import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFDocument from "./PDFDocument";

function PDFDownloadButton({ className, label, title, data }) {
  return (
    <PDFDownloadLink
      document={<PDFDocument title={title} data={data} />}
      className={className}
      fileName='pdfgenerator.pdf'
    >
      {label}
    </PDFDownloadLink>
  );
}

export default PDFDownloadButton;

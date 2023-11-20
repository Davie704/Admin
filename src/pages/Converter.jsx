import React, { useState } from "react";
import { Document, Page, Text, View, PDFViewer } from "@react-pdf/renderer";

const Converter = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [pdfGenerated, setPdfGenerated] = useState(false);

  const handleConvertToPdf = () => {
    setPdfGenerated(true);
  };

  return (
    <div>
      <h1>HTML to PDF Converter</h1>
      <button onClick={handleConvertToPdf}>Convert to PDF</button>
      <div style={{ display: pdfGenerated ? "block" : "none" }}>
        <PDFViewer width="500" height="500">
          <Document>
            <Page size="A4">
              <View style={{ padding: 10 }}>
                <Text>{htmlContent}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
      <textarea
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
        placeholder="Enter HTML content here"
        rows="10"
        cols="40"
      />
    </div>
  );
};

export default Converter;

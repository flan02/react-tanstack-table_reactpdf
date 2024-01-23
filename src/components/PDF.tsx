/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PDFViewer, Document, Text, Page, Image, StyleSheet, View } from "@react-pdf/renderer";
import { Svg, G, ClipPath } from "../patches/@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { backgroundColor: "tomato", width: "1910px" },
  section: { color: "white", textAlign: "center", margin: 30 },
  document: { width: "1910px" },
  pdfviewer: { width: "1910px" },
});

function PDF() {
  return (
    <>
      <PDFViewer style={styles.pdfviewer}>
        <Document style={styles.document}>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>
                Hello World !
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default PDF;

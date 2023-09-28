import {
  Document,
  Page,
  Text,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import React, { useState } from "react";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },
  ttext: {
    margin: 2,
    marginLeft: 30,
    fontSize: 12,
  },
  title: {
    margin: 5,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: 700,
  },
  title1: {
    margin: 5,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 15,
    fontSize: 14,
    fontWeight: 700,
  },
  Date: {
    fontSize: 11,
    textAlign: "right",
    marginRight: 10,
    marginBottom: 10,
  },
  p1: {
    marginTop: 5,

    marginLeft: 30,
    marginRight: 30,
    fontSize: 12,
    lineHeight: 1.5,
  },
  image: {
    width: "30%",
  },
  ending: {
    fontSize: 11,
    marginTop: 5,
    
    marginLeft: 30,
    marginRight: 30,
  },
});

const PDFComponent = ({ Date, adressJob, Soknad, p, p1, p2, p3, p4, p5 }) => {
  const [showPDF, setShowPDF] = useState(false);

  const handleGeneratePDF = () => {
    setShowPDF(true);
  };
  return (
    <div>
      <button className="btn btn-success m-4"  onClick={handleGeneratePDF}>Generate PDF then Download </button>
      {showPDF && (
        <div>
          {/* here the pdf viewer to see in the page what happen
           this is should be one to one with the download file
        
          */}
          <PDFViewer width="100%" height="500">
            <Document>
            <Page size="A4" style={styles.page}>
                  <Text style={styles.title}>Lena Cohen       </Text>
                  <Text style={styles.ttext}>Spiksetsvingen 159  </Text>
                  <Text style={styles.ttext}>2100 Skarnes     </Text>
                  <Text style={styles.ttext}>E-post: Lcohenabir82@gmail.com</Text>
                  <Text style={styles.ttext}>{adressJob}      </Text>
                  <Text dir="rtl" style={styles.Date}>{Date}           </Text>
                  <Text style={styles.title}>{Soknad}         </Text>
                  <Text style={styles.p1}>{p}              </Text>
                  <Text style={styles.p1}>{p1}             </Text>
                  <Text style={styles.p1}>{p2}             </Text>
                  <Text style={styles.p1}>{p3}             </Text>
                  <Text style={styles.p1}>{p4}             </Text>
                  <Text style={styles.p1}>{p5}             </Text>
                  <Text style={styles.ending}>Vennlig hilsen.      </Text>
                  <Image
                    src={
                      "https://res.cloudinary.com/ddcbxytoh/image/upload/v1695657527/sign_x5wrsw.png"
                    }
                    style={styles.image}
                  />
                  <Text style={styles.ending}>Lena Cohen</Text>
                </Page>
            </Document>
          </PDFViewer>

          {/* here the download file  */}
          <PDFDownloadLink className="btn btn-success m-4"
            document={
              <Document>
                <Page size="A4" style={styles.page}>
                  <Text style={styles.title}>          Lena Cohen       </Text>
                  <Text style={styles.ttext}>       Spiksetsvingen 159  </Text>
                  <Text style={styles.ttext}>          2100 Skarnes     </Text>
                  <Text style={styles.ttext}>E-post: Lcohenabir82@gmail.com</Text>
                  <Text style={styles.ttext}>          {adressJob}      </Text>
                  <Text dir="rtl" style={styles.Date}> {Date}           </Text>
                  <Text style={styles.title}>          {Soknad}         </Text>
                  <Text style={styles.p1}>             {p}              </Text>
                  <Text style={styles.p1}>             {p1}             </Text>
                  <Text style={styles.p1}>             {p2}             </Text>
                  <Text style={styles.p1}>             {p3}             </Text>
                  <Text style={styles.p1}>             {p4}             </Text>
                  <Text style={styles.p1}>             {p5}             </Text>
                  <Text style={styles.ending}>     Vennlig hilsen.      </Text>
                  <Image
                    src={
                      "https://res.cloudinary.com/ddcbxytoh/image/upload/v1695657527/sign_x5wrsw.png"
                    }
                    style={styles.image}
                  />
                  <Text style={styles.ending}>Lena Cohen</Text>
                </Page>
              </Document>
            }
            fileName="Søknad.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default PDFComponent;

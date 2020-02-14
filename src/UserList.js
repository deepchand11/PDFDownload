import React, { useState, useEffect } from "react";
import Axios from "axios";
import { PDFDownloadLink, Font } from "@react-pdf/renderer";
import { PdfDocument } from "./UserCard";

Font.register( {
  family: 'Lato Bold',
  src: `font/Lato-Bold.ttf`,
});

export default function UserList() {
  const [userDetails, setDetails] = useState([]);
  const [show, setHide] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response =  await Axios(
        `https://jsonplaceholder.typicode.com/users`
      );
      setDetails(response.data);
      setHide(true)
    }
    fetchData();
  }, []);
  

  return (
    <div className="container">
      <h2>Generate User card Details</h2>
      {show ? (
        <PDFDownloadLink
          document={<PdfDocument data={userDetails} />}
          fileName="userlist.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            fontWeight: "bold",
            backgroundColor: "#ddd",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : `Download Pdf (${Math.round(blob.size/1000)}KB)`
          }
        </PDFDownloadLink>
      ) : <button disabled style={{
        textDecoration: "none",
        padding: "10px",
        color: "#4a4a4a",
        backgroundColor: "#f2f2f2",
        border: "1px solid #ccc"
      }}>Download Pdf</button>
      }
    </div>
  );
}
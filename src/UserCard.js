import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import styles from './styles';


export function PdfDocument(props) {
  console.log("pdf props", props);

  return (
    <Document>
      <Page size={[595, 842]} style={styles.page} wrap>
      <View  style={styles.userContainer}>  
        {props.data.map((user, index) => {
              return (
                <View key={index} style={[styles.block]} wrap={false}>
                  <View style={styles.card} wrap={false}>
                  <Image source="smile.png" style={styles.smiley} />
                    <View style={styles.topBar}>
                      <Text style={styles.title}>{user.company.name}</Text>
                    </View> 
                  </View>
                </View>
                );
            })}
        </View>
       
      </Page>
    </Document>
  );
}

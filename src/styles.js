import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
      padding: 10
    },
    section: {
      margin: 10,
      padding: 10,
  
    },
    userContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
    },
    block: {
      display: "flex",
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: 'gray',
      borderStyle: 'dotted',
    },
    card: {
      borderWidth: 1,
      borderColor: '#6bc8f3',
      borderStyle: 'solid',
      borderRadius: 10,
      width: "95%",
      height: 142,
      padding: 10,
      marginTop:10,
      marginBottom:10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    smiley: {
        height: 20,
        width: 25,
        position: "absolute",
        top: "-8",
        right: "50%"
    },
    topBar: {
        backgroundColor: "#c1e6fa",
        borderRadius: 5,
        marginTop: 8,
        padding: 5
    },
    title: { fontSize: 14, textAlign: "center", fontFamily: 'Lato Bold', color: "#166993" },
    subtitle: { fontSize: 12, textAlign: "center", marginTop: 3 },
    content: { fontSize: 24, textAlign: "center" },
    email: { fontSize: 12 },
    footer: { display: "flex", justifyContent: "space-between", fontSize: 9 }
  });
export default styles;
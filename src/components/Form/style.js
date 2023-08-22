import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom:0,
        backgroundColor: "rgb(173,216,230)",
        alignItems: "center",
        
        borderRadius: 30,
        marginTop: 30,

    },
    form:{
        width:"100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color:"rgb(	25,25,112)",
        fontSize: 18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius: 30,
        backgroundColor:"rgb(230,230,250)",
        height: 40,
        margin: 12,
        padding: 10,
        
    },
    ButtonEntrar:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"rgb(	102,205,170)",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 12,
        margin: 30,
    },
    textButtonEntrar:{
        fontSize: 20,
        color: "rgb(85,107,47)",
       
    },
    textCadastre: {
        marginTop: "0.1%",
        color: "rgb(25,25,112)",
        fontSize: 20,
        alignItems:"center",
        textAlign: "center",
        padding: 1,
    
    },
    ButtonRegistro:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"rgb(	102,205,170)",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonRegistro:{
        fontSize: 20,
        color: "rgb(85,107,47)",
    },
});

export default styles
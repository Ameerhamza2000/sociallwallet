import React from "react";
import { StyleSheet,Text,TouchableOpacity } from "react-native";
import { windowHeight,windowWidth } from "../utils/Dimensions";

const FormButton=({buttonTitle,...rest})=>{
    return (
       <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
       </TouchableOpacity>
    )
}

export default FormButton;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 16,
        width: windowWidth / 1.1,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        // fontFamily: 'Lato-Regular',
      },
});
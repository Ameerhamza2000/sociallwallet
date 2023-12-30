import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import FormInput from "../conponents/FormInput";
import FormButton from "../conponents/FormButton";
import SocialButton from "../conponents/SocialButton";

const ForgotScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
             <Image source={require("../../assets/signin-logo1.png")} style={styles.logo} />
            <Text style={styles.text} >Reset Password</Text>

            <FormInput labelValue={email} placeholderText="Email" iconType="user"
                onChangeText={(userEmail) => setEmail(userEmail)} />


            <FormButton buttonTitle="Send Code" onPress={() => alert("Email does not exist!")} />


            <TouchableOpacity style={styles.haveAccountButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}> Back to Login !</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:'#e9bebc'
    },

    text: {

        fontSize: 28,
        marginBottom: 10,
        color: '#D05C57',
    },
    navButton: {
        marginTop: 15,
    },
    haveAccountButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        // fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius:50,
      }
});
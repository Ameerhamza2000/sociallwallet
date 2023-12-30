import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import FormInput from "../conponents/FormInput";
import FormButton from "../conponents/FormButton";
import SocialButton from "../conponents/SocialButton";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>

            <Text style={styles.text} >Create an account</Text>

            <FormInput labelValue={email} placeholderText="Email" iconType="user"
                onChangeText={(userEmail) => setEmail(userEmail)} />

            <FormInput labelValue={password} placeholderText="Password" iconType="lock" secureTextEntry={true}
                onChangeText={(userPassword) => setPassword(userPassword)} />

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton buttonTitle="Sign Up" onPress={() => navigation.navigate("Whole")} />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Terms of service
                    </Text>
                </TouchableOpacity>

                <Text style={styles.color_textPrivate}> and </Text>

                <TouchableOpacity onPress={() => alert('Privacy Policy!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.haveAccountButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Already Have Account?Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

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
});
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import FormInput from "../conponents/FormInput";
import FormButton from "../conponents/FormButton";
import SocialButton from "../conponents/SocialButton";
import axios from "axios";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";



const ForgotScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const[activity,setActivity]=useState(false);

    const Timer=()=>{
        const timer=setTimeout(() => {
          navigation.navigate("Login");
        },2000);
        return ()=>{clearTimeout(timer)}
      }
    
    
    const SendEmail=()=>{
        const axiosInstance=axios.create({
            baseURL:'http://192.168.80.150:5000',
            headers:{
              'Content-Type':'application/json'
            },
          });
          setActivity(true);
          axiosInstance.post("/forgotpassword",{email})
          .then(response=>{

            console.log(response);
            if(response.data.message==="Temporary password sent successfully"){
                setActivity(false)
                Alert.alert("Success","Email Sent ")
                Timer();
                
            }
            else if(response.data.message==="No user exist with this email"){
                Alert.alert("Failure","No User Registered With This Email")
            }
            else if(response.data.message==='Failed to send !'){
                Alert.alert("Failure","Couldn't Send Email")

            }
            
          })
          .catch(error=>{
            console.log(error);
            Alert.alert("User Account Doesnt Exist","SignUp First")
          })
    }



    return (
        <View style={styles.container}>
             <Image source={require("../../assets/signin-logo1.png")} style={styles.logo} />
            <Text style={styles.text} >Reset Password</Text>

            <FormInput labelValue={email} placeholderText="Email" iconType="user"
                onChangeText={(userEmail) => setEmail(userEmail)} />
                {activity? <ActivityIndicator size="large" color='#0000ff'/> : null}


            <FormButton buttonTitle="Send Code" onPress={SendEmail} />


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
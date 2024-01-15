import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, Image } from "react-native";
import FormInput from "../conponents/FormInput";
import FormButton from "../conponents/FormButton";
import SocialButton from "../conponents/SocialButton";
import axios from "axios";
import { Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [name, setUserName] = useState();
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const [nameError,setNameError]=useState('');
    const [errorDisplay,setErrorDisplay]=useState(false);
    const [confirmpasswordError,setConfirmPasswordError]=useState('');
    const[matchError,setMatchError]=useState('');


    const Timer=()=>{
        const timer=setTimeout(() => {
          navigation.navigate("Login");
        },2000);
        return ()=>{clearTimeout(timer)}
      }
    

    const Register=()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
          setEmailError('');
        } else {
          setEmailError("Please Enter a Valid Email");
          
          }   
            if(!name || !password || !email ||!confirmPassword){
                Alert.alert("Fill The Complete Form");
                return
            }
            if(name.length <=4  && password.length >7){
              setNameError("Username Must Have Atleast 5 characters")
              setPasswordError("")
              return;
            }
            if(password.length <=7 && name.length >4){
              setPasswordError("Please Enter a Strng Password")
              setNameError("");
              return;
            }
            if(password.length <=7 && name.length <=4){
              setNameError("Username Must Have Atleast 5 characters")
              setPasswordError("Please Enter a Strng Password")    
              return;
            }
            if(password.length <=7){
              setPasswordError("Please Enter a Strng Password")          
              return;
            }
            

            if(confirmPassword!=password){
                setMatchError("Password Doesn't Match");
                return;
            }
         
            setErrorDisplay(true)
            
       
         const axiosInstance=axios.create({
          baseURL:'http://192.168.80.150:5000',
          headers:{
            'Content-Type':'application/json'
          },
         });
        axiosInstance.post("/signup",{email,name,password})
        .then(response=>{
          console.log(response);
          if (response.data.success ===true){
            // Alert.alert("Succes","User Registered Successfuly")
            console.log("success");
            Alert.alert("Success","Account Created")
            Timer();
            
          }
          else if(response.data.error ==="User Already Exists") {
            //  Alert.alert("Validation Error","Enter Correct Details");
            Alert.alert("Account Already Exists With this Email")
            console.log("User Already Exists")
          }
          else{
            console.log("Failure");
            Alert.alert("Failed to Resgister this account")
          }
        })
        .catch(error=>{
          console.log(error);
        })
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text} >Create an account</Text>

            <FormInput labelValue={name} placeholderText="Full name" iconType="user"
            onChangeText={(userName) => setUserName(userName)} />
            {!errorDisplay? <Text>{nameError}</Text>:null}

            <FormInput labelValue={email} placeholderText="Email" iconType="user"
                onChangeText={(userEmail) => setEmail(userEmail)} />
                {!errorDisplay? <Text>{emailError}</Text>:null}

            <FormInput labelValue={password} placeholderText="Password" iconType="lock" secureTextEntry={true}
                onChangeText={(userPassword) => setPassword(userPassword)} />
                {!errorDisplay? <Text>{passwordError}</Text>:null}

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />
            {!errorDisplay? <Text>{passwordError}</Text>:null}
 
            {!errorDisplay?<Text>{matchError}</Text>:null}
            <FormButton buttonTitle="Sign Up" onPress={Register} />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms has been Clicked!')}>
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
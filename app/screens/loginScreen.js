import React, { useEffect, useState } from "react";
import { View,StyleSheet,Text,Button ,TouchableOpacity,Image} from "react-native";
import FormInput from "../conponents/FormInput";
import FormButton from "../conponents/FormButton";
import SocialButton from "../conponents/SocialButton";
import axios from "axios";
import { Alert } from "react-native";



const LoginScreen=({navigation})=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const [errorDisplay,setErrorDisplay]=useState(false);


    const loginn =async ()=> {

      if(!password || !email ){
        Alert.alert("Fill The Complete Form");
        return
    }
 
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



      if (emailRegex.test(email)) {
        setEmailError('');
      } else {
        setEmailError("Please Enter a Valid Email");
        return;
        }

    
      setErrorDisplay(true)

      const axiosInstance=axios.create({
        baseURL:'http://192.168.80.150:5000',
        headers:{
          'Content-Type':'application/json'
        },
      });
      axiosInstance.post("/login",{email,password})
      .then(response=>{
        console.log(response);
        console.log("hi")
        if (response.data.success===true){
          navigation.navigate("Whole")
          

        }
        
        else if(response.data.message==="Incorrect password"){
          Alert.alert("Failure","Login Failed Incorrect password or email")
        }
      })
      .catch(error=>{
        console.log(error);
        Alert.alert("User Account Doesnt Exist","SignUp First")
      })

};



    return (
        <View style={styles.container}>
           <Image source={require("../../assets/signin-logo.png")} style={styles.logo} />
           <Text style={styles.text} >Social Wallet</Text>

           <FormInput labelValue={email} placeholderText="Email" iconType="user" 
           onChangeText={(userEmail)=>setEmail(userEmail)} />
           {!errorDisplay?<Text>{emailError}</Text>:null}

           <FormInput labelValue={password} placeholderText="Password" iconType="lock" secureTextEntry={true} 
            onChangeText={(userPassword)=>setPassword(userPassword)}/>
           

             <TouchableOpacity  onPress={()=>navigation.navigate('Forgot')}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <FormButton buttonTitle="Sign In" onPress={loginn} />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't Have Account? Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#e9bebc'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius:50,
      },
      text: {
        
        fontSize: 28,
        fontWeight:"bold",
        marginBottom: 10,
        color: '#D05C57',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'Lato-Regular',
      },
      
});
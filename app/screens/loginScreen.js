import React, { useEffect, useState } from "react";
import { View,StyleSheet,Text,Button ,TouchableOpacity,Image} from "react-native";
import FormInput from "../conponents/FormInput";
import FormButton from "../conponents/FormButton";
import SocialButton from "../conponents/SocialButton";

const LoginScreen=({navigation})=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    return (
        <View style={styles.container}>
           <Image source={require("../../assets/signin-logo.png")} style={styles.logo} />
           <Text style={styles.text} >Social Wallet</Text>

           <FormInput labelValue={email} placeholderText="Email" iconType="user" 
           onChangeText={(userEmail)=>setEmail(userEmail)} />

           <FormInput labelValue={password} placeholderText="Password" iconType="lock" secureTextEntry={true} 
            onChangeText={(userPassword)=>setPassword(userPassword)}/>
             <TouchableOpacity  onPress={()=>navigation.navigate('Forgot')}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <FormButton buttonTitle="Sign In" onPress={()=>navigation.navigate("Whole")} />

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
import React from "react";
import { View,StyleSheet,Text,Button,Image } from "react-native";

import FormButton from "../conponents/FormButton";


const ProfileScreen=({navigation})=>{
    return (
       <View style={styles.container}>
        <Image style={styles.userimage} source={require ("../../assets/users/user-2.jpg")}/>
        <Text style={styles.nametext}>Ameer Hamza</Text>
        <FormButton buttonTitle="Log Out" onPress={() => navigation.navigate("Login")} />
       </View>
    )
}

export default ProfileScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        margin:100,
        
    },
    userimage:{
        width:120,
        height:120,
        borderRadius:25,
        
    },
    nametext:{
        fontSize:20,
    },
  });
import React from "react";
import { View,StyleSheet,Text,Button,Image } from "react-native";
import { InputField, InputWrapper } from "../styles/addPostStyles";
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';




const AddPostScreen=({navigation})=>{
    return (
       <View style={styles.container}>
        <InputWrapper>
            <InputField placeholder="What's in you mind!!" multiline numberOfLines={4} />
        </InputWrapper>
        <ActionButton buttonColor="rgba(181,76,70,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={() => console.log("notes tapped!")}>
            <Icon name="camera-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Choose image" onPress={() => {}}>
            <Icon name="md-images-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
         
        </ActionButton>
       </View>
    )
}

export default AddPostScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
  
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
     
});
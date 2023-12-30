import React from "react";
import { View,StyleSheet,Text,Button,Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';



const OnBoardingScreen=({navigation})=>{
    return (
        <Onboarding
        onSkip={()=>navigation.replace('Login')}
        onDone={()=>navigation.replace('Login')}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../../assets/onboarding-img1.png')} />,
            title: 'Social Wallet',
            subtitle: 'A Place Where You can Socialize ',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../../assets/onboarding-img2.png')} />,
            title: 'Share Everything',
            subtitle: 'Share About Your Happy Places',
          },
          {
            backgroundColor: '#e9bebc',
            image: <Image source={require('../../assets/onboarding-img3.png')} />,
            title: 'Keep Track',
            subtitle: 'Keep in Touch With Different Brands',
          },
          
        ]}
      />
    )
}

export default OnBoardingScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
});
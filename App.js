import { StatusBar } from 'expo-status-bar';
import React,{ useState ,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnBoardingScreen from './app/screens/OnBoardingScreen';
import LoginScreen from './app/screens/loginScreen';
import SignupScreen from './app/screens/signupScreen';
import HomeScreen from './app/screens/HomeScreen';
import WholeStack from './app/screens/WholeStack';
import ForgotScreen from './app/screens/ForgotPasswordScreen';


const AppStack=createStackNavigator();

export default function App() {

  const[isFirstLaunch,setFirstLaunch]=useState(null);

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then(value=>{
      if(value==null){
        AsyncStorage.setItem('alreadyLaunched','true')
        setFirstLaunch(true);
      }
      else{
        setFirstLaunch(false);
      }
    })
  },[]);

  if(isFirstLaunch==null){
    return null;
  }
  else if(isFirstLaunch==true){
    return (
      <NavigationContainer >
       <AppStack.Navigator screenOptions={{
           headerShown:false
        }}>
          
         <AppStack.Screen name="OnBoarding" component={OnBoardingScreen}/>
         <AppStack.Screen name="Login" component={LoginScreen} />
         <AppStack.Screen name="Signup" component={SignupScreen} />
         <AppStack.Screen name="Forgot" component={ForgotScreen} />
         <AppStack.Screen name="Whole" component={WholeStack} />
       </AppStack.Navigator>
   
      </NavigationContainer>
     );
  }
  else{
   return  (
      <NavigationContainer >
     <AppStack.Navigator  screenOptions={{
           headerShown:false
        }}>

       {/* <AppStack.Screen name="OnBoarding" component={OnBoardingScreen}/> */}
       <AppStack.Screen name="Login" component={LoginScreen} />
       <AppStack.Screen name="Signup" component={SignupScreen} />
       <AppStack.Screen name="Forgot" component={ForgotScreen} />
       {/* <AppStack.Screen name="Home" component={HomeScreen} /> */}
       <AppStack.Screen name="Whole" component={WholeStack} />
     </AppStack.Navigator>
 
    </NavigationContainer>
   
   )
  }
  // return (
  //   <NavigationContainer >
  //    <AppStack.Navigator headerMode='none'>
  //      <AppStack.Screen name="OnBoarding" component={OnBoardingScreen}/>
  //      <AppStack.Screen name="Login" component={LoginScreen} />
  //    </AppStack.Navigator>
 
  //   </NavigationContainer>
  //  );
  
}

const styles = StyleSheet.create({
  
});

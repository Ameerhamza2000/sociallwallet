import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from  'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import AddPostScreen from "./AddPostScreen";

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();


  
  const WholeStack = ({navigation}) => {

  
    return (
      <Tab.Navigator
        screenOptions={{
          activeTintColor: '#2e64e5',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'black',
              fontSize: 18,
            }
        }} >

        <Tab.Screen
          name="Social Wallet"
          component={HomeScreen}
          options={() => ({
            tabBarLabel: 'Home',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            ),
          })}
        />

        <Tab.Screen
          name="Add"
          component={AddPostScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <AntDesign name="plus" color={color} size={size} />
            ),
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <FontAwesome5.Button
                  name="check"
                  size={22}
                  backgroundColor="#fff"
                  color="black"
                  onPress={() => navigation.navigate('Social Wallet')}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  export default WholeStack;




  // const FeedStack=({navigation})=>{
    //     <Stack.Navigator>
    //     <Stack.Screen
    //       name="Social Wallet"
    //       component={HomeScreen}
    //       options={{
    //         headerTitleAlign: 'center',
    //         headerTitleStyle: {
    //           color: '#2e64e5',
    //         //   fontFamily: 'Kufam-SemiBoldItalic',
    //           fontSize: 18,
    //         },
    //         headerStyle: {
    //           shadowColor: '#fff',
    //           elevation: 0,
    //         },
    //         headerRight: () => (
    //           <View style={{marginRight: 10}}>
    //             <FontAwesome5.Button
    //               name="plus"
    //               size={22}
    //               backgroundColor="#fff"
    //               color="#2e64e5"
    //               onPress={() => navigation.navigate('AddPost')}
    //             />
    //           </View>
    //         ),
    //       }}
    //     />
    //     <Stack.Screen
    //       name="AddPost"
    //       component={AddPostScreen}
    //       options={{
    //         title: '',
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           backgroundColor: '#2e64e515',
    //           shadowColor: '#2e64e515',
    //           elevation: 0,
    //         },
    //         headerBackTitleVisible: false,
    //         headerBackImage: () => (
    //           <View style={{marginLeft: 15}}>
    //             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
    //           </View>
    //         ),
    //       }}
    //     />
    //     {/* <Stack.Screen
    //       name="HomeProfile"
    //       component={ProfileScreen}
    //       options={{
    //         title: '',
    //         headerTitleAlign: 'center',
    //         headerStyle: {
    //           backgroundColor: '#fff',
    //           shadowColor: '#fff',
    //           elevation: 0,
    //         },
    //         headerBackTitleVisible: false,
    //         headerBackImage: () => (
    //           <View style={{marginLeft: 15}}>
    //             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
    //           </View>
    //         ),
    //       }}
    //     /> */}
    //   </Stack.Navigator>
    // };
    
    // const ProfileStack = ({navigation}) => (
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="Profile"
    //         component={ProfileScreen}
    //         options={{
    //           headerShown: false,
    //         }}
    //       />
    //       {/* <Stack.Screen
    //         name="EditProfile"
    //         component={EditProfileScreen}
    //         options={{
    //           headerTitle: 'Edit Profile',
    //           headerBackTitleVisible: false,
    //           headerTitleAlign: 'center',
    //           headerStyle: {
    //             backgroundColor: '#fff',
    //             shadowColor: '#fff',
    //             elevation: 0,
    //           },
    //         }}
    //       /> */}
    //     </Stack.Navigator>
    //   );
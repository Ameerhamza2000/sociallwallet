import React from "react";
import { View,StyleSheet,Text,Button,Image ,FlatList} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import PostCards from "../conponents/PostCards";


import { Container} from "../styles/feedStyles";

const Posts = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../../assets/users/user-3.jpg'),
      postTime: '4 mins ago',
      post:
        'Hey there, this is my test for a post of my social wallet app in React Native.',
      postImg: require('../../assets/posts/post-img-3.jpg'),
      liked: true,
      likes: '12',
      comments: '3',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../../assets/users/user-1.jpg'),
      postTime: '2 hours ago',
      post:
        'Hey there, this is my test for a post of my social wallet app in React Native.',
      postImg: 'none',
      liked: false,
      likes: '8',
      comments: '0',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../../assets/users/user-4.jpg'),
      postTime: '1 hours ago',
      post:
        'Hey there, this is my test for a post of my social wallet app in React Native.',
      postImg: require('../../assets/posts/post-img-2.jpg'),
      liked: true,
      likes: '1',
      comments: '0',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('../../assets/users/user-6.jpg'),
      postTime: '1 day ago',
      post:
        'Hey there, this is my test for a post of my social wallet app in React Native.',
      postImg: require('../../assets/posts/post-img-4.jpg'),
      liked: true,
      likes: '22',
      comments: '4',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: require('../../assets/users/user-7.jpg'),
      postTime: '2 days ago',
      post:
        'Hey there, this is my test for a post of my social wallet app in React Native.',
      postImg: 'none',
      liked: false,
      likes: '0',
      comments: '0',
    },
  ];
  
const HomeScreen=({navigation})=>{
    return (
       <Container>
        <FlatList 
          data={Posts}
          renderItem={({item})=><PostCards item={item}/>}
          keyExtractor={item=>item.id}
          showsVerticalScrollIndicator={false}
        />
       </Container>
    )
}

export default HomeScreen;

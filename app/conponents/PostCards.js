import React from "react";
import { View,StyleSheet,Text,Button,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


import { Container,Card,UserInfo,UserImg,UserName,UserInfoText,Divider ,PostTime, PostText, PostImg, InteractionWrapper,Interaction,InteractionText} from "../styles/feedStyles";

const PostCards=({item})=>{
    likeIcon=item.liked? 'heart':'heart-outline';
    likeIconColor=item.liked? '#2e64e5':'#333'

    if(item.likes>0){
        likeText=item.likes + ' Likes'
    }
    else{
        likeText=' Likes'
    }

    if(item.comments>0){
        commentText=item.comments + ' Comments'
    }
    else{
        commentText=' Comments'
    }
    return (
        <Card>

        <UserInfo>
            <UserImg  source={item.userImg} />
            <UserInfoText>
            <UserName>{item.userName}</UserName>
            <PostTime>{item.postTime}</PostTime>
            </UserInfoText>
        </UserInfo>

        <PostText>{item.post}</PostText>

       { item.postImg != "none" ? <PostImg   source={item.postImg}/> : <Divider/>}

        <InteractionWrapper>
            <Interaction active={item.liked}>
                <Ionicons name={likeIcon} size={25} color={likeIconColor} />
                <InteractionText active={item.liked}>{likeText}</InteractionText>
            </Interaction>

            <Interaction>
                <Ionicons name="md-chatbubble-outline" size={25} />
                <InteractionText>{commentText}</InteractionText>
            </Interaction>
        </InteractionWrapper>
    </Card>
    )
};

export default PostCards;
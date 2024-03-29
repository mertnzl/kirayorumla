import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View,TouchableOpacity,Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import { useNavigation } from "@react-navigation/native";
import { Feather,FontAwesome5 ,MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import CommentScreen from '../screens/CommentScreen';

const Tab = createBottomTabNavigator();
 
const RootNavigator = () => {
  

    return(
        
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#023e8a",
          tabBarInactiveTintColor: "#00b4d8",
          headerShown: false,
          tabBarStyle: {
            height: 80,
            
          },
        }}
        >

            <Tab.Screen name="Comment"
         component={CommentScreen}
         options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment-processing-outline" size={24} color={color} />
            ),
          }}
          />
             <Tab.Screen name="Home"
         component={HomeNavigator}
         options={{
            tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
            ),
          }}
        />
        
        <Tab.Screen name="Profile"
         component={ProfileNavigator}
         options={{
            tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
            ),
          }}
          />
      
            
        </Tab.Navigator>
        
    )
}



export default RootNavigator;
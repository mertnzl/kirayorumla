import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CommentScreen from '../screens/CommentScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useNavigation from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Comment" component={CommentScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
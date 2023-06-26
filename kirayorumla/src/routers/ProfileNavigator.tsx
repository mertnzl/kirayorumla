import React from 'react'
import {Text} from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons'; 
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator();


function ProfileNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerStyle:{backgroundColor:'#F1F1F1'},
                headerTitle: () => (
                    <Text style={{fontWeight:'bold',fontSize:15}}>İlanlarım</Text>
                ),
                headerLeft: () => (
                    <MaterialCommunityIcons style={{marginLeft:15}} name="lightbulb-on" size={24} color="#919191" />
                ),
                headerRight : () => (
                    <Ionicons style={{marginRight:15}} name="ios-arrow-redo-sharp" size={24} color="#919191" />
                )

            }}
        />

    </Stack.Navigator>
  )
}

export default ProfileNavigator
import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons ,Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";





const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
       headerShown: true,
    }}
    >
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerShown: false,
          
        }}
         />
        <Stack.Screen
            name="CategoryFilter"
            component={CategoryFilterScreen}
            options={{
                headerStyle:{backgroundColor:'#00b4d8'},
                headerTitle: () => (
                    <Text style={{fontWeight:'bold',fontSize:15,color:'#023e8a'}}>Bilgi Formu</Text>
                ),
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back" size={24} color="#023e8a" />
                  </TouchableOpacity>
                ),
                headerRight : () => (
                  <Feather name="user" size={24} color="#023e8a" />
                )

            }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator
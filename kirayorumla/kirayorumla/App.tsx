
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routers/RootNavigator';
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    
  );
}


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//React Navigation

import RootStack from './navigators/RootStack';



export default function App() {
  return (
    <RootStack/>
  );
}



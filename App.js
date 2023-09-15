import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`flex-1 bg-green text-white items-center justify-center`}>
      <Text>Opens up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
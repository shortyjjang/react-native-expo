import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';


export default function PageLanding({ navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  },[]);
    return (
      <View style={tw`flex-1 bg-green-500 items-center justify-center`}>
        <Text style={tw`text-white`}>Landing!</Text>
        <StatusBar style="auto" />
      </View>
    );
}

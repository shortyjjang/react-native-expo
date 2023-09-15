import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';


export default function PageMain() {
    return (
      <View style={tw`flex-1 bg-red-500 items-center justify-center`}>
        <Text style={tw`text-white`}>Main!</Text>
        <StatusBar style="auto" />
      </View>
    );
}

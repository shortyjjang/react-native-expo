import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import {CommonActions} from '@react-navigation/native';


export default function PageLanding({navigation}) {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('Main', {
    //     //route params
    //     name: 'Jane'
    //   }); //페이지 이동
    // }, 2000);
    setTimeout(() => {
      //메인으로 이동후 뒤로가기 버튼을 삭제하기 위한 초기화
      navigation.dispatch(
        CommonActions.reset({
          index: 1, //메인이 1번째로 재설정, 그래서 뒤로가기를 누르면 앱종료
          routes: [ //메인으로 이동
            {
              name: 'Main',
              params: {name: 'Jane'},
            },
          ],
        }),
      );
      
    }, 2000);
  },[]);
    return (
      <View style={tw`flex-1 bg-green-500 items-center justify-center`}>
        <ActivityIndicator
          size="large" //large, small, android에서는 숫자로도 가능
          color="#00ff00" //안드로이드에서는 색지정 불가
          animating={true}
          hidesWhenStopped={true} //애니메이션을 멈추면 숨김 
        />
      </View>
    );
}

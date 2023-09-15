
import PageLanding from './src/pages/Landing';
import PageMain from './src/pages/Main';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" 
        options={
          {headerShown: false} //헤더 노출 옵션 설정
        }
        component={PageLanding} />
        <Stack.Screen name="Main" component={PageMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Text, View, TouchableHighlight,Alert } from 'react-native';
import tw from 'twrnc';
import CustomButton from '../compoents/Button';


export default function PageMain({route}) {
  const { name } = route.params;
  return (
    <View style={tw`flex-1 bg-red-500 items-center justify-center`}>
      <Text style={tw`text-white`}>{name}</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => Alert.alert('Cannot press this one')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <CustomButton 
        onPress={() => Alert.alert('Cannot press this one')}
        type="primary"
        size="large"
        title="Learn More"
      />
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => (
            <View
              style={[highlighted && {marginLeft: '50px'}]}
            />
          ))
        }
        data={[
          {title: 'Title Text', key: 'item1'},
          {title: 'Title Text2', key: 'item2'}
        ]}
        renderItem={({item, index, separators}) => (
          <TouchableHighlight
            key={item.key}
            onPress={() => Alert.alert('Cannot press this one')}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white'}}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

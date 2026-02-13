import {View, Text} from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{color: 'black', fontSize: 12}}>powderblue</Text>
      </View>
      
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{color: 'black', fontSize: 13}}>skyblue</Text>
      </View>
      
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{color: 'white', fontSize: 14}}>steelblue</Text>
      </View>
    </View>
  );
};

export default FixedDimensionsBasics;

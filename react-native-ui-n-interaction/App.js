import {View, Text} from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`? 
    // - The children will only expand based on the parent's height instead of filling up the entire screen.
    <View style={{height: 300}}>
      <View style={{flex: 1, backgroundColor: 'powderblue',}}><Text style={{color: 'black'}}>Box 1</Text></View>
      <View style={{flex: 2, backgroundColor: 'skyblue',}}><Text style={{color: 'black'}}>Box 2</Text></View>
      <View style={{flex: 3,backgroundColor: 'steelblue',}}><Text style={{color: 'white'}}>Box 3</Text></View>
    </View>
  );
};

export default FlexDimensionsBasics;

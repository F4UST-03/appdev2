import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just big Blue</Text>
      <Text style={[styles.bigBlue, styles.red]}>big Blue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then big Blue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  red: {
    color: 'red',
  },
  
});

export default LotsOfStyles;

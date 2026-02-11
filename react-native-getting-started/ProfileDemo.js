import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      <View style={styles.infoContainer}>
        
        <Text style={styles.text}>
          <Text style={styles.bold}>Course & Section: </Text> 
          BSIS 3A</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Name: </Text> 
          Jorilyn Oman Pantallano</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Age: </Text>
          22</Text> 
        <Text style={styles.text}>
          <Text style={styles.bold}>Favorite Hobby: </Text> 
          Listening to Music</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Short Bio: </Text> 
          I am a college student learning React Native and improving my mobile and web development skills. 
          I also love using HTML, CSS, and JavaScript to create beautiful and functional websites. 
          In my free time, I enjoy listening to music, which helps me relax and stay motivated while coding.
        </Text>

        <Text style={styles.subHeader}>Pet Peeves:</Text>
        <Text style={styles.text}>• Groupmates who don't cooperate</Text>
        <Text style={styles.text}>• Noisy, disruptive, and loud classmates</Text>
        <Text style={styles.text}>• MGA PAASA!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',  
    alignItems: 'center', 
    backgroundColor: '#b9aade',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FFF2D7',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: { 
    fontWeight: 'bold'
  },
});

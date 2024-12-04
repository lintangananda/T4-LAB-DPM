import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScoreBoard from './src/components/ScoreBoard';

const App = () => {
  return (
    <View style={styles.container}>
      <ScoreBoard
  teamAName="Tim A"
  teamBName="Tim B"
  teamALogo="https://i.pinimg.com/474x/4f/2f/9c/4f2f9c2bc095e50c8a65209407761186.jpg"
  teamBLogo="https://i.pinimg.com/736x/ba/62/fb/ba62fbd06c21f6d2c02a7e21d25815fa.jpg"
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;

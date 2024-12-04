import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ImageBackground, Image } from 'react-native';

const ScoreBoard = ({ teamAName, teamBName, teamALogo, teamBLogo }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleScoreChange = (team, increment) => {
    if (team === 'A') {
      const newScore = Math.max(0, scoreA + increment);
      setScoreA(newScore);
      if (newScore === 10) {
        setWinner(teamAName);
        Alert.alert('Pemenang!', `${teamAName} menang!`);
      }
    } else {
      const newScore = Math.max(0, scoreB + increment);
      setScoreB(newScore);
      if (newScore === 10) {
        setWinner(teamBName);
        Alert.alert('Pemenang!', `${teamBName} menang!`);
      }
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/474x/48/aa/ab/48aaaba5b6a56f38d00ffc2b2d587313.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}> Pertandingan Futsal </Text>

        <View style={styles.teamContainer}>
          <Image source={{ uri: teamALogo }} style={styles.logo} />
          <Text style={styles.teamName}>{teamAName}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonGroup}>
            <Button title="+" onPress={() => handleScoreChange('A', 1)} color="#4CAF50" />
            <Button title="-" onPress={() => handleScoreChange('A', -1)} color="#F44336" />
          </View>
        </View>

        <View style={styles.teamContainer}>
          <Image source={{ uri: teamBLogo }} style={styles.logo} />
          <Text style={styles.teamName}>{teamBName}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonGroup}>
            <Button title="+" onPress={() => handleScoreChange('B', 1)} color="#4CAF50" />
            <Button title="-" onPress={() => handleScoreChange('B', -1)} color="#F44336" />
          </View>
        </View>

        <Button title="Reset Pertandingan" onPress={handleReset} color="#2196F3" />

        <View style={styles.statusContainer}>
          {winner ? (
            <Text style={styles.winnerText}>{winner} menang! 🏆</Text>
          ) : (
            <Text style={styles.statusText}>Pertandingan sedang berlangsung...</Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  teamContainer: {
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: '80%',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 8,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  statusContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  winnerText: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
    paddingHorizontal: 16,
  },
});

export default ScoreBoard;

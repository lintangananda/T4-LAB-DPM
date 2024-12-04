import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildComponent = ({ user, onUpdateUser, onDeleteUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userInfo}>User Info:</Text>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.age}</Text>
      <Text>Address: {user.address}</Text>
      <Button title="Update Age" onPress={onUpdateUser} />
      <Button title="Delete Age" onPress={onDeleteUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  userInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default ChildComponent;
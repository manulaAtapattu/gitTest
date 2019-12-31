import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button>Button1</Button>
      <Text>added part</Text>
      <Button>Button2</Button>
    </View>
  );
}
//edit1

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#fff',
  },
  Text: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

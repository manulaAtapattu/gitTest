import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button>Button2</Button>
      <Text>added par1t</Text>
    </View>
  );
}
//edit2
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

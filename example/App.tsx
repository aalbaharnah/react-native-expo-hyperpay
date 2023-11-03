import { StyleSheet, Text, View } from 'react-native';

import * as ExpoHyperpay from 'expo-hyperpay';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoHyperpay.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  I18nManager,
  View,
} from 'react-native';
import RNRestart from 'react-native-restart';

function App(): JSX.Element {
  const isRtl = I18nManager.isRTL;

  const onPress = () => {
    const nextRtl = !isRtl;
    I18nManager.allowRTL(nextRtl);
    I18nManager.forceRTL(nextRtl);
    RNRestart.restart();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{`RTL enabled: ${isRtl}`}</Text>
      <Text style={styles.text}>Some text for test</Text>
      <Text style={styles.text}>Bla bla bla</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'left',
    fontSize: 32,
  },
  content: {
    alignItems: 'center',
  },
  button: {
    marginTop: 24,
    width: 120,
    height: 40,
    borderWidth: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

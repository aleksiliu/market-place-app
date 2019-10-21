/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, View} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
          <Text style={{fontSize: 100}}>Hello, Suomi!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

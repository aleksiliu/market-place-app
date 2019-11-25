import React from 'react';
import {Text, View, Button} from 'react-native';

import {
  NavigationStackProp,
  NavigationStackOptions,
} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

const LoginScreen = ({navigation}: Props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#212325',
        }}>
        <Text style={{color: 'white'}}>Log in</Text>
        <Button
          title="Go go sign up"
          onPress={() => navigation.navigate('Signup')}></Button>
      </View>
    </>
  );
};

LoginScreen.navigationOptions = (): NavigationStackOptions => {
  return {
    header: null,
  };
};

export default LoginScreen;

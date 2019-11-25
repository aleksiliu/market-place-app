import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp;
};

const SignupScreen = ({navigation}: Props) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#212325',
        }}>
        <Text style={{color: 'white'}}>Sign Up</Text>
        <Button
          title="Go go log in"
          onPress={() => navigation.navigate('Login')}></Button>
        <Button
          title="Go to main flow"
          onPress={() => navigation.navigate('mainFlow')}></Button>
      </View>
    </>
  );
};

export default SignupScreen;

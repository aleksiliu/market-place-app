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

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './views/HomeScreen';
import AnnouncementView from './views/AnnouncementView';
import SignupScreen from './views/SignupScreen';
import LoginScreen from './views/LoginScreen';

const AppNavigator = createSwitchNavigator(
  {
    loginFlow: createStackNavigator({
      Login: LoginScreen,
      Signup: SignupScreen,
    }),
    mainFlow: createStackNavigator({
      Home: HomeScreen,
      Details: AnnouncementView,
    }),
  },
  {
    initialRouteName: 'loginFlow',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#212325',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

const App: React.FC = () => {
  return <AppContainer />;
};

export default App;

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';

import {REACT_APP_API_KEY, REACT_APP_API_ID} from 'react-native-dotenv';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'announcements',
        endpoint: REACT_APP_API_KEY,
        region: REACT_APP_API_ID,
      },
    ],
  },
});

AppRegistry.registerComponent(appName, () => App);

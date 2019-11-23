/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';
import config from './app/config';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'announcements',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
  Auth: {
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    region: config.cognito.REGION,
  },
  Storage: {
    AWSS3: {
      region: config.cognito.REGION,
      bucket: config.s3.BUCKET,
    },
  },
});

AppRegistry.registerComponent(appName, () => App);

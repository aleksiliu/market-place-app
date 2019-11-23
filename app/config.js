import {REACT_APP_API_KEY, REACT_APP_API_ID} from 'react-native-dotenv';

export default {
  s3: {
    REGION: 'eu-north-1',
    BUCKET: 'market-place-uploads',
  },
  apiGateway: {
    NAME: 'dev-market-place-backend',
    REGION: 'eu-north-1',
    URL: REACT_APP_API_KEY,
    ID: REACT_APP_API_ID,
  },
  cognito: {
    REGION: 'eu-west-1',
    IDENTITY_POOL_ID: 'eu-west-1:2fed05e2-f2b2-4caf-91d4-e50aa7355438',
  },
};

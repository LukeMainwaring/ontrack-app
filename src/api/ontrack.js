import axios from 'axios';
import { AsyncStorage } from 'react-native';

let instance = axios.create({
  baseURL: ''
});

if (process.env.NODE_ENV === 'development') {
  instance = axios.create({
    baseURL: 'http://cedb7272.ngrok.io'
  });
} else {
  // Production server
  instance = axios.create({
    baseURL:
      'http://ontrackserver-env.pikgvbwvcg.us-east-1.elasticbeanstalk.com/'
  });
}

// Uncomment this to connect local app to production server
// apiUrl = 'http://ontrackserver-env.pikgvbwvcg.us-east-1.elasticbeanstalk.com/';

// Authenticate user
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export { instance as default };

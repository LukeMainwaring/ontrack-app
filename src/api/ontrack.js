import axios from 'axios';

let apiUrl = '';
if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://8fe804c6.ngrok.io';
} else {
  // Production server
  apiUrl =
    'http://ontrackserver-env.pikgvbwvcg.us-east-1.elasticbeanstalk.com/';
}

// Uncomment this to connect local app to production server
apiUrl = 'http://ontrackserver-env.pikgvbwvcg.us-east-1.elasticbeanstalk.com/';

export default axios.create({
  baseURL: apiUrl
});

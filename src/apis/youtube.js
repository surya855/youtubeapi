import axios from 'axios';

const KEY = 'AIzaSyC3uhgBOnKEAKSh9kXNTCR7JtQsTdMN1l0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
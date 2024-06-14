import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Change to your backend URL
});

export default instance;
//npm install openai@^4.0.0
import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-meetup-464c8-default-rtdb.firebaseio.com/'
})
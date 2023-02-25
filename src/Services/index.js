import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: { maxResults: 50 },
    headers: {
        'X-RapidAPI-Key': 'a782890d8cmsh07f13bafd647533p13566fjsn987293ede4d9',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};
export const fetchData = (url) => {
    return axios.get(`${BASE_URL}/${url}`, options);
};

import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: { maxResults: 50 },
    headers: {
        'X-RapidAPI-Key': '7aeb8b93d1mshbe550573c2f0ea4p1769c1jsn50021e6f3802',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};
export const fetchData = (url) => {
    return axios.get(`${BASE_URL}/${url}`, options);
};

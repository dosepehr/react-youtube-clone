import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    params: { maxResults: 50 },
    headers: {
        'X-RapidAPI-Key': '7f969a59bcmsh367313f461fbf4ap1fc7b0jsnca138dc750d0',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};
export const fetchData = (url) => {
    return axios.get(`${BASE_URL}/${url}`, options);
};

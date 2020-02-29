import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'
const url = 'https://api-football-v1.p.rapidapi.com/v2/leagues/country/';

export default async (country, season = 2019) => {
    const result = await axios.get(url + country + '/' + season,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.leagues
}
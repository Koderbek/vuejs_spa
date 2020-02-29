import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'

const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/';

export default async (id, period = 'last', limit = 5) => {
    const result = await axios.get(url + id + '/' + period + '/' + limit,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.fixtures
}
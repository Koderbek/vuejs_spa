import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'

const url = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/';

export default async (id) => {
    const result = await axios.get(url + id,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.standings[0]
}
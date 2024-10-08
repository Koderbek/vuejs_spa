import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'
import { API_URLS } from '../constants/api-urls.js'

export default async (id) => {
    const result = await axios.get(API_URLS.GET_LEAGUE_TABLE + id,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.standings[0]
}
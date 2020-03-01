import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'
import { API_URLS } from '../constants/api-urls.js'

export default async (id, period = 'last', limit = 5) => {
    const result = await axios.get(API_URLS.GET_GAMES + id + '/' + period + '/' + limit,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.fixtures
}
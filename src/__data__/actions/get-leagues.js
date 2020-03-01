import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'
import { API_URLS } from '../constants/api-urls.js'

export default (country, season = 2019) => {
    const result = axios.get(API_URLS.GET_LEAGUES + country + '/' + season,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.leagues
}
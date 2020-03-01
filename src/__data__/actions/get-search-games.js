import axios from 'axios'
import * as personalApiKey from '../constants/api-key.js'
import {API_URLS} from '../constants/api-urls.js'

export default (id, date) => {
    return axios.get(API_URLS.GET_SEARCH_GAMES + id + '/' + date,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey.API_KEY},
            validateStatus: function (status) {
                return status === 200;
            }
        })
}
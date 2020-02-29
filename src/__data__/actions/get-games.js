import axios from 'axios'

const personalApiKey = '4e436d1c54msh19af8e3baaddd90p189f54jsnf74b7880f274';
const url = 'https://api-football-v1.p.rapidapi.com/v2/fixtures/league/';

export default async (id, period = 'last', limit = 5) => {
    const result = await axios.get(url + id + '/' + period + '/' + limit,
        {
            responseType: 'json',
            headers: {'X-RapidAPI-Key': personalApiKey},
            validateStatus: function (status) {
                return status === 200;
            }
        });

    return result.data.api.fixtures
}
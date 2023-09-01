import axios from "axios";

import API_KEY from "./apiKey";

const BASE_URL = 'https://na1.api.riotgames.com/';

const SummonerInfo = async (summonerName) => {
    try {
        return axios.get(`${BASE_URL}lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`);

    } catch (error) {
        if (error.response) {
            throw new Error(`Response code: ${error.response.status}`)
        } else {
            console.log(error.message);
            throw new Error('Could not get summoner data from API', error.message);
        }
    }
};

export default SummonerInfo;
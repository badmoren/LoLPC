import axios from "axios";

import API_KEY from "./apiKey";

const BASE_URL = 'https://na1.api.riotgames.com/';

const summonerInfo = async (summonerName) => {
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

export const SummonerInfo = summonerInfo;

const summonerEntries = async (encryptedSummonerId) => {
    try {
        return axios.get(`${BASE_URL}/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`);
    
    } catch (error) {
        if (error.response) {
            throw new Error(`Response code: ${error.response.status}`)
        } else {
            console.log(error.message);
            throw new Error('Could not get summoner data from API', error.message);
        }
    }
};

export const SummonerEntries = summonerEntries;
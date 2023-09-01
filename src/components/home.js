import React, { useState, useEffect } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './header';
import { SummonerInfo, SummonerEntries } from '../api/riotApi';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: rgb(179, 149, 86);
    }
`
const MainContent = styled.div`
    background-color: rgb(179, 149, 86);
`

function Home() {
    const [summonerData, setSummonerData] = useState("");

    useEffect(() => {
        SummonerInfo('') // Enter Summoner Name
        .then(data => {
            setSummonerData(JSON.stringify(data.data));
        })
        .catch(error => {
            console.error(error)
        });
    }, []);

    const [summonerEntries, setSummonerEntries] = useState("");

    useEffect(() => {
        SummonerEntries('AoHdEI3V3yjUCgPV__I-e3VGzsaILnM9qwh7vrzsZBQIWzWd')
        .then(data => {
            console.log('Data check: ', data);
            setSummonerEntries(JSON.stringify(data));
        })
        .catch(error => {
            console.error(error)
        });
    }, []);

    return (
        <MainContent>
            <GlobalStyles />
            <Header />
            {summonerData}
        </MainContent>
    );
};

export default Home
import React, { useState, useEffect } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './header';
import SummonerInfo from '../api/riotApi';

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
        SummonerInfo('BIGBOIOOZA')
        .then(data => {
            setSummonerData(JSON.stringify(data));
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
import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './header';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: rgb(179, 149, 86);
    }
`
const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    height: 100%;
`


function home({}) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <MainContent>
                
            </MainContent>
        </>
    );
};

export default home
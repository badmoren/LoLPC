import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './header';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: rgb(179, 149, 86);
    }
`
const MainContent = styled.div`
    background-color: black;
`


function home({}) {
    return (
        <>
            <GlobalStyles />
            <MainContent>
                <Header />
            </MainContent>
        </>
    );
};

export default home
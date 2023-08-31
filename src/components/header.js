import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 50%; 
    left: 1rem;
    margin-top: -1.5rem; 
`;

const HeaderContent = styled.div`
    background-color: rgb(11, 25, 71);
    color: rgb(179, 149, 86);
    text-align: center;
    font-size: 6rem;
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 1.5rem 0; 
    position: relative;
`;

function Header() {
    return (
        <HeaderContent>
            <StyledIcon icon={faBars} />
            LoL Apps
        </HeaderContent>
    );
}

export default Header;
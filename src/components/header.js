import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 2rem;
    position: absolute;
    padding-left: 2%;
    padding-top: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderContent = styled.div`
   text-align: center;
   background-color: rgb(11, 25, 71);
   color: rgb(179, 149, 86);
   font-size: 9rem;
   width: 100%
`

function header() {
    return (
        <div>
            <StyledIcon icon={faBars} size="lg"/>
            <HeaderContent>LoL Apps</HeaderContent>
        </div>
    )
}

export default header
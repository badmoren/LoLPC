import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    position: relative;
    padding-bottom: 5%;
    color: white;
    font-size: 4rem;
    padding-right: 10%;
`
const HeaderContent = styled.div`
   background-color: rgb(11, 25, 71);
   color: rgb(179, 149, 86);
   font-size: 10rem;
   width: 100%;
   height: 200px;
   padding-bottom: 5%;
`



function header() {
    return (
        <HeaderContent>
            <StyledIcon icon={faBars} size="lg" />
            LoL Apps
        </HeaderContent>
    )
}

export default header
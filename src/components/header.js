import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 2rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
   }
`
const HeaderContent = styled.div`
   text-align: center;

   background-color: rgb(11, 25, 71);
   color: rgb(179, 149, 86);
   font-size: 10rem;
   width: 100%;
   height: 25vh;
   
   @media (max-width: 768px) {
        font-size: 7.5rem;
   }
`




function header() {
    return (
        <><StyledIcon icon={faBars} size="lg" />
        <HeaderContent>
            
            LoL Apps
        </HeaderContent>
        </>
    )
}

export default header
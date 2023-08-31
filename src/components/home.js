import React from 'react';
import styled from 'styled-components';


const StyleTest = styled.div`
   background-color: #FFF;
   color: #e00000;
   display: flex;
   font-size: 90px;
`

function home({ prop2 }) {
    return (
        <StyleTest prop={prop2}>text</StyleTest>
    )
}

export default home
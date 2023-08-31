import React from 'react';
import styled from 'styled-components';


const StyleTest = styled.div`
   background-color: ${colors.primary};
   color: ${({ prop }) => (prop === 'red' ? '#e00000' : '#1ae000')};
   display: flex;
   font-size: 90px;
`

function header({ prop2 }) {
    return (
        <StyleTest prop={prop2}>text</StyleTest>
    )
}

export default header
import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
.footer {
    text-align: center;
    color: #8f8f8f;
}

`;

const currentDate = new Date().getFullYear();

export const Footer = () => (
    <Styles>
    <p className='footer'>Copyright © PGS, {currentDate}</p>
    </Styles>
   
);
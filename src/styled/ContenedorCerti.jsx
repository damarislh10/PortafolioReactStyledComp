import styled from 'styled-components';

const ContenedorCerti = styled.div `
    width:70%;
    margin-right:2%;
    margin-top:-9%;
    float:right;
    border:2px solid violet;
    padding-left:2%;

    @media (max-width: 1024px) {
        width:100%;
        margin:auto;
        text-align:center;
        padding: 0;
        
      }
`

export const ConteCerti = ContenedorCerti;
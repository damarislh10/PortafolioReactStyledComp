import styled from 'styled-components';

const ContenedorEdu = styled.div `
    width:70%;
    margin-right:2%;

    float:right;
    margin-top:-30%;
    border:2px solid orange;
    padding-left:2%;

    @media (max-width: 1024px) {
        width:100%;
        margin:auto;
        text-align:center;
        padding: 0;
        
      }
`


export const ConteE = ContenedorEdu;
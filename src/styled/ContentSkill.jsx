import styled from 'styled-components';

const ContenedorSkill = styled.div `
    width:68%;
    margin-right:2%;
    margin-top:1%;
    float:right;
    border:2px solid red;
    padding-left:3%;
    padding-right:1%;
    padding-bottom:1%;
    @media (max-width: 1024px) {
        width:100%;
        margin:auto;
        text-align:center;
        padding: 0;
      }
`

const ContenedorBarra = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    @media (max-width: 820px) {
        justify-content:center;
      }
`

export const ContSk = ContenedorSkill;
export const ContBar = ContenedorBarra;
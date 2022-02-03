import React, { Component } from 'react';
import { H2Styled } from '../styled/H2Styled';

import { ConteCerti } from '../styled/ContenedorCerti';
import { Location } from '../styled/AboutStyled';

export default class Certification extends Component {
  render() {
    return <div>
      <ConteCerti>
        <H2Styled name="Certificaciones" />
        <div className="Certificacion-container">
          <div className="Certificacion-item">
            <h2>Mision Tic - <span>2021</span>
              <Location>Habilidades de programaciòn de Mision TIC 2022 con profundizaciòn en desarrollo de aplicaciones web</Location>
            </h2>
          </div>

        </div>
      </ConteCerti>
    </div>;
  }
}

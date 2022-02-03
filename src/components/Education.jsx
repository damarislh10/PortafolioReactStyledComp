import React, { Component } from 'react';
import { H2Styled } from '../styled/H2Styled';

import {ConteE} from '../styled/EducationStyled';
import {Location} from '../styled/AboutStyled';

export default class Education extends Component {
  render() {
    return <div>
        <ConteE>
        <H2Styled name="Mis estudios"/>
        <div className="Education-container">
            <div className="Education-item">
                <h2>UNAL - <span>2021</span>
                <Location>Programaciòn y desarrollo de aplicaciones web</Location>
                </h2>
                <h2>Academia GEEK - <span>2022</span>
                <Location>Desarrollo frontend con enfàsis en ReactJs</Location>
                </h2>
            </div>

        </div>
        </ConteE>
    </div>;
  }
}
